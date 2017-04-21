import React from 'react';

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
