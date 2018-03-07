import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
 
import Detail from './components/Detail'
import Test from './components/Test'

class App extends Component {
  render() {
    return (

    	<BrowserRouter>
    		<div className="App">
      				TITLE OF THE APP
      			<Route path="/testing" component={Test} />
    			<Route path="/img/:data.public_id" render={props => <Detail {...props } />} />
    		</div>
    	</BrowserRouter>

      
    );
  }
}

export default App;
