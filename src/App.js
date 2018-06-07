import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import logodark from './logodark.jpg';
import Detail from './components/Detail'
import Test from './components/Test'
import SignUp from './components/SignUp'

class App extends Component {
  render() {
    return (

    	<BrowserRouter>
    		<div className="App">
      				<img id="logo" src={ logodark } />
      			<Route path={"/test/:testing"} component={Test} />
    			<Route path="/img/:id" component={Detail} />
					<Route path="/register" component={SignUp} />

    		</div>
    	</BrowserRouter>

      
    );
  }
}

export default App;
