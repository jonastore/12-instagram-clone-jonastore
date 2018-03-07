import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Link, Route } from 'react-router-dom';

//import Upload from './components/Upload'
import DropUpload from './components/DropUpload'
import Gallery from './components/Gallery'
import Detail from './components/Detail'


ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Upload />, document.getElementById('upload'));
ReactDOM.render(<DropUpload />, document.getElementById('dropUpload'));
ReactDOM.render(<Gallery />, document.getElementById('gallery'));

export default () => (
	<BrowserRouter>
		<Route path="/img/:data.public_id" component={Detail} />
	</BrowserRouter>
);

registerServiceWorker();

//oanabro2

