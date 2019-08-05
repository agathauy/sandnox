//const Spinner = require('react-spinkit')

import React, { Component } from 'react';

import * as Spinner from 'react-spinkit'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import FrontPage from './FrontPage/FrontPage';
import ReactTerminal from './ReactTerminal/ReactTerminal';




class App extends Component {


  render() {

    return (
      <div className="App primary-layout">
        <Router>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/terminal/:subpath" render={() => ( <ReactTerminal  />)} />
            <Route render={() => (<ReactTerminal />)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
