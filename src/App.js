import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events: [],
    locations: [],
    showWelcomeScreen: undefined,
    currentLocation: 'all',
    numberOfEvents: 32,
    infoText: '',
    warningText: 'You are offline! The data has been loaded from the cache and may not be up to date.'
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    let isTokenValid;
    if (accessToken && !navigator.onLine) {
      isTokenValid = true;
    } else {
      isTokenValid = (await checkToken(accessToken)).error ? false : true;
    }
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events)
          });
        }
      });
    }
    if (!navigator.onLine) {
      console.log('offline');
      //  this.setState({
      //    warningText: 'You are offline! The data has been loaded from the cache and may not be up to date.'
      //  });
    } else {
      console.log('online');
      //  this.setState({
      //    warningText: ''
      //  });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    let data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(' ').shift();
      return { city, number };
    });
    data = data.filter(data => (data.number >= 1));
    return data;
  }

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else (
      this.setState({ numberOfEvents: eventCount })
    )
    if (location === undefined) {
      location = this.state.currentLocation;
    }
    getEvents().then((events) => {
      let locationEvents = (location === 'all')
        ? events
        : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        currentLocation: location,
      });
    });
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value > 32) {
      this.setState({
        infoText: "Select number from 1 to 32",
      });
    } else {
      this.setState({
        infoText: "",
        numberOfEvents: value
      });
    }
  };

  render() {
    const { events, locations, numberOfEvents, infoText, warningText } = this.state;

    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />

    return (
      <div className="App">
        <h2>Meet App</h2>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents handleInputChanged={this.handleInputChanged} numberOfEvents={numberOfEvents} infoText={infoText} />
        <EventList events={events.slice(0, numberOfEvents)} warningText={warningText} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
