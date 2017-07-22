/**
 * Created by Yuicon on 2017/7/12.
 * https://github.com/Yuicon
 */
import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './Entry.css';

export default class Entry extends Component {

  handleClick = () => {
    console.log(this.props.entry.title);
    const entry =  this.props.entry;
    entry.collectionCount = entry.collectionCount + 1;
    this.props.onClick(entry);
  };

  shouldComponentUpdate(nextProps, nextState) {
    debugger
    return nextProps.entry.get('collectionCount') !== this.props.entry.get('collectionCount');
  }


  render(){

    const entry = this.props.entry;

    return(
      <div className="entry">
        <a href={`${entry.originalUrl}`} target="_blank" rel="noopener noreferrer">
          <div className="content-box">
            <div className="info-box">
              <div className="meta-row">专栏-test-{moment(entry.createdAt).startOf('hour').fromNow()}</div>
              <div className="title-row">{entry.title}</div>
              <div className="action-row">
                <div className="entry-item">
                  <a href="javascript:void(0)">
                    <div className="entry-title-box" onClick={this.handleClick}>
                      <img src="//gold-cdn.xitu.io/v3/static/img/like.4bf00fb.svg" alt="喜欢"/>
                      <span className="entry-collectionCount">{entry.collectionCount}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="thumb">
              <img className="thumb"
                   alt="封面"
                src="https://user-gold-cdn.xitu.io/2017/7/12/4b5019181a1aa3729b5e36b41aecf6a2?imageView2/1/w/120/h/120/q/85/interlace/1"/>
            </div>
          </div>
        </a>
      </div>
    )
  }
}
