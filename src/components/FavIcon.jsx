import PropTypes from 'prop-types';
import React from 'react';

FavIcon.propTypes = {
  faved: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

function FavIcon(props) {
  const { faved, onClick } = props;
  return (
    <button className="weather-tile__favicon" onClick={onClick}>
      { !faved && '☆' }
      { faved && '★' }
    </button>
  );

}

export default FavIcon;
