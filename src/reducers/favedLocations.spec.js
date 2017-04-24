import { TOGGLE_FAV } from '../actions';

import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';

import { default as reducer } from './favedLocations';

describe('[Reducer] favedLocations', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal([]);
  });

  it('should handle TOGGLE_FAV (add)', () => {
    const action = {
      type: TOGGLE_FAV,
      locationName: 'Munich'
    }
    expect(reducer([], action)).to.deep.equal(['Munich']);
  });

  it('should handle TOGGLE_FAV (remove)', () => {
    const action = {
      type: TOGGLE_FAV,
      locationName: 'Munich'
    }
    expect(reducer(['Munich'], action)).to.deep.equal([]);
  });

});
