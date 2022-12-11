import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectError, selectIsLoading } from 'redux/selector';
import FormContacts from 'components/FormContacts/FormContacts';
import { Wrap } from './App.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrap>
      <h2>Phonebook</h2>
      <FormContacts />
      <div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <p>Loading...</p>}
        <ContactList />
      </div>
    </Wrap>
  );
}
