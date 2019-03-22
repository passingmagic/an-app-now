import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import How from './pages/How'
import Contact from './pages/Contact'
import MyNavbar from './components/MyNavbar'
import Footer from './components/Footer'
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MyNavbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/how' component={How} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
