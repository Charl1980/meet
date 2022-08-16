import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventsAmount: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      eventsAmount: value,
    });
  };

  render() {
    return (
      <div className='NumberOfEvents'>
        <input
          type="number"
          className="number-input"
          value={this.state.eventsAmount}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;