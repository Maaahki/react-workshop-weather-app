import { combineReducers } from 'redux';
import favedLocations from './favedLocations';
import currentWeatherInfo from './currentWeatherInfo';

// This is the root-reducer of the application.
// It's a composition of other reducers. All reducers manage their own part of
// the state and must be independent of the other parts of the state.
const weatherApp = combineReducers({
  favedLocations,
  currentWeatherInfo
});

export default weatherApp;
