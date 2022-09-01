# meet App
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique that shows events in various cities. The application uses the Google
Calendar API to fetch upcoming events.

### Feature 2: Show/hide an event's details
As a user,
I should be able to click a button
So that an events details can be shown/hidden

#### Scenario 1: An event element is collapsed by default

	Given the user has opened the app
	When nothing is selected
	Then the event element remains collapsed
  
#### Scenario 2: User can expand an event to see its details

	Given the user has selected an event
	When the expand button is clicked
	Then the event details will be shown
  
#### Scenario 3: User can collapse an event to hide its details

	Given the user has finished looking at the event details
	When the collapse button is clicked
	Then the event details will be hidden
  
### Feature 3: Specify number of events
As a user,
I should be able to specify the number of events
So that I can determine the amount of events displayed on screen

#### Scenario 1: When user hasn’t specified a number, 32 is the default number

	Given the user has opened the app
	When the number of events is not specified
	Then the default number of events will be displayed
  
#### Scenario 2: User can change the number of events they want to see

	Given the list of elements has been loaded and the user did not specify a number of events he wants to see
  When the user specified a number
  Then the maximum of events listed should be the specified number
  
### Feature 4: Use the app when offline
As a user,
I should be able to use the app offline
So that if there is limited internet access, access to the app is not disrupted

#### Scenario 1: Show cached data when there’s no internet connection

	Given the user has limited internet access
	When the app is accessed
	Then the cached data is still available
  
#### Scenario 2: Show error when user changes the settings (city, time range)

	Given the user has limited internet access
	When the settings are changed
	Then an error will display
  
### Feature 5: Data visualization
As a user,
I should be able to see data
So that it is easier to see what events are taking place in a selected city

#### Scenario 1: Show a chart with the number of upcoming events in each city

	Given the user has selected a city
	When the events are displayed
	Then a chart with the number of events in the selected city will display
  
### Technical Requirements:
- The app must be a React application.

- The app must be built using the TDD technique.

- The app must use the Google Calendar API and OAuth2 authentication flow.
