import React, { Component } from 'react';
import { fetchImages } from 'Api/Api';
import IdleMessage from 'components/IdleMessage';
import ErrorMessage from 'components/ErrorMessage';
import RequestMessage from 'components/RequestMessage';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMoreButton from 'components/Button/';
import ImagesSkeleton from 'components/Skeleton';
import { Box } from 'components/Box/Box';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class App extends Component {
  state = {
    images: [],
    request: '',
    page: 1,
    total: 0,
    error: null,
    message: '',
    status: Status.IDLE,
  };

  componentDidMount() {
    this.setState({
      message: 'To display pictures, enter a query in the search field',
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { request, page } = this.state;
    if (prevState.request !== request || prevState.page !== page) {
      this.setState({
        status: Status.PENDING,
      });

      try {
        const images = await fetchImages(request, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          total: images.total,
          status: Status.RESOLVED,
          message: `Here is your ${request}s`,
        }));
      } catch (error) {
        this.setState({
          status: Status.REJECTED,
          message: `Sorry, but where are no images for your request ${request}`,
        });
      }
    }
  }

  handleFormSubmit = request => {
    this.setState({ request, images: [], page: 1, total: 0 });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, status, total, message } = this.state;

    return (
      <Box>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && <IdleMessage message={message} />}
        {status === 'pending' && <ImagesSkeleton />}
        {status === 'rejected' && <ErrorMessage message={message} />}
        {status === 'resolved' && <RequestMessage message={message} />}
        {status === 'resolved' && <ImageGallery images={images} />}
        {status === 'resolved' && images.length < total && (
          <LoadMoreButton onClick={this.loadMore} />
        )}
      </Box>
    );
  }
}
