import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../actions';

ResultInfo.propTypes = {
  count: PropTypes.number.isRequired,
  onClickRefresh: PropTypes.func.isRequired
};

function ResultInfo(props) {
  const { count, onClickRefresh } = props;
  return (
    <div className="city-result-info">
      Found {count} cities <button onClick={onClickRefresh}>↺</button>
    </div>
  );
}

function mapStateToProps(state) {
  const { filteredWeatherData } = state.currentWeatherInfo;
  return {
    count: filteredWeatherData.length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickRefresh: (event) => { event.preventDefault(); dispatch(fetchWeatherData()); }
  }
}

const ConnectedResultInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultInfo);

export default ConnectedResultInfo;
