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

function Main() {
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
        />
      </Route>
      <Route
        path="/login">
        <Login />
      </Route>
      <Route
        path="/users">
        <Users />
      </Route>
    </Switch >
  )
}

export default Main