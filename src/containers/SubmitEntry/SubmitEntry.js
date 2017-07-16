/**
 * Created by Yuicon on 2017/7/13.
 * https://github.com/Yuicon
 */
import React, {Component} from 'react';
import {Button, Form, Input, Switch} from "element-react";
import {connect} from "react-redux";
import {createEntryAction} from '../../redux/action/entries';
import './SubmitEntry.css';

@connect(
  (state) => {
    console.log(state);
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
      form: {
        title: '',
        content: '',
        original: true,
        originalUrl: null,
        english: false,
        type: 'article',
      }
    };
  }

  handleSubmit = () => {
    console.log(this.state.form);
    this.props.createEntryAction(this.state.form);
    console.log(this.props.entries);
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
              <Switch
                value={this.state.form.original}
                onChange={this.handleChange.bind(this, 'original')}
                onText="原创"
                offText="转载">
              </Switch>
            </Form.Item>
            <Form.Item >
              <Switch
                value={this.state.form.english}
                onChange={this.handleChange.bind(this, 'english')}
                onText="英文"
                offText="中文">
              </Switch>
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
