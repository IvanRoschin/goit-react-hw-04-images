import React, { Component } from 'react';
import { Box } from '../Box/Box';
import Modal from '../Modal/index';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };
  componentDidMount() {
    console.log('App componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле Contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Box pt={5} pl={7}>
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>

        {showModal && (
          <Modal onEsc={this.toggleModal}>
            {' '}
            <h1>Привет это контент модалки как children</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              omnis assumenda hic, nostrum obcaecati aut aperiam illo,
              laudantium, quasi cumque magni rerum iure odio quibusdam
              perferendis placeat repellendus. Voluptate, quam!
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </Box>
    );
  }
}
