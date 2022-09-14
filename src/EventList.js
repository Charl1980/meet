import React from 'react';
import Event from './Event';
import { WarningAlert } from './Alert';

const EventList = ({ events, warningText }) => {
  if (!events) return null;
  return (
    <ul className="EventList">
      {!navigator.onLine ? (<WarningAlert text={warningText} />) : ('')}
      {events.map((event) => (
        <li key={event.id}>
          <Event event={event} />
        </li>
      ))}
    </ul>
  );
}

export default EventList;