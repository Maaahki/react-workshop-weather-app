import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import  { createStore } from 'redux';

import SearchBox from './components/SearchBox';
import WeatherList from './components/WeatherList';
import { filterData, queryCurrentWeatherInfo } from './utils';
import weatherApp from './reducers';

// Create store that is used as a singleton accross the application.
const store = createStore(weatherApp);

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      query: '',
      results: [],
      rawData: []
    }

    // Bind handler to instance
    this.handleChangeSearchBox = this.handleChangeSearchBox.bind(this);
  }

  componentDidMount() {
    // It's safe to do networking after the component has been mounted,
    // so make a request to the back-end in order to query the data.
    queryCurrentWeatherInfo()
      .then((rawData) => {
        const { query } = this.state;
        this.setState({
          rawData,
          query,
          results: filterData(rawData, query)
        });
      });
  }

  handleChangeSearchBox(event) {
    const value = event.target.value;
    const { rawData } = this.state;

    const query = (typeof value !== 'string' || !value.length) ? '' : value;
    const results = filterData(rawData, value);

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

          <WeatherList data={results} />
        </main>
      </Provider>
    );
  }

}

export default App;
