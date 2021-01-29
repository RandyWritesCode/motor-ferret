import './App.css'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import React from 'react'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {

  return (

    <Router>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
