/**
 * Created by Yuicon on 2017/6/25.
 */
import React, { Component } from 'react';
import './App.css';
import {registerAction, loginAction} from '../../redux/action/users';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Header from "../../components/Index/Header";

class App extends Component {

  componentDidMount() {
    console.log(this.props.users)
  }

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <Header registerActions={this.props.registerActions} loginActions={this.props.loginActions}
                  auth={this.props.auth}/>
        </div>
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

export default connect(
  (state) => {
    console.log('state', state);
    return {
      users: state.users,
      auth: state.auth
    }
},
  (dispatch) => {
  return {
    registerActions: bindActionCreators(registerAction, dispatch),
    loginActions: bindActionCreators(loginAction, dispatch),
  }
})(App);
