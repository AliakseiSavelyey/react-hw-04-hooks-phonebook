import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ searchContact, deleteContact }) => {
  return (
    <ul>
      {searchContact.map(({ id, name, number }) => {
        return (
          <li className="ContactList-item">
            <p className="ContactList-each">
              - {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => deleteContact(id)}
              className="ContactList-button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
