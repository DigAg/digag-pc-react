/**
 * Created by Yuicon on 2017/8/15.
 * https://github.com/Yuicon
 */
import React, { Component } from 'react';
import './User.css';
import {findUserEntriesAction, likeEntryAction} from '../../redux/action/entries';
import {connect} from "react-redux";
import Entry from "../../components/Entry/Entry";

@connect(
  (state) => {
    return ({
      entriesByUser: state.entries.get('entriesByUser'),
      error: state.entries.get('error'),
      last: state.entries.get('last'),
    });
  },
  {findUserEntriesAction, likeEntryAction}
)
export default class User extends Component {

  componentWillMount() {
    this.props.findUserEntriesAction(0, 10, this.props.match.params.username);
  }

  render() {
    return(
      <div className="user-main">
        <div className="user-info">
          user-info
        </div>
        <div className="user-entries">
          {
            this.props.entriesByUser.sort((a, b) => {
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
