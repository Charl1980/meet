import React from 'react';
import Event from './Event';
import { WarningAlert } from './Alert';

const EventList = ({ events, warningText }) => {
  if (!events) return null;
  return (
    <div>
      {!navigator.onLine ? (<WarningAlert text={warningText} />) : ('')}
      <ul className="EventList">
        {events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;