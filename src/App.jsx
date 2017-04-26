import React from 'react';
import { connect } from 'react-redux';

import SearchBox from './components/SearchBox';
import WeatherList from './components/WeatherList';
import ResultInfo from './components/ResultInfo';
import { fetchWeatherData } from './actions';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    // It's safe to do networking after the component has been mounted,
    // so make a request to the back-end in order to query the data.
    this.props.onFetchWeatherData();
  }

  render() {
    // Note that the Application is wrapped in a react-redux Provider.
    // This provider applies the magic that connects the application with the
    // singleton store.
    return (
      <main className="weather-app">
        <SearchBox />
        <ResultInfo />
        <WeatherList />
      </main>
    );
  }

}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchWeatherData: () => dispatch(fetchWeatherData())
  };
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
