import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has opened the app', () => {
      AppWrapper = mount(<App />);
    });

    when('nothing is selected', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('the event element remains collapsed', () => {
      expect(AppWrapper.find('showDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the user has selected an event', () => {
      AppWrapper = mount(<App />);
    });

    and('the list of events has been loaded', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the expand button is clicked', () => {
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });

    then('the event details will be shown', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the user has finished looking at the event details', () => {
      AppWrapper = mount(<App />);
    });

    and("event element is expanded and shows details", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
      expect(AppWrapper.find(".event .event__Details")).toHaveLength(1);
    });

    when('the collapse button is clicked', () => {
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });

    then('the event details will be hidden', () => {
      expect(AppWrapper.find('.event .event__Details')).toHaveLength(0);
    });
  });
});