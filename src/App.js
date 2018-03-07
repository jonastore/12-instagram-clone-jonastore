import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import logo from './logo.jpg';
import Detail from './components/Detail'
import Test from './components/Test'

class App extends Component {
  render() {
    return (

    	<BrowserRouter>
    		<div className="App">
      				<img id="logo" src={ logo } />
      			<Route path={"/test/:testing"} component={Test} />
    			<Route path="/img/:id" component={Detail} />
    		</div>
    	</BrowserRouter>

      
    );
  }
}

export default App;
