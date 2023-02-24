import React from 'react';
import './Filter.scss';
import PropTypes from 'prop-types';

const Filter = ({ filter, searchContact }) => {
  return (
    <label className="FilterLabel">
      Find contacts by name
      <input
        onChange={event => searchContact(event.target.value)}
        value={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  searchContact: PropTypes.func.isRequired,
};

export default Filter;
