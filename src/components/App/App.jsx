import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppStyle } from './App.stylized';

import Searchbar from 'components/Searchbar';

// import Modal from '../Modal/index';

export class App extends Component {
  state = {
    imageName: '',
    loading: false,
    showModal: false,
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };
  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch(
  //     `https://pixabay.com/api/key=30078293-54d83a5a72e4f9742c7e44489&per_page16`
  //   )
  //     .then(res => res.json())
  //     .then(images => this.setState({ images }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  // AXIOS;
  // async componentDidMount() {
  //   console.log('App componentDidMount');
  //   const options = {
  //     url: 'https://pixabay.com/api/',
  //     params: {
  //       key: '30078293-54d83a5a72e4f9742c7e44489',
  //       image_type: 'photo',
  //       orientation: 'horizontal',
  //       safesearch: true,
  //       per_page: 40,
  //       q: `${this.searchQuery}`,
  //       page: `${this.page}`,
  //     },
  //   };
  //   try {
  //     const response = await axios(options);
  //     const data = response.data;
  //     console.log(data);
  //     this.incrementPage();
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('App componentDidUpdate');
  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('Обновилось поле Contacts');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleFormSubmit} />
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
