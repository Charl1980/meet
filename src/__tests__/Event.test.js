import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test('render event item title', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });

  test('render collapsed event item', () => {
    expect(EventWrapper.find('.event-info')).toHaveLength(1);
  });

  test('render show event details button', () => {
    expect(EventWrapper.find('.show-event-details')).toHaveLength(1);
  });

  test('render event item details', () => {
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
  });

  test('render hide event details button', () => {
    expect(EventWrapper.find('.hide-event-details')).toHaveLength(1);
  });

  test('render click to show event details', () => {
    EventWrapper.setState({
      show: true
    });
    EventWrapper.find('.show-event-details').simulate('click');
    expect(EventWrapper.state('show')).toBe(true);
  });

  test('render click to hide event details', () => {
    EventWrapper.setState({
      hide: true
    });
    EventWrapper.find('.hide-event-details').simulate('click');
    expect(EventWrapper.state('hide')).toBe(true);
  });
})