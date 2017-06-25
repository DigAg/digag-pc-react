/**
 * Created by Yuicon on 2017/6/25.
 */
import React, { Component } from 'react';
import {Button, Dialog, Form, Input} from "element-react";

export default class RegisterDialog extends Component {

  constructor(props){
    super(props);
    this.state = {
      form: {
        username: '',
        account: '',
        password: '',
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit!', this.state.form);
  };

  handleChange = (key, value) => {
    console.log(`${key}`, value);
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  };

  render(){
    return(
      <Dialog
        size="tiny"
        title="注册"
        top="30%"
        customClass="register-dialog"
        closeOnClickModal={false}
        visible={ this.props.visible }
        onCancel={ this.props.onClose }
      >
        <Dialog.Body>
          <Form model={this.state.form} className="demo-form-inline">
            <Form.Item>
              <Input value={this.state.form.username} placeholder="请输入用户名"
                     onChange={this.handleChange.bind(this, 'username')}/>
            </Form.Item>
            <Form.Item>
              <Input value={this.state.form.account} placeholder="请填写手机号或邮箱"
                     onChange={this.handleChange.bind(this, 'account')}/>
            </Form.Item>
            <Form.Item>
              <Input type="password" value={this.state.form.password} placeholder="请输入密码"
                     onChange={this.handleChange.bind(this, 'password')}/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit}>
                注册
              </Button>
            </Form.Item>
          </Form>
        </Dialog.Body>
      </Dialog>
    )
  }
}
