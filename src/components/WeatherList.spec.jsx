import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render, ReactWrapper } from 'enzyme';

import WeatherTile from './WeatherTile';
import FavIcon from './FavIcon';
import ConnectedWeatherList, { WeatherList } from './WeatherList';


describe('<WeatherList/>', () => {

  let wrapper;
  let dummyData;

  beforeEach(() => {
    wrapper = null;
    dummyData = [
      {
        locationId: "City1",
        locationName: "City1",
        temperature: 19,
        minTemperature: 10,
        maxTemperature: 23,
        state: "sunny"
      },
      {
        locationId: "City2",
        locationName: "City2",
        temperature: -10,
        minTemperature: -20,
        maxTemperature: 10,
        state: "cloudy"
      }
    ];
  });

  describe('dump component', () => {

    it('should render weather tiles', () => {
      const query = '';
      const favedLocations = [];
      const onToggleFav = sinon.spy();

      const wrapper = shallow(
        <WeatherList
          data={dummyData}
          favedLocations={favedLocations}
          onToggleFav={onToggleFav}
        />
      );
      const weatherTiles = wrapper.find(WeatherTile);
      expect(weatherTiles.length).to.equal(2);
      expect(weatherTiles.at(0).prop('locationName')).to.equal('City1');
    });

    it('should render the weather tiles in the correct order', () => {
      const query = '';
      const favedLocations = [];
      const onToggleFav = sinon.spy();

      const wrapper = shallow(
        <WeatherList
          data={dummyData}
          favedLocations={favedLocations}
          onToggleFav={onToggleFav}
        />
      );
      const weatherTiles = wrapper.find(WeatherTile);
      expect(weatherTiles.at(0).prop('locationName')).to.equal('City1');
      expect(weatherTiles.at(1).prop('locationName')).to.equal('City2');
    });

    it('should pass faved to the correct tile', () => {
      const query = '';
      const favedLocations = [ 'City2' ];
      const onToggleFav = sinon.spy();

      const wrapper = mount(
        <WeatherList
          data={dummyData}
          favedLocations={favedLocations}
          onToggleFav={onToggleFav}
        />
      );
      const weatherTiles = wrapper.find(WeatherTile);
      expect(weatherTiles.at(0).find(FavIcon).at(0).prop('faved')).to.equal(false);
      expect(weatherTiles.at(1).find(FavIcon).at(0).prop('faved')).to.equal(true);
    });

    it('should call the onToggleFav method with the correct argument when an item is faved', () => {
      const query = '';
      const favedLocations = [];
      const onToggleFav = sinon.spy();

      const wrapper = mount(
        <WeatherList
          data={dummyData}
          favedLocations={favedLocations}
          onToggleFav={onToggleFav}
        />
      );
      const weatherTiles = wrapper.find(WeatherTile);

      const item0 = weatherTiles.at(0);
      const item0FavIcon = item0.find(FavIcon).at(0);
      item0FavIcon.simulate('click', { target: { value: item0.prop('locationName')}});

      expect(onToggleFav.calledOnce).to.equal(true);
      expect(onToggleFav.calledWith(item0.prop('locationName'))).to.equal(true);
    });

  });



});
