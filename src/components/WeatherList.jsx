import React from 'react';
import WeatherTile from './WeatherTile';

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

export default WeatherList;
