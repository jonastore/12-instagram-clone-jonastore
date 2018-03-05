import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Upload from './components/Upload'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Upload />, document.getElementById('upload'));

registerServiceWorker();
