import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import filterContacts from '../../utils/filterContacs';
import findContact from '../../utils/findContact';
import { AppContainer, AppTitle, AppSubTitle } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');

    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  changeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  addContact = contact => {
    const { contacts } = this.state;

    const contactToAdd = {
      ...contact,
      id: uuidv4(),
    };

    if (this.isValidContact(contact)) {
      const stateContact = findContact(contacts, contact);

      if (stateContact) {
        toast.error(`${contact.name} is already in contacts.`);
        return;
      }

      this.setState(state => ({
        contacts: [...state.contacts, contactToAdd],
      }));
    }
  };

  isValidContact = ({ name, number }) => {
    if (name.length <= 1 || name.trim() === 0) {
      toast.error(`Your name is not valid. Please enter correct information.`);
      return false;
    }

    if (!number.match(/^\(?([0-9]{3})\)?[- ]?([0-9]{2})[- ]?([0-9]{2})$/)) {
      toast.error(
        `Your number is not valid. Please enter correct information.`,
      );
      return false;
    }

    return true;
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = filterContacts(contacts, filter);

    return (
      <AppContainer>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onAddContact={this.addContact} />
        <AppSubTitle>Contacts</AppSubTitle>
        {contacts.length >= 2 && (
          <ContactFilter value={filter} onChangeFilter={this.changeFilter} />
        )}
        <ContactList
          items={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
