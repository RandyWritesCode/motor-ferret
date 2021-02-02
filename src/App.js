import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// import {
//   createBrowserHistory as history
// } from 'history'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import LandingPage from '../src/Components/LandingPage/LandingPage'
import EventForm from '../src/Components/Forms/EventForm'
import Feed from '../src/Components/Feed/Feed'
import Login from '../src/Components/Login/Login'
import Users from '../src/Components/Users/Users'
import SearchEvents from '../src/Components/SearchEvents/SearchEvents'
import SignUp from '../src/Components/SignUp/SignUp'
import PublicOnlyRoute from '../src/Components/Utils/PublicOnlyRoute'
import config from './config'
import TokenService from './Services/token-services'
import AuthApiService from './Services/auth-api-service'
import PrivateRoute from '../src/Components/Utils/PrivateRoute'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      events: [],
      event_type: 'rallying',
      display: [],
      admin: "No",
      error: null

    }
  }

  componentDidMount() {
    let userUrl = `${config.API_ENDPOINT}/users`;
    let getAllUsers = {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
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
          users: users,
          admin: TokenService.getUserAuth()
        })
      })
      .catch(error => this.setState({ error }))

    let eventUrl = `${config.API_ENDPOINT}/events`;
    let getAllEvents = {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
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
    let getAllEvents = {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    }
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
    let getAllEvents = {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    }
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
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
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

  handleSignUpSubmit = event => {
    event.preventDefault()
    const { fullname, username, password, admin } = event.target
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

  // handleLoginSuccess = () => {
  //   const { location, history } = this.props
  //   const destination = (location.state || {}).from || '/'
  //   history.push(destination)
  // }

  handleLogin = event => {
    event.preventDefault()
    this.setState({ error: null })
    const { username, password } = event.target
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        TokenService.saveUserId(res.userId)
        TokenService.saveUserAuth(res.admin)
        this.setState({
          admin: TokenService.getUserAuth()
        })
        this.props.history.push('/events')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  handleBlockUser = (user) => {
    console.log(user.id)
    let newBlockStatus = { blocked: user.blocked === "No" ? "Yes" : "No" }
    console.log('newBlockStatus: ', newBlockStatus)
    let usersUrl = `${config.API_ENDPOINT}/users/admin/${user.id}`
    let updateUser = {
      method: 'PATCH',
      'headers': {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }, body: JSON.stringify(newBlockStatus)
    }
    fetch(usersUrl, updateUser)
      .then(res => {
        console.log(res)
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        console.log('data', data)
      }
      )
      .catch(res => {
        this.setState({ error: res.error })
      })
  }


  render() {
    return (
      <Router>
        <Nav
          admin={this.state.admin} />
        <Header />
        <Switch>
          <Route exact
            path="/">
            <LandingPage
            />
          </Route>
          <PrivateRoute
            path="/event-form"
            render={() =>
              <EventForm
                handleAddEvent={this.handleAddEvent}
              />
            }
          />
          <PrivateRoute
            path={"/events"}
            render={() =>
              <Feed
                events={this.state.events}
              />
            }
          />
          <Route
            path="/login"
            render={({ history }) => {
              console.log(history)
              return <Login
                handleLogin={this.handleLogin}
                history={history} />
            }}
          />
          <Route
            path="/users">
            <Users
              users={this.state.users}
              handleBlockUser={this.handleBlockUser}
            />
          </Route>
          <PublicOnlyRoute
            path="/sign-up"
            component={SignUp}
            handleSignUpSubmit={this.handleSignUpSubmit}
          />
          <PrivateRoute
            path={"/events-search"}
            render={() => (
              < SearchEvents
                display={this.state.display}
                events={this.state.events}
                handleEventSearch={this.handleEventSearch}
                handleEventSearchByLocation={this.handleEventSearchByLocation}
              />
            )}
          />
        </Switch >
        <Footer />
      </Router >
    );

  }
}

export default App;
