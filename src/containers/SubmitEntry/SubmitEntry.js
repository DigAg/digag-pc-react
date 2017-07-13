/**
 * Created by Yuicon on 2017/7/13.
 * https://github.com/Yuicon
 */
import React, {Component} from 'react';
import {Button, Form, Input} from "element-react";
import {connect} from "react-redux";
import {registerAction, loginAction} from '../../redux/action/users';
import './SubmitEntry.css';

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
export default class SubmitEntry extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        title: '',
        content: '',
        original: null,
        originalUrl: null,
        english: false,
        type: 'article',
      }
    };
  }

  handleSubmit = () => {
    console.log(this.state.form);
  };

  handleChange = (key, value) => {
    this.setState({
      user: Object.assign(this.state.form, {[key]: value})
    });
  };

  render(){
    return(
      <div className="SubmitEntry-container">
        <div className="head">
          <h2>推荐文章到掘金</h2>
          <p>感谢分享，文章的审核时间约1-2个工作日</p>
        </div>
        <div className="entry-form">
          <Form model={this.state.form} labelWidth="80" onSubmit={this.handleSubmit}>
            <Form.Item label="分享网址">
              <Input value={this.state.form.originalUrl} onChange={this.handleChange.bind(this, 'originalUrl')}/>
            </Form.Item>
            <Form.Item label="标题">
              <Input value={this.state.form.title} onChange={this.handleChange.bind(this, 'title')}/>
            </Form.Item>
            <Form.Item label="描述">
              <Input value={this.state.form.content} onChange={this.handleChange.bind(this, 'content')}/>
            </Form.Item>
            <Form.Item >
              <Button type="primary" onClick={this.handleSubmit}>
                发布
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
