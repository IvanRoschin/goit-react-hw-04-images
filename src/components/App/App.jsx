import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { fetchImages } from 'Api/Api';
import { AppStyle } from './App.stylized';

import Searchbar from 'components/Searchbar';
// import Modal from 'components/Modal';
import ImageGallery from 'components/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    request: '',
    page: 1,
    per_page: 12,
    totalPages: 0,
    largeImageURL: '',
    contentLoad: false,
    showModal: false,
    message: '',
  };

  handleFormSubmit = request => {
    this.setState({ request });
  };

  onImageClick = largeImageURL => {
    this.setState({ largeImageURL });
  };

  componentDidMount() {
    const { request, page, per_page } = this.state;

    this.setState({
      message: 'To display pictures, enter a query in the search field',
    });
    fetchImages(request, page, per_page);
  }

  componentDidUpdate(prevProps, prevState) {
    const { request, page, per_page } = this.state;

    if (prevState.request !== request) {
      console.log('Изменился риквест, нужно делать фетч');
      fetchImages(request, page, per_page);
    }
  }

  render() {
    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          request={this.state.request}
          onClick={this.onImageClick}
        />
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
