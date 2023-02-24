import { useState } from 'react';
import shortid from 'shortid';
import './Form.scss';

export default function Form({ addnewcontact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addnewcontact();
    reset();
  };

  const reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="ContactForm">
      <h1 className="ContactForm-title">Phonebook</h1>
      <label htmlFor={nameInputId} className="ContactForm-label">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          id={nameInputId}
        />
      </label>

      <label htmlFor={numberInputId} className="ContactForm-label">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          id={numberInputId}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}
