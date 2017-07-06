/**
 * Created by Yuicon on 2017/6/25.
 */
import React, {Component} from 'react';
import {Button, Input, Menu} from "element-react";
import RegisterDialog from '../../components/Header/RegisterDialog';
import LoginDialog from '../../components/Header/LoginDialog';
import {connect} from "react-redux";
import {registerAction, loginAction} from '../../redux/action/users';
import './Header.css';
import portrait from '../../assets/images/portrait.jpg';

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
export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      registerDialog: false,
      loginDialog: false,
    };
  }

  handleSelect = (index) => {
    console.log(index);
  };

  handleIconClick = () => {
    console.log('handleIconClick', this.state.searchInput);
  };

  handleRegisterDialogClose = () => {
    return () => {
      this.setState({registerDialog: false});
    }
  };

  handleLoginDialogClose = () => {
    return () => {
      this.setState({loginDialog: false});
    }
  };

  renderMenu () {
    if (localStorage.getItem('token')) {
      return (
        <div style={{ display: 'flex' }}>
          <Menu.Item index="7">
            <i className="el-icon-plus"/>
          </Menu.Item>
          <Menu.Item index="8">
            <i className="el-icon-message"/>
          </Menu.Item>
          <Menu.Item index="9">
            <img src={portrait} alt="头像" className="portrait"/>
          </Menu.Item>
        </div>
      )
    } else {
      return (
        <div style={{ display: 'flex' }}>
          <Menu.Item index="7">
            <Button type="text" icon="edit" className="contribute"
                    onClick={() => this.setState({loginDialog: true})}>
              投稿
            </Button>
          </Menu.Item>
          <Menu.Item index="8">
            <Button type="text" className="login-btn"
                    onClick={ () => this.setState({loginDialog: true}) }>登录</Button>
            <Button type="text" onClick={ () => this.setState({registerDialog: true}) }>注册</Button>
          </Menu.Item>
        </div>
      )
    }
  };

  render() {
    return (
    <div className="App-header">
      <header className="main-header visible">
        <div className="container">
          <a href="/" className="logo">
            <img src="//gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金" className="logo-img"/>
          </a>
          <div className="nav-menu">
            <Menu defaultActive="1" mode="horizontal" onSelect={this.handleSelect}>
              <Menu.Item index="1">首页</Menu.Item>
              <Menu.Item index="2">专栏</Menu.Item>
              <Menu.Item index="3">收藏集</Menu.Item>
              <Menu.Item index="4">发现</Menu.Item>
              <Menu.Item index="5">标签</Menu.Item>
              <Menu.Item index="6">
                <Input
                  size="small"
                  icon="search"
                  placeholder="搜索掘金"
                  onIconClick={this.handleIconClick}
                  onChange={(value) => this.setState({searchInput: value})}
                />
              </Menu.Item>
              {this.renderMenu()}
            </Menu>
          </div>
        </div>
        <RegisterDialog visible={this.state.registerDialog} onClose={this.handleRegisterDialogClose()}
                        registerActions={this.props.registerActions} users={this.props.users}
        />
        <LoginDialog visible={this.state.loginDialog} onClose={this.handleLoginDialogClose()}
                     loginActions={this.props.loginActions} auth={this.props.auth}
        />
      </header>
    </div>
    )
  }
}
