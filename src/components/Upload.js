import React, { Component } from 'react';
import axios from 'axios';


class Upload extends Component {

	state = {
		selectedFile: null,
	}

	handleChange = event => {
    	console.log(event.target.files[0]); //remove files[0]
    	this.setState({selectedFile: event.target.files[0]})
    }

    handleUpload = () => {
    	axios.post();
    }



  render() {
    return (
      <div className="App">
        DROPBOX HERE
      	<input onChange={this.handleChange} type="file"/>
      	<button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}

export default Upload;
