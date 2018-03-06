import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import request from 'superagent';

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
          <div>
              <Dropzone
                className="dropZone"
                onDrop={this.dropImage.bind(this)}>
                <p className="dropzoneText">Drop or select image</p>
              </Dropzone>
              <div>
                  <p>{ this.state.date }</p>
                  <img src={ this.state.fileUrl } />
              </div>
          </div>
        );
    }
}

export default DropUpload;
