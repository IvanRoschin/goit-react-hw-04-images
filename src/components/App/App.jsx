import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { fetchImages } from 'Api/Api';
import { AppStyle } from './App.stylized';
import { Audio } from 'react-loader-spinner';

import Searchbar from 'components/Searchbar';
// import ImageGallery from 'components/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    request: '',
    page: 1,
    total: 0,
    largeImageURL: '',
    loading: false,
    message: '',
  };

  handleFormSubmit = request => {
    this.setState({ request, images: [], page: 1, total: 0 });
  };

  onImageClick = largeImageURL => {
    this.setState({ largeImageURL });
  };

  componentDidMount() {
    // const { request, page, per_page } = this.state;

    this.setState({
      message: 'To display pictures, enter a query in the search field',
    });
    // fetchImages(request, page, per_page);
  }

  async componentDidUpdate(prevProps, prevState) {
    const { request, page } = this.state;
    if (prevState.request !== request || prevState.page !== page) {
      console.log('Изменился риквест, нужно делать фетч');

      this.setState({ loading: true });

      try {
        const searchImages = await fetchImages(request, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...searchImages],
          loading: false,
        }));
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        )}
        {/* <div>Loading...</div> */}

        {/* <ImageGallery
          request={this.state.request}
          onClick={this.onImageClick}
        /> */}
        {/* {this.state.largeImageURL.length > 0 && <Modal></Modal>} */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AppStyle>
    );
  }
}
