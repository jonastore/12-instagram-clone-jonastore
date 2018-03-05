import React, { Component } from 'react';

class Upload extends Component {

	handleUpload = event => {
    	console.log(event.target.files[0]); //remove files[0]
    }

  render() {
    return (
      <div className="App">
      	<input type="file" onChange={this.handleUpload}/>
      </div>
    );
  }
}

export default Upload;
