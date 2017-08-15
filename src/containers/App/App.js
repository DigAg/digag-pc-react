/**
 * Created by Yuicon on 2017/6/25.
 */
import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Index from "../Index/Index";
import Header from "../Header/Header";
import SubmitEntry from "../SubmitEntry/SubmitEntry";
import User from "../User/User";

export default class App extends Component {

  render(){
    return(
    <Router>
      <div className="App">
        <Route component={Header}/>
        <Route exact path="/" component={Index}/>
        <Route exact path="/submit-entry" component={SubmitEntry}/>
        <Route exact path="/user" component={User}/>
      </div>
    </Router>
    )
  }

}

