import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import WeatherList from './components/WeatherList';
import { filterData, queryCurrentWeatherInfo } from './utils';

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
    return (
      <main className="weather-app">
        <SearchBox onChange={this.handleChangeSearchBox} value={query} />

        <div className="city-result-info">
          Found {results.length} cities
        </div>

        <WeatherList data={results} />
      </main>
    );
  }

}

export default App;
