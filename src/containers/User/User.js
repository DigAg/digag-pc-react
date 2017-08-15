/**
 * Created by Yuicon on 2017/8/15.
 * https://github.com/Yuicon
 */
import React, { Component } from 'react';
import './User.css';
import {findAllEntriesAction, likeEntryAction} from '../../redux/action/entries';
import {connect} from "react-redux";
import Entry from "../../components/Entry/Entry";

@connect(
  (state) => {
    return ({
      entries: state.entries.get('entries'),
      error: state.entries.get('error'),
      last: state.entries.get('last'),
    });
  },
  {findAllEntriesAction, likeEntryAction}
)
export default class User extends Component {

  componentWillMount() {
    this.props.findAllEntriesAction();
  }

  render() {
    return(
      <div className="user-main">
        <div className="user-info">
          user-info
        </div>
        <div className="user-entries">
          {
            this.props.entries.sort((a, b) => {
              if (a.createdAt < b.createdAt) { return 1; }
              if (a.createdAt > b.createdAt) { return -1; }
              if (a.createdAt=== b.createdAt) { return 0; }
              return 0;
            }).toList().map(entry => {
              return <Entry key={entry.id} entry={entry} onClick={this.props.likeEntryAction}/>;
            })
          }
        </div>
      </div>
    );
  }
}
