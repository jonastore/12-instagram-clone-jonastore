import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import Upload from './components/Upload'
import DropUpload from './components/DropUpload'
import Gallery from './components/Gallery'
import View from './components/View'

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Upload />, document.getElementById('upload'));
ReactDOM.render(<DropUpload />, document.getElementById('dropUpload'));
ReactDOM.render(<Gallery />, document.getElementById('gallery'));
ReactDOM.render(<View />, document.getElementById('view'));

registerServiceWorker();

//oanabro2

