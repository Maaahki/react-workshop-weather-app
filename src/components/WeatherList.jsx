import PropTypes from 'prop-types';
import React from 'react';
import WeatherTile, { weatherTilePropTypes } from './WeatherTile';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(weatherTilePropTypes)
  ).isRequired
};

class WeatherList extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <ul className="weather-list">
        { data.map((item) => (
            <WeatherTile
              key={item.locationName}
              locationName={item.locationName}
              minTemperature={item.minTemperature}
              maxTemperature={item.maxTemperature}
              temperature={item.temperature}
              state={item.state}
            />
          )) }
      </ul>
    );
  }

}

WeatherList.propTypes = propTypes;

export default WeatherList;
