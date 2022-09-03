import React, { Component } from 'react';

class NumberOfEvents extends Component {

  render() {
    const { numberOfEvents, handleInputChanged } = this.props;
    return (
      <div className='numberOfEvents'>
        <label>Number of Events:</label>
        <input
          type="text"
          id="numberOfEvents__input"
          value={numberOfEvents}
          onChange={handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;