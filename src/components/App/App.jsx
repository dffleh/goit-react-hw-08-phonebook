import React from 'react';

import FormContacts from 'components/FormContacts/FormContacts';
import { Wrap } from './App.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export function App() {
  return (
    <Wrap>
      <h2>Phonebook</h2>
      <FormContacts />
      <div>
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    </Wrap>
  );
}
