import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import  { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import SearchBox from './components/SearchBox';
import WeatherList from './components/WeatherList';
import { filterData } from './utils';
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
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      query: '',
      results: []
    }

    // Bind handler to instance
    this.handleChangeSearchBox = this.handleChangeSearchBox.bind(this);
  }

  componentDidMount() {
    // It's safe to do networking after the component has been mounted,
    // so make a request to the back-end in order to query the data.
    store
      .dispatch(fetchWeatherData())    // dispatch action that fetches the weather data
      .then(() => {                    // temporary update state until this part is also handled by redux
        const { query } = this.state;
        this.setState({
          query,
          results: store.getState().currentWeatherInfo
        });
      });
  }

  handleChangeSearchBox(event) {
    const value = event.target.value;
    const { currentWeatherInfo } = store.getState();

    const query = (typeof value !== 'string' || !value.length) ? '' : value;
    const results = filterData(currentWeatherInfo, value);

    // Update state with new query and values
    this.setState({ query, results });
  }

  render() {
    const { query, results } = this.state;

    // Note that the Application is wrapped in a react-redux Provider.
    // This provider applies the magic that connects the application with the
    // singleton store.
    return (
      <Provider store={store}>
        <main className="weather-app">
          <SearchBox onChange={this.handleChangeSearchBox} value={query} />

          <div className="city-result-info">
            Found {results.length} cities
          </div>

          <WeatherList query={query} />
        </main>
      </Provider>
    );
  }

}

export default App;
