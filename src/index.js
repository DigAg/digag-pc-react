import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'element-theme-default';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
