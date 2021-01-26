import './App.css'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import React from 'react'
import Nav from './Nav/Nav'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

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
