import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';

class Upload extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fileUrl: null,
    };
  }

  uploadImage(file) {
    let upload = request.post('https://api.cloudinary.com/v1_1/jonastore/image/upload').field('upload_preset', 'oanabro2').field('file', file);

    upload.then((response) => {
      console.log(response);
      console.log(response.body.public_id);
        this.setState({
          fileUrl: response.body.url
        });
    });
  }

  render() {
    return (
      <div className="App">
        DROPBOX HERE
      	<input onChange={this.uploadImage} type="file"/>
      	<button onClick={this.uploadImage}>Upload</button>
      </div>
    );
  }
}

export default Upload;
