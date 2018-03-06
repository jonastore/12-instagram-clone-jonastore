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

  dropImage(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.uploadImage(files[0]);
  }

  uploadImage(file) {
    let upload = request.post('https://api.cloudinary.com/v1_1/jonastore/image/upload').field('upload_preset', 'oanabro2').field('file', file);

    upload.then((response) => {
      console.log(response);
        this.setState({ fileUrl: response });
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
