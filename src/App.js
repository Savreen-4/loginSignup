import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Forgetpass from './Forgetpass';
import Record from './Record';
import Login from './Login';
import Signup from './Signup';
import Resetpass from './Resetpass';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
          </div> */}
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path ="/Signup" component ={Signup}/>
              <Route exact path ="/Record" component ={Record}/>
              <Route exact path ="/Forgetpass" component ={Forgetpass}/>
              <Route exact path ="/Resetpass" component ={Resetpass}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
