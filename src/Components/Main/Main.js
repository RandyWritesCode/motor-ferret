import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import EventForm from '../Forms/EventForm'
import Feed from '../Feed/Feed'
import Login from '../Login/Login'
import Users from '../Users/Users'
import SearchEvents from '../SearchEvents/SearchEvents'
import config from '../../config'
import SignUp from '../SignUp/SignUp'
import AuthApiService from '../../Services/auth-api-service'
import TokenService from '../../Services/token-services'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      events: [],
      event_type: 'rallying',
      display: [],
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

  //consider refactoring later so that one event search handles location search and keyword search
  handleEventSearch = (event
    // , formType
  ) => {
    event.preventDefault()
    let searchTerm = event.target.search_term.value
    searchTerm = searchTerm.toLowerCase()
    // let eventType = event.target.event_type.value
    // let location = event.target.location.value

    let searchEventsUrl = `${config.API_ENDPOINT}/events`
    let getAllEvents = { method: 'GET' }
    fetch(searchEventsUrl, getAllEvents)
      .then(res => {
        if (!res.ok) {
          return res.json.then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(display => {
        display = display.filter(event => {
          let eventSearchResults = event.title.toLowerCase()
          console.log('search results: ', eventSearchResults.includes(searchTerm))
          return eventSearchResults.includes(searchTerm)
        })
        this.setState({
          display: display
        })
      })
      .catch(error => this.setState({ error }))
  }

  handleEventSearchByLocation = (event) => {
    event.preventDefault()
    let searchLocation = event.target.state.value
    // let eventType = event.target.event_type.value
    // let location = event.target.location.value

    let searchEventsUrl = `${config.API_ENDPOINT}/events`
    let getAllEvents = { method: 'GET' }
    fetch(searchEventsUrl, getAllEvents)
      .then(res => {
        if (!res.ok) {
          return res.json.then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(display => {
        display = display.filter(event => {
          console.log(event.state)
          let eventSearchResults = event.state
          return eventSearchResults.includes(searchLocation)
        })
        this.setState({
          display: display
        })
      })
      .catch(error => this.setState({ error }))
  }

  handleAddEvent = (event) => {
    console.log(event)
    event.preventDefault()

    const title = event.target.title.value
    const date1 = event.target.date1.value
    const date2 = event.target.date2.value
    const organizer = event.target.organizer.value
    const website = event.target.website.value
    const event_type = event.target.event_type.value
    const event_description = event.target.event_description.value
    const photo = event.target.photo.value
    const address = event.target.address.value
    const address2 = event.target.address2.value
    const city = event.target.city.value
    const state = event.target.all_states.value
    const zip = event.target.zip.value

    let eventsUrl = `${config.API_ENDPOINT}/events`
    let postNewEvent = {
      method: 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        date1,
        date2,
        organizer,
        website,
        event_type,
        event_description,
        photo,
        address,
        address2,
        city,
        state,
        zip
      })
    }

    fetch(eventsUrl, postNewEvent)
      .then(res => {
        console.log(res.ok)
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        console.log(data)
        // addEventByContext(data)
        this.props.history.push('/feed')
        // this.setState({
        //   events: events
        // })
      })

      .catch(error => this.setState({ error }))
  }

  handleRegistrationSuccess = user => {

    const { history } = this.props
    history.push('/login')
  }
  //pick up here.  need to connect back end and crete auth api service.  
  //consider referencing jwt auth
  handleSignUpSubmit = event => {
    event.preventDefault()
    console.log(event.target.admin.value)
    const { fullname, username, password, admin } = event.target
    console.log(fullname.value, username.value, password.value)
    this.setState({ error: null })
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      fullname: fullname.value,
      admin: admin.value
    })
      .then(user => {
        fullname.value = ''
        username.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  handleLogin = event => {
    event.preventDefault()
    this.setState({ error: null })
    const { username, password } = event.target
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        console.log(res)
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        TokenService.saveUserId(res.userId)
        TokenService.saveUserAuth(res.admin)
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    // this.props.history.push('/events')
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
            handleAddEvent={this.handleAddEvent}
          />
        </Route>
        <Route
          path="/events">
          <Feed
            events={this.state.events}
          />
        </Route>
        <Route
          path="/login">
          <Login
            handleLogin={this.handleLogin} />
        </Route>
        <Route
          path="/users">
          <Users
            users={this.state.users}
          />
        </Route>
        <Route
          path="/sign-up">
          <SignUp
            handleSignUpSubmit={this.handleSignUpSubmit}
          />
        </Route>
        <Route
          path="/events-search">
          <SearchEvents
            display={this.state.display}
            events={this.state.events}
            handleEventSearch={this.handleEventSearch}
            handleEventSearchByLocation={this.handleEventSearchByLocation}
          />
        </Route>
      </Switch >
    )
  }
}

// console.log(event.target.title.value)
// console.log(event.target.date1.value)
// console.log(event.target.date2.value)
// console.log(event.target.organizer.value)
// console.log(event.target.website.value)
// console.log(event.target.event_type.value)
// console.log(event.target.event_description.value)
// console.log(event.target.photo.value)
// console.log(event.target.address.value)
// console.log(event.target.address2.value)
// console.log(event.target.city.value)
// console.log(event.target.all_states.value)
// console.log(event.target.zip.value)


// title: '',
// date1: '',
// date2: '',
// organizer: '',
// website: '',
// event_description: '',
// photo: '',
// address: '',
// address2: '',
// city: '',
// state: '',
// zip: ''

// this.setState({
//   title,
//   date1,
//   date2,
//   organizer,
//   website,
//   event_type,
//   event_description,
//   photo,
//   address,
//   address2,
//   city,
//   state,
//   zip
// })
export default Main