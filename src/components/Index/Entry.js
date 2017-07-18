/**
 * Created by Yuicon on 2017/7/12.
 * https://github.com/Yuicon
 */
import React, {Component} from 'react';
import './Entry.css';

export default class Entry extends Component {

  render(){

    const entry = this.props.entry;

    return(
      <div className="entry">
        <a href={`${entry.originalUrl}`} target="_blank" rel="noopener noreferrer">
          <div className="content-box">
            <div className="info-box">
              <div className="meta-row">专栏-test</div>
              <div className="title-row">{entry.title}</div>
              <div className="action-row">{entry.content}</div>
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
