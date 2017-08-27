/**
 * Created by Yuicon on 2017/6/30.
 */
import React, {Component} from 'react';
import {Form, Icon, Input, Button, Modal, message} from 'antd';

const FormItem = Form.Item;
const createForm = Form.create;

@createForm()
export default class LoginDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.auth.get('token') && this.props.visible) {
      this.props.onClose();
      message.success('登陆成功');
    } else if (nextProps.auth.get('error') && this.props.visible) {
      message.error(nextProps.auth.get('error'));
    }
    this.setState({loading: false});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loginActions(values);
        this.setState({loading: true});
      }
    });
  };

  handleResetPassWord = () => {

  };

  handleRegister = () => {
    this.props.onRedirect();
  };

  render() {

    const {getFieldDecorator} = this.props.form;

    return (
      <Modal
        title="登录"
        width="26.5rem"
        visible={ this.props.visible }
        onCancel={ this.props.onClose }
        footer={null}
      >
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('account', {
              rules: [{required: true, message: '请输入邮箱', type: 'email'}],
            })(
              <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="邮箱"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}],
            })(
              <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
            )}
          </FormItem>
          <Form.Item>
            <Button style={{width: '100%'}} type="primary" onClick={this.handleSubmit} loading={this.state.loading}>
              登录
            </Button>
          </Form.Item>
          <Button type="text" onClick={this.handleRegister}>
            没有帐号？注册
          </Button>
          <Button style={{float: 'right'}} type="text" onClick={this.handleResetPassWord}>
            忘记密码
          </Button>
        </Form>
      </Modal>
    )
  }
}
