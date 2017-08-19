/**
 * Created by Yuicon on 2017/7/12.
 * https://github.com/Yuicon
 */
import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './Entry.css';
import classNames from "classnames";

export default class Entry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
      collectionCount: this.props.entry.collectionCount
    };
  }

  handleClick = () => {
    this.props.onClick(this.props.entry.id);
  };

  componentDidUpdate() {
    console.log('entries', this.props.entry.id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.entry.collectionCount !== this.props.entry.collectionCount
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entry.collectionCount > this.props.entry.collectionCount) {
      this.setState({isLike: true});
    }
    if (nextProps.entry.collectionCount < this.props.entry.collectionCount) {
      this.setState({isLike: false});
    }
  }

  render() {
    return (
      <div className="entry">
        <a href={`${this.props.entry.originalUrl}`} target="_blank" rel="noopener noreferrer">
          <div className="content-box">
            <div className="info-box">
              <div className="meta-row">
                <a href={`/user/${this.props.entry.author}`}>专栏-{this.props.entry.author}</a>
                -{moment(this.props.entry.createdAt).startOf('hour').fromNow()}</div>
              <div className="title-row">{this.props.entry.title}</div>
              <div className="action-row">
                <div className="entry-item">
                  <a href="javascript:void(0)">
                    <div className="entry-title-box" onClick={this.handleClick}>
                      <img src={`${this.state.isLike
                        ? "//gold-cdn.xitu.io/v3/static/img/liked.6137140.svg"
                        :
                        "//gold-cdn.xitu.io/v3/static/img/like.4bf00fb.svg"}`} alt="喜欢"/>
                      <span className={classNames({'entry-collectionCount': true, 'liked': this.state.isLike})}>
                        {this.props.entry.collectionCount}
                      </span>
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
