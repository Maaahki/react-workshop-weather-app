import PropTypes from 'prop-types';
import React from 'react';
import FavIcon from './FavIcon';

export const weatherTilePropTypes = {
  locationName: PropTypes.string.isRequired,
  minTemperature: PropTypes.number.isRequired,
  maxTemperature: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string,
  faved: PropTypes.bool.isRequired,
  onClickFavIcon: PropTypes.func.isRequired
};

const defaultProps = {
  state: 'missing'
};

function WeatherTile(props) {
  // Destruct props variables for easier access
  const {
    locationName,
    minTemperature,
    maxTemperature,
    temperature,
    state,
    faved,
    onClickFavIcon
  } = props;

  return (
    <li className={`weather-tile weather-tile--${state}`}>
      <h1 className="weather-tile__city">{locationName}</h1>
      <div className="weather-tile__temperature">
        <span className="temperature__min">{minTemperature}°</span>
        <span className="temperature__max">{maxTemperature}°</span>
        <span className="temperature__current">{temperature}°</span>
      </div>
      <FavIcon
        faved={faved}
        onClick={onClickFavIcon}
      />
    </li>
  );
}

WeatherTile.propTypes = weatherTilePropTypes;
WeatherTile.defaultProps = defaultProps;

export default WeatherTile;
