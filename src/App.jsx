import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const fromSubmitHandler = ({ number, name }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.some(contact => name === contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    setContacts([contact, ...contacts]);
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

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Form onSubmit={fromSubmitHandler} />

      <Filter searchContact={handleFilter} value={filter} />
      <ContactList
        searchContact={handleContactSearch()}
        deleteContact={deleteContact}
      />
    </div>
  );
}
