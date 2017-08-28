/**
 * Created by Yuicon on 2017/7/13.
 * https://github.com/Yuicon
 */
import React, {Component} from 'react';
import {Form, Icon, Input, Button, message, Switch} from 'antd';
import {connect} from "react-redux";
import {createEntryAction} from '../../redux/action/entries';
import './SubmitEntry.css';


const FormItem = Form.Item;
const createForm = Form.create;

@createForm()
@connect(
  (state) => {
    return ({
      entries: state.entries,
    });
  },
  {createEntryAction: createEntryAction}
)
export default class SubmitEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entries.get('saveSuccess') && !this.props.entries.get('saveSuccess')) {
      message.success('投稿成功');
      this.props.form.resetFields();
    } else if (nextProps.entries.get('error')) {
      message.error(nextProps.entries.get('error'));
    }
    this.setState({loading: false});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createEntryAction(values);
        this.setState({loading: true});
      }
    });
  };

  render() {

    const {getFieldDecorator} = this.props.form;

    return (
      <div className="SubmitEntry-container">
        <div className="head">
          <h2>推荐文章到掘金</h2>
          <p>感谢分享，文章的审核时间约1-2个工作日</p>
        </div>
        <div className="entry-form">

          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem label="分享网址">
              {getFieldDecorator('originalUrl', {
                rules: [{required: true, message: '请输入分享网址'}],
              })(
                <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="分享网址"/>
              )}
            </FormItem>
            <FormItem label="标题">
              {getFieldDecorator('title', {
                rules: [{required: true, message: '请输入标题'}],
              })(
                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} placeholder="标题"/>
              )}
            </FormItem>
            <FormItem label="描述">
              {getFieldDecorator('content', {
                rules: [{required: true, message: '请输入描述'}],
              })(
                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} placeholder="描述"/>
              )}
            </FormItem>
            <FormItem label="文章类型">
              {getFieldDecorator('original', {
                rules: [{required: true, message: '请选择文章类型'}],
              })(
                <Switch checkedChildren="原创" unCheckedChildren="转载"/>
              )}
            </FormItem>
            <FormItem label="语言">
              {getFieldDecorator('english', {
                rules: [{required: true, message: '请选择语言'}],
              })(
                <Switch checkedChildren="英文" unCheckedChildren="中文"/>
              )}
            </FormItem>
            <Form.Item >
              <Button type="primary" onClick={this.handleSubmit} loading={this.state.loading}>
                发布
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
