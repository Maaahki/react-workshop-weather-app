import React from 'react';
import FavIcon from './FavIcon';

class WeatherTile extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = { faved: false };

    // Bind handler to current instance
    this.handleClickFavIcon = this.handleClickFavIcon.bind(this);
  }

  handleClickFavIcon(event) {
    // Prevent any default actions on this event.
    // Only the state should be updated.
    event.preventDefault();

    // Best practice: When new state depends on old state, a function should
    // be used.
    // The next line often works, but not under all circumstances ...
    // this.setState({ faved: !this.state.faved });
    // ... while it's guaranteed to work if a callback function is used.
    this.setState((prevState) => ({ faved: !prevState.faved }));
  }

  render() {
    // Destruct state variables for easier access
    const { faved } = this.state;
    // Destruct props variables for easier access
    const {
      locationName,
      minTemperature,
      maxTemperature,
      temperature,
      state
    } = this.props;

    return (
      <li className={`weather-tile weather-tile--${state}`}>
        <h1 className="weather-tile__city">{locationName}</h1>
        <div className="weather-tile__temperature">
          <span className="temperature__min">{minTemperature}°</span>
          <span className="temperature__max">{maxTemperature}°</span>
          <span className="temperature__current">{temperature}°</span>
        </div>
        <FavIcon
          faved={faved}
          onClick={this.handleClickFavIcon}
        />
      </li>
    );
  }
}

export default WeatherTile;
