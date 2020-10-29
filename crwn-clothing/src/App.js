import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopepage/ShopPage';

function App() {
  return (
    // <div className="App">
    //   <HomePage />
    // </div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route />
    </Switch>
  );
}

export default App;
