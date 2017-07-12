/**
 * Created by Yuicon on 2017/6/30.
 */
import React, {Component} from 'react';
import {Button, Dialog, Form, Input, Notification} from "element-react";

export default class LoginDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
      },
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    if (nextProps.auth.get('token') && this.props.visible) {
      this.props.onClose();
      Notification.success({
        title: '成功',
        message: '登陆成功',
        duration: 1500
      });
      this.setState({loading: false});
    } else if (nextProps.auth.get('error') && this.props.visible) {
      Notification.error({
        title: '错误',
        message: nextProps.auth.get('error'),
        type: 'success',
        duration: 1500
      });
      this.setState({loading: false});
    }
  }

  handleSubmit = (e) => {
    console.log('submit!', this.state.user);
    e.preventDefault();

    this.refs.user.validate((valid) => {
      if (valid) {
        this.props.loginActions(this.state.user);
        this.setState({loading: true});
      }
    });
  };

  handleChange = (key, value) => {
    this.setState({
      user: Object.assign(this.state.user, {[key]: value})
    });
  };

  handleResetPassWord = () => {

  };

  handleRegister = () => {
    this.props.onRedirect();
  };

  render() {
    return (
      <Dialog
        title="登录"
        top="30%"
        customClass="login-dialog"
        closeOnClickModal={false}
        visible={ this.props.visible }
        onCancel={ this.props.onClose }
      >
        <Dialog.Body>
          <Form ref="user" model={this.state.user} className="demo-form-inline">
            <Form.Item required={true} prop="username"
                       rules={{required: true, message: '邮箱不能为空或格式不正确', trigger: 'blur'}}
            >
              <Input value={this.state.user.username} placeholder="请填写邮箱"
                     onChange={this.handleChange.bind(this, 'username')}/>
            </Form.Item>
            <Form.Item required={true} prop="password"
                       rules={{required: true, message: '密码不能为空', trigger: 'blur'}}
            >
              <Input type="password" value={this.state.user.password} placeholder="请输入密码"
                     onChange={this.handleChange.bind(this, 'password')}/>
            </Form.Item>
            <Form.Item>
              <Button style={{width: '100%'}} type="primary" onClick={this.handleSubmit} loading={this.state.loading}>
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <Button style={{float: 'left'}} type="text" onClick={this.handleRegister}>
                没有帐号？注册
              </Button>
              <Button style={{float: 'right'}} type="text" onClick={this.handleResetPassWord}>
                忘记密码
              </Button>
            </Form.Item>
          </Form>
        </Dialog.Body>
      </Dialog>
    )
  }
}
