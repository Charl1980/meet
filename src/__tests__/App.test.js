import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {

  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('Render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('Render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('Render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

});