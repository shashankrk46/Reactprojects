import React from 'react';
import Header from "./header/Header"
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home';
import ShopPage from './pages/shoppage/ShopPage'


 function App () {
  
    return (
      
      
      <div >
        <Header/>
        
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shop' component={ShopPage}/>
           </Switch>
        
      </div>
     
    )
  }


export default App





