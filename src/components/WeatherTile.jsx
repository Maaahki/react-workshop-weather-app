import React from 'react';

function WeatherTile(props) {
  return (
    <div className="weather-tile weather-tile--rainy">
      <h1 className="weather-tile__city">{props.locationName}</h1>
      <div className="weather-tile__temperature">
        <span className="temperature__min">{props.minTemperature}°</span>
        <span className="temperature__max">{props.maxTemperature}°</span>
        <span className="temperature__current">{props.temperature}°</span>
      </div>
    </div>
  );
}

export default WeatherTile;
