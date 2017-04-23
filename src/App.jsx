import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import  { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import SearchBox from './components/SearchBox';
import WeatherList from './components/WeatherList';
import ResultInfo from './components/ResultInfo';
import weatherApp from './reducers';
import { fetchWeatherData } from './actions';

// Create store that is used as a singleton accross the application.
// Apply middleware to add further capabilities to the redux store.
const store = createStore(
  weatherApp,
  applyMiddleware(
    thunk,
    logger
  )
);

class App extends React.Component {

  componentDidMount() {
    // It's safe to do networking after the component has been mounted,
    // so make a request to the back-end in order to query the data.
    store
      .dispatch(fetchWeatherData())    // dispatch action that fetches the weather data
  }

  render() {
    // Note that the Application is wrapped in a react-redux Provider.
    // This provider applies the magic that connects the application with the
    // singleton store.
    return (
      <Provider store={store}>
        <main className="weather-app">
          <SearchBox />
          <ResultInfo />
          <WeatherList />
        </main>
      </Provider>
    );
  }

}

export default App;
