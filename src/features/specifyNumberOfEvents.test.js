import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('If user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    given('the user did not specify a number of events being shown', () => {

    });

    when('app loaded', () => {

    });

    then('the default number of shown events is 32', () => {

    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    given('the list of elements has been loaded and the user did not specify a number of events he wants to see', () => {

    });

    when('the user specified a number', () => {

    });

    then('the maximum of events listed should be the specified number', () => {

    });
  });

});