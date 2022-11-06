import React, { Component } from 'react';
import { fetchImages } from 'Api/Api';
import ErrorMessage from 'components/ErrorMessage';
import { AppStyle } from './App.stylized';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader';
import SkeletonCard from 'components/Skeleton/SkeletonCard';

export default class App extends Component {
  state = {
    images: [],
    request: '',
    page: 1,
    total: 0,
    largeImageURL: '',
    message: '',
    error: null,
    status: 'idle',
  };

  // handleFormSubmit = request => {
  //   this.setState({ request, images: [], page: 1, total: 0 });
  // };

  handleFormSubmit = request => {
    this.setState({ request });
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
        status: 'pending',
      });

      // try {
      //   const images = await fetchImages(request, page);
      //   this.setState(prevState => ({
      //     images: [...prevState.images, ...images.hits],
      //     total: images.total,
      //     status: 'resolved',
      //   }));
      // } catch (error) {
      //   this.setState({ status: 'rejected' });
      // }

      setTimeout(() => {
        try {
          const images = fetchImages(request, page);
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
            total: images.total,
            status: 'resolved',
          }));
        } catch (error) {
          this.setState({ status: 'rejected' });
        }
      }, 23000);
    }
  }

  render() {
    const { images, request, status } = this.state;
    if (status === 'idle')
      return <Searchbar onSubmit={this.handleFormSubmit} />;
    if (status === 'pending')
      return (
        <div>
          <Loader /> <SkeletonCard cards={12} />
        </div>
      );
    if (status === 'rejected')
      return (
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ErrorMessage
            message={`Sorry, but where are no images for your request ${request}`}
          ></ErrorMessage>
        </div>
      );
    if (status === 'resolved') {
      return (
        <AppStyle>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <div>Here's your {request}'s</div>
          <ImageGallery images={images}></ImageGallery>
        </AppStyle>
      );
    }
  }
}
