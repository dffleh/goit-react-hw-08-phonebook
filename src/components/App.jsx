import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Wrap } from './App.styled';
import { FormContacts } from './FormContacts/FormContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  // addContact = ({ name, number, id = nanoid() }) => {
  //   const { contacts } = this.state;
  //   const newContact = {
  //     id,
  //     name,
  //     number,
  //   };
  //   console.log(this.addContact);
  // };

  render() {
    return (
      <Wrap>
        <h2>Phonebook</h2>
        <FormContacts onSubmit={this.addContact} />
        <div>
          <h2>Contacts</h2>
          <h3>Find contacts by name</h3>
          <input type="text" />
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Wrap>
    );
  }
}
