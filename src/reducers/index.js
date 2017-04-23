import { combineReducers } from 'redux';
import favedLocations from './favedLocations';

// This is the root-reducer of the application.
// It's a composition of other reducers. All reducers manage their own part of
// the state and must be independent of the other parts of the state.
const weatherApp = combineReducers({
  favedLocations
});

export default weatherApp;
