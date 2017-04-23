import { queryCurrentWeatherInfo } from '../utils';

// Best practice:
// Each available type should be exported to avoid magic strings.
export const TOGGLE_FAV = 'TOGGLE_FAV';
export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const UPDATE_QUERY = 'UPDATE_QUERY';

// This defines an action.
// A action must have a `type` property and can have arbitrary payload.
export function toggleFav(locationName) {
  return {
    type: TOGGLE_FAV,
    locationName
  }
}

export function requestLocations() {
  return {
    type: REQUEST_LOCATIONS
  }
}

export function receiveLocations(data) {
  return {
    type: RECEIVE_LOCATIONS,
    data
  }
}

export function fetchWeatherData() {
  return function(dispatch) {
    dispatch(requestLocations());
    return queryCurrentWeatherInfo()
      .then((data) => dispatch(receiveLocations(data)));
  }
}

export function updateQuery(query) {
  return {
    type: UPDATE_QUERY,
    query
  }
}
