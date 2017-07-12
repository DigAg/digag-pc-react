/**
 * Created by Yuicon on 2017/7/5.
 * https://github.com/Yuicon
 */
import React, { Component } from 'react';
import './Index.css';
import {registerAction, loginAction} from '../../redux/action/users';
import {connect} from "react-redux";
import {Tabs} from "element-react";
import Entry from "../../components/Index/Entry";

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
            {/*<div className="category-nav">*/}
              {/*<div>1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd</div>*/}
            {/*</div>*/}
            <div className="main">
              <Tabs activeName="2" onTabClick={ (tab) => console.log(tab.props.name) }>
                {
                  ['热门','最新','评论'].map((pane, index) => {
                    return(
                      <Tabs.Pane label={pane} name={index.toString()} key={pane}>
                        <Entry/>
                        <Entry/>
                        <Entry/>
                        <Entry/>
                        <Entry/>
                      </Tabs.Pane>
                    );
                  })
                }
              </Tabs>
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
