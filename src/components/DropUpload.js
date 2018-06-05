import React, { Component } from 'react';
import './styles/DropUpload.css'
import Dropzone from 'react-dropzone';
import request from 'superagent';
//import FontAwesome from 'react-fontawesome';
//var FontAwesome = require('react-fontawesome');


class DropUpload extends Component {

	constructor(props) {
    super(props);

    this.state = {
      fileUrl: null,
      date: null,
    };
  }

  dropImage(files) {
    this.uploadImage(files[0]);
  }

  uploadImage(file) {
    let handleRequest = request.post('https://api.cloudinary.com/v1_1/jonastore/image/upload').field('upload_preset', 'oanabro2').field('file', file);

    handleRequest.then((response) => {
      console.log(response);
      console.log(response.body.public_id);
        this.setState({
          fileUrl: response.body.url,
          date: response.body.created_at
        });
    });
  }

  render() {
        return (
          <div class="container">
              <Dropzone
                className="dropZone"
                onDrop={this.dropImage.bind(this)}>
                <p class="fas fa-upload dropzoneText"></p>
              </Dropzone>
                  <img className="preview" src={ this.state.fileUrl } />
          </div>
        );
    }
}

export default DropUpload;
