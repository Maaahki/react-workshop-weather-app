import React from 'react';
import './App.css';
import WeatherTile from './components/WeatherTile';

function App() {
  return <WeatherTile locationName="Karlsruhe" temperature={25} minTemperature={15} maxTemperature={30} />;
}

export default App;
