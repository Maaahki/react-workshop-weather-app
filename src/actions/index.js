// Best practice:
// Each available type should be exported to avoid magic strings.
export const TOGGLE_FAV = 'TOGGLE_FAV';

// This defines an action.
// A action must have a `type` property and can have arbitrary payload.
export function toggleFav(locationName) {
  return {
    type: TOGGLE_FAV,
    locationName
  }
}
