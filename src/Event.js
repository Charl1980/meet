import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  }

  render() {
    const {
      summary,
      location,
      start,
      description
    } = this.props.event;
    const { showDetails } = this.state;
    return (
      <div className='event'>
        <div className='event__Overview'>
          <h2 className='event__Overview--name'>{summary}</h2>
          <p className='event__Overview--start'>{start.dateTime.slice(0, 10)}</p>
          {location && (
            <p className='event__Overview--venue'>
              @{summary} | {location}
            </p>
          )}

          {showDetails && (
            <button className='details-btn' onClick={() => this.setState({ showDetails: !showDetails })} >
              Hide details
            </button>
          )}

          {!showDetails && (
            <button className='details-btn' onClick={() => this.setState({ showDetails: !showDetails })} >
              Show details
            </button>
          )}
        </div>

        {showDetails && (
          <div className='event__Details'>
            <h3>About event:</h3>
            <p className='event__Details--description' />
          </div>
        )}

      </div>
    )
  }
}

export default Event;