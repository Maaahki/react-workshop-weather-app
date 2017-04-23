import { RECEIVE_LOCATIONS, UPDATE_QUERY } from '../actions';
import { filterData } from '../utils';

const initialState = {
  query: '',
  weatherData: [],
  filteredWeatherData: []
};

function updateWeatherInfo(state, data) {
  const newState = {
    weatherData: data,
    filteredWeatherData: filterData(data, state.query)
  };
  return Object.assign({}, state, newState);
}

function updateQuery(state, query) {
  const newState = {
    query,
    filteredWeatherData: filterData(state.weatherData, query)
  };
  return Object.assign({}, state, newState);
}

function currentWeatherInfo(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LOCATIONS:
      return updateWeatherInfo(state, action.data);
    case UPDATE_QUERY:
      return updateQuery(state, action.query);
    default:
      return state;
  }
}

export default currentWeatherInfo;
