/**
 * Created by Yuicon on 2017/7/5.
 * https://github.com/Yuicon
 */
import React, { Component , PropTypes} from 'react';
import './Index.css';
import {findAllEntriesAction, likeEntryAction} from '../../redux/action/entries';
import {connect} from "react-redux";
import {Tabs} from "antd";
import Entry from "../../components/Entry/Entry";

const TabPane = Tabs.TabPane;

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
export default class Index extends Component {

  static propTypes = {
    entries: PropTypes.object,
    error: PropTypes.string,
    last: PropTypes.bool,
    findAllEntriesAction: PropTypes.func,
    likeEntryAction: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.page = 0;
  }

  componentWillMount() {
    this.props.findAllEntriesAction();
    window.addEventListener('scroll', this.throttle(this.onScroll, 500, 1000), { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttle(this.onScroll, 500, 1000), { passive: true });
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.entries !== this.props.entries;
  }

  throttle = (func, wait, mustRun) => {
    let timeout, startTime = new Date();

    return () => {
      let args = arguments, curTime = new Date();
      clearTimeout(timeout);
      // 如果达到了规定的触发时间间隔，触发 handler
      if(curTime - startTime >= mustRun){
        func.apply(this,args);
        startTime = curTime;
        // 没达到触发间隔，重新设定定时器
      }else{
        timeout = setTimeout(func, wait);
      }
    };
  };

  onScroll() {
    if ((window.pageYOffset + window.innerHeight + 1) > document.body.scrollHeight) {
      if (!this.props.last) {
        this.page++;
        this.props.findAllEntriesAction(this.page);
      }
    }
  };

  render(){
    return(
      <div className="App" onScroll={Index.onScroll} onScrollCapture={this.onScrollCapture}>
        <div className="App-body">
          <div className="welcome-view">
            {/*<div className="category-nav">*/}
              {/*<div>1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd</div>*/}
            {/*</div>*/}
            <div className="main">
              <Tabs defaultActiveKey="最新">
                <TabPane  tab={'热门'} key={'热门'}>
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
                </TabPane >
                <TabPane  tab={'最新'} key={'最新'}>
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
                </TabPane >
                <TabPane  tab={'评论'} key={'评论'}>
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
                </TabPane >
              </Tabs>
            </div>
            {/*<div className="sidebar">*/}
              {/*31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    )
  }

}
