import { TOGGLE_FAV } from '../actions';

// Important: Always define an initial state.
const initialState = [];

function toggleFavedLocation(favedLocations, locationName) {
  const favedLocationsCopy = favedLocations.slice(0);         // create shallow copy to operate on
  const index = favedLocationsCopy.indexOf(locationName);     // is location already faved?
  if (index > -1) {                                           // location is faved, so ...
    favedLocationsCopy.splice(index, 1);                      // ... remove it from the array
    return favedLocationsCopy;
  } else {                                                    // location is not yet faved, so ...
    favedLocationsCopy.push(locationName);                    // ... add it to the array
    return favedLocationsCopy;
  }
}

/**
 * Reducer that manages which locations are currently faved by the user.
 */
function favedLocations(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAV:
      return toggleFavedLocation(state, action.locationName); //
    default:  // Best practice: Always return a valid state!
      return state;
  }
}

export default favedLocations;
