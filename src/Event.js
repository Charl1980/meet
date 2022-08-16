import React, { Component } from 'react';

class Event extends Component {
  state = {
    show: true,
    hide: true
  }

  showDetailsClicked = () => {
    this.setState({
      show: this.state.show
    });
  }

  hideDetailsClicked = () => {
    this.setState({
      hide: this.state.hide
    });
  }

  render() {
    const { event } = this.props;
    return (
      <div className='event'>
        <h1 className='event-title'></h1>
        <p className='event-info'></p>
        <button className='show-event-details' onClick={() => this.showDetailsClicked()}>Show details</button>
        <p className='event-details'></p>
        <button className='hide-event-details' onClick={() => this.hideDetailsClicked()}>Hide details</button>
      </div>
    )
  }
}

export default Event;