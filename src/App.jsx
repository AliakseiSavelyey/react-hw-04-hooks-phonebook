import {useState, useEffect} from 'react';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('')
  
 
  const fromSubmitHandler = contact => {
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    contacts = [...contacts, contact];
    this.setState({ contacts });
  };

  const handleFilter = filter => {
    this.setState({ filter });
  };

  const handleContactSearch = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteContact = id => {
    this.setState(prevstate => {
      return {
        contacts: prevstate.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

 
    return (
      <div>
        <Form addnewcontact={fromSubmitHandler()} />

        <Filter searchContact={handleFilter()} value={filter} />
        <ContactList
          searchContact={handleContactSearch()}
          deleteContact={deleteContact()}
        />
      </div>
    );
  
}


