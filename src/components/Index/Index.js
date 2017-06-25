/**
 * Created by Yuicon on 2017/6/25.
 */
import React, { Component } from 'react';
import './index.css';
import Header from "./Header";

export default class Index extends Component {

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
            <div className="main">
              21adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
            <div className="sidebar">
              31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
          </div>
        </div>
      </div>
    )
  }
}
