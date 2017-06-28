/**
 * Created by Yuicon on 2017/6/25.
 */
import React, { Component } from 'react';
import './index.css';
import Header from "./Header";
import {testAction, registerAction} from '../../redux/action/users';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Index extends Component {

  componentDidMount() {
    console.log(this.props.users)
  }

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              <button onClick={() => this.props.testActions(
                {
                  "email": "string3",
                  "lastPasswordResetDate": "2017-06-28T15:22:05.205Z",
                  "password": "string",
                  "username": "string3"
                }
              )}>哈哈啊</button>
              {this.props.users.get('visible') &&
                <div>1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd</div>
              }
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

function mapDispatchToProps(dispatch) {
  return {
    testActions: bindActionCreators(testAction, dispatch),
    registerActions: bindActionCreators(registerAction, dispatch)
  };
}

export default connect((state) => {
  return { users: state.users }
}, mapDispatchToProps)(Index);
