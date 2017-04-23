import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WeatherTile from './WeatherTile';
import { toggleFav } from '../actions';
import { filterData } from '../utils';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      locationName: PropTypes.string.isRequired,
      minTemperature: PropTypes.number.isRequired,
      maxTemperature: PropTypes.number.isRequired,
      temperature: PropTypes.number.isRequired,
      state: PropTypes.string
    })
  ).isRequired,
  query: PropTypes.string,
  favedLocations: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleFav: PropTypes.func.isRequired
};

class WeatherList extends React.Component {

  constructor(props) {
    super(props);

    this.handleToggleFav = this.handleToggleFav.bind(this);
  }

  handleToggleFav(event, locationName) {
    event.preventDefault();

    const { onToggleFav } = this.props;
    onToggleFav(locationName);
  }

  render() {
    const { data, favedLocations, query } = this.props;

    // Temporary solution to filter data, because filtered data is not yet
    // available via the store.
    const filteredData = filterData(data, query);

    return (
      <ul className="weather-list">
        { filteredData.map((item) => (
            <WeatherTile
              key={item.locationName}
              locationName={item.locationName}
              minTemperature={item.minTemperature}
              maxTemperature={item.maxTemperature}
              temperature={item.temperature}
              state={item.state}
              faved={favedLocations.indexOf(item.locationName) > -1}
              onClickFavIcon={(event) => this.handleToggleFav(event, item.locationName)}
            />
          )) }
      </ul>
    );
  }

}

WeatherList.propTypes = propTypes;

function mapStateToProps(state) {
  const { favedLocations, currentWeatherInfo } = state;
  return {
    favedLocations,
    data: currentWeatherInfo.filteredWeatherData,
    query: currentWeatherInfo.query
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleFav: (locationName) => {
      dispatch(toggleFav(locationName));
    }
  };
}

const ConnectedWeatherList = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherList);

export default ConnectedWeatherList;
