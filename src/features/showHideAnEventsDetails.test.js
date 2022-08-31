import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the user has opened the app', () => {

    });

    when('nothing is selected', () => {

    });

    then('the event element remains collapsed', () => {

    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('the user has selected an event', () => {

    });

    when('the expand button is clicked', () => {

    });

    then('the event details will be shown', () => {

    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    given('the user has finished looking at the event details', () => {

    });

    when('the collapse button is clicked', () => {

    });

    then('the event details will be hidden', () => {

    });
  });
});