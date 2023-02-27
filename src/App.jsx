import { useState, useEffect } from 'react';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const fromSubmitHandler = contact => {
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    // contacts = [...contacts, contact];
    setContacts(contacts);
  };

  const handleFilter = filter => {
    setFilter(filter);
  };

  const handleContactSearch = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteContact = id => {
    setContacts(prevstate => {
      return {
        contacts: prevstate.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Form addnewcontact={fromSubmitHandler} />

      <Filter searchContact={handleFilter} value={filter} />
      <ContactList
        searchContact={handleContactSearch()}
        deleteContact={deleteContact}
      />
    </div>
  );
}
