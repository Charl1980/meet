Feature: Show/Hide an Event’s Details

Scenario: An event element is collapsed by default.
Given the user has opened the app
When nothing is selected
Then the event element remains collapsed

Scenario: User can expand an event to see its details.
Given the user has selected an event
And the list of events has been loaded
When the expand button is clicked
Then the event details will be shown

Scenario: User can collapse an event to hide its details.
Given the user has finished looking at the event details
And event element is expanded and shows details
When the collapse button is clicked
Then the event details will be hidden