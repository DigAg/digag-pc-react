/**
 * Created by Yuicon on 2017/6/25.
 */
import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Index from "../Index/Index";
import Header from "../Header/Header";

const s = () => <div>sadasd</div>;

export default class App extends Component {

  render(){
    return(
    <Router>
      <div className="App">
        <Route component={Header}/>
        <Route exact path="/" component={Index}/>
        <Route path="/s" component={s}/>
        {/*<Route path="/page2" component={Page2}/>*/}
      </div>
    </Router>

    )
  }

}
