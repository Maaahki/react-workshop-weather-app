import PropTypes from 'prop-types';
import React from 'react';

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

function HelloWorld(props) {
  return <h1>Hello {props.name}</h1>;
}

export default HelloWorld;
