import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  render() {
    const { numberOfEvents, handleInputChanged, infoText } = this.props;
    return (
      <div className='numberOfEvents'>
        <label>Number of Events:</label>
        <input
          type="text"
          id="numberOfEvents__input"
          value={numberOfEvents}
          onChange={handleInputChanged}
        />
        <ErrorAlert text={infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;