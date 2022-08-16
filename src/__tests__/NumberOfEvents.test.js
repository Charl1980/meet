import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
  });

  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({ eventsAmount: '20' });
    const eventObject = { target: { value: '5' } };
    NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventsAmount')).toBe('5');
  });

})