import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from '../Box/Box';
import { PageTitle, ContactsTitle } from './App.stylized';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isNameExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    console.log('Контакт добавлен');
  };

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  renderContacts = () => {
    const { contacts, filter } = this.state;
    let filtered = contacts;
    if (filter.toLowerCase()) {
      filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return filtered;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    console.log('Контакт удален');
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

  render() {
    return (
      <Box
        pt={5}
        pl={7}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="space-around"
        style={{
          gap: '16px',
        }}
      >
        <PageTitle>Phonebook</PageTitle>
        <Box
          display="inline-flex"
          alignItems="flex-start"
          justifyContent="space-around"
          style={{
            gap: '200px',
          }}
        >
          <Box
            display="inline-flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <ContactsTitle>Add Contact</ContactsTitle>

            <ContactForm onSubmit={this.addContact} />
          </Box>
          <Box>
            <ContactsTitle>Contacts List</ContactsTitle>
            <Filter findContact={this.findContact} />
            <ContactList
              contacts={this.renderContacts()}
              deleteContact={this.deleteContact}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}
