import { useState } from 'react';
import { Wrap } from './App.styled';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { FormContacts } from '../FormContacts/FormContacts';
import { useLocaleStorage } from 'components/Hooks/useLocaleStorage';

export default function App() {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    () => useLocaleStorage('contacts') ?? defaultContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    useLocaleStorage('contacts', contacts);
  }, [contacts]);

  const addContact = ({ name, number, id }) => {
    const newContact = {
      id,
      name,
      number,
    };
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts(contacts => [newContact, ...contacts]);
  };

  const deleteContact = nanoid => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== nanoid)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrap>
      <h2>Phonebook</h2>
      <FormContacts onSubmit={addContact} />
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />

        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      </div>
    </Wrap>
  );
}

class OldApp extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number, id }) => {
    const { contacts } = this.state;
    const newContact = {
      id,
      name,
      number,
    };
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = nanoid => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== nanoid),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Wrap>
        <h2>Phonebook</h2>
        <FormContacts onSubmit={this.addContact} />
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />

          <ContactList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </Wrap>
    );
  }
}
