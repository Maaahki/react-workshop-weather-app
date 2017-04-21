import PropTypes from 'prop-types';
import React from 'react';

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

function SearchBox(props) {
  // Destruct props for simplified access
  const { onChange, value } = props;

  return (
    <input
      className="city-search"
      type="search"
      placeholder="Search a city"
      onChange={onChange}
      value={value}
    />
  );
}

export default SearchBox;
