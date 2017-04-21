import React from 'react';
import './App.css';
import WeatherList from './components/WeatherList';

// Define some constant weather data, which can be used in the application
// for demo purposes.
const weatherData = [
  {
    locationName: 'Karlsruhe',
    minTemperature: 10,
    maxTemperature: 21,
    temperature: 13,
    state: 'cloudy'
  },
  {
    locationName: 'Berlin',
    minTemperature: 18,
    maxTemperature: 25,
    temperature: 19,
    state: 'sunny'
  },
  {
    locationName: 'München',
    minTemperature: 11,
    maxTemperature: 13,
    temperature: 12,
    state: 'rainy'
  }
];


function App() {
  return <WeatherList data={weatherData} />;
}

export default App;
