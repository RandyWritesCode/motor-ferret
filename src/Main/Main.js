import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import EventForm from '../EventForm/EventForm'
import Feed from '../Feed/Feed'
import Login from '../Login/Login'
import Users from '../Users/Users'
import SearchEvents from '../SearchEvents/SearchEvents'
import config from '../config'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      events: [],
      event_type: 'all'

    }
  }

  componentDidMount() {
    let userUrl = `${config.API_ENDPOINT}/users`;
    let getAllUsers = {
      method: 'GET'
      // headers: (add authorization)
    }
    fetch(userUrl, getAllUsers)
      .then(res => {
        if (!res.ok) {
          return res.json.then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(users => {
        console.log(users)
        this.setState({
          users: users
        })
      })
      .catch(error => this.setState({ error }))



    let eventUrl = `${config.API_ENDPOINT}/events`;
    let getAllEvents = {
      method: 'GET'
    }
    fetch(eventUrl, getAllEvents)
      .then(res => {
        if (!res.ok) {
          return res.json.then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(events => {
        this.setState({
          events: events
        })
      })
      .catch(error => this.setState({ error }))

  }

  handleEventSearch = (event) => {
    event.preventDefault()
    let searchTerm = event.target.search_term.value
    searchTerm = searchTerm.toLowerCase()
    // let eventType = event.target.event_type.value
    let searchEventsUrl = `${config.API_ENDPOINT}/events`
    let getAllEvents = { method: 'GET' }
    fetch(searchEventsUrl, getAllEvents)
      .then(res => {
        if (!res.ok) {
          return res.json.then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(events => {
        events = events.filter(event => {
          let eventTitle = event.title.toLowerCase()
          console.log(eventTitle, eventTitle.includes(searchTerm))
          return eventTitle.includes(searchTerm)
        })
        this.setState({
          store: {
            events: events
          }
        })
      })
      .catch(error => this.setState({ error }))
  }


  render() {
    return (
      <Switch>
        <Route exact
          path="/">
          <LandingPage
          />
        </Route>
        <Route
          path="/event-form">

          <EventForm
          />
        </Route>
        <Route
          path="/feed">
          <Feed
            events={this.state.events}
          />
        </Route>
        <Route
          path="/login">
          <Login />
        </Route>
        <Route
          path="/users">
          <Users
            users={this.state.users}
          />
        </Route>
        <Route
          path="/events-search">
          <SearchEvents
            events={this.state.events}
            handleEventSearch={this.handleEventSearch}
          />
        </Route>
      </Switch >
    )
  }
}
export default Main