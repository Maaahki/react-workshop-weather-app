import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from './index';

describe('Actions', () => {

  describe('toggleFav', () => {

    // Test a simple action creator (synchroneous).
    it('should create an action to toggle a favourite location', () => {
      const locationName = 'MyLocation';
      const expectedAction = {
        type: actions.TOGGLE_FAV,
        locationName
      };
      expect(actions.toggleFav(locationName)).to.deep.equal(expectedAction);
    });

  });

  describe('fetchWeatherData', () => {

    const middlewares = [ thunk ]
    const mockStore = configureMockStore(middlewares);

    afterEach(() => {
      nock.cleanAll()
    });

    // Test a more complicated async action creator.
    it('creates RECEIVE_LOCATIONS when fetching locations has been done', () => {
      const payload = [ { locationId: 'Karlsruhe' } ];
      nock('http://localhost:1337/')
        .get('/current')
        .reply(200, payload);

      const expectedActions = [
        { type: actions.REQUEST_LOCATIONS },
        { type: actions.RECEIVE_LOCATIONS , data: payload }
      ];
      const store = mockStore({ todos: [] });

      return store.dispatch(actions.fetchWeatherData())
        .then(() => { // return of async actions
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });

  });

});
