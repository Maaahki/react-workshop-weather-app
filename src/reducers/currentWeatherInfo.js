import { RECEIVE_LOCATIONS } from '../actions';

const initialState = [];

function updateWeatherInfo(state, data) {
  return data.slice(0);
}

function currentWeatherInfo(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LOCATIONS:
      return updateWeatherInfo(state, action.data);
    default:
      return state;
  }
}

export default currentWeatherInfo;
