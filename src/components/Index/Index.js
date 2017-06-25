/**
 * Created by Yuicon on 2017/6/25.
 */
import React, { Component } from 'react';
import {Menu} from "element-react";
import './index.css';

export default class Index extends Component {

  onSelect = () => {

  }

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <header className="main-header visible">
            <div className="container">
              <a href="/" className="logo">
                <img src="//gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金" className="logo-img"/>
              </a>
              <div>
                <Menu defaultActive="1" mode="horizontal" onSelect={this.onSelect} style={{backgroundColor: '#fff'}} >
                  <Menu.Item index="1">首页</Menu.Item>
                  <Menu.SubMenu index="2" title="我的工作台">
                    <Menu.Item index="2-1">选项1</Menu.Item>
                    <Menu.Item index="2-2">选项2</Menu.Item>
                    <Menu.Item index="2-3">选项3</Menu.Item>
                  </Menu.SubMenu>
                  <Menu.Item index="3">文章</Menu.Item>
                </Menu>
              </div>
            </div>
          </header>
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
