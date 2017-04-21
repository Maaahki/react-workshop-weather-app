import React from 'react';

class FavIcon extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = { faved: false };

    // Bind handler to current instance
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
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

    return (
      <button className="weather-tile__favicon" onClick={this.handleClick}>
        { !faved && '☆' }
        { faved && '★' }
      </button>
    );
  }

}

export default FavIcon;
