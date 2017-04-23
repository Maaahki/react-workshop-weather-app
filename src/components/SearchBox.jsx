import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { updateQuery } from '../actions';

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

function mapStateToProps(state) {
  const { query } = state.currentWeatherInfo;
  return { value: query };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (event) => dispatch(updateQuery(event.target.value))
  };
}

const ConnectedSearchBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);

export default ConnectedSearchBox;
