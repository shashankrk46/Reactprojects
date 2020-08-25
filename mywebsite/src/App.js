import React, { Component } from 'react';
import Header from "./header/Header"
import "./App.css";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Home from './pages/home/Home'

 class App extends Component {
  render() {
    return (
      <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path='/' Component={Home}>
            <Home/>
          
          </Route>
          <Route path='/login'>
          <h1>Login</h1>
          </Route>
          <Route path='/cart'>
          <h1>Cart</h1>
          </Route>
          </Switch>
        
      </div>
      </Router>
    )
  }
}

export default App





