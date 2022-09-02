import React, { Component } from 'react';
import moment from 'moment';

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
    const eventStart = moment(start.dateTime, 'YYYY-MM-DD HH:mm').toDate();
    const { showDetails } = this.state;
    return (
      <div className='event'>
        <div className='event__Overview'>
          <h2 className='event__Overview--name'>{summary}</h2>
          <p className='event__Overview--start'>{`${eventStart}`}</p>
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
            <p className='event__Details--description'>{description}</p>
          </div>
        )}

      </div>
    )
  }
}

export default Event;