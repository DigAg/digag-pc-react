/**
 * Created by Yuicon on 2017/7/5.
 * https://github.com/Yuicon
 */
import React, { Component } from 'react';
import './Index.css';
import {registerAction, loginAction} from '../../redux/action/users';
import {connect} from "react-redux";

@connect(
  (state) => {
    console.log(state);
    return ({
      users: state.users,
      auth: state.auth,
    });
  },
  {registerActions: registerAction, loginActions: loginAction}
)
export default class Index extends Component {

  render(){
    return(
      <div className="App">
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              <div>1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd</div>
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
