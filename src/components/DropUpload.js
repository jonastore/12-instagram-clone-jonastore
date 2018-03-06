import React, { Component } from 'react';
import axios from 'axios';
//shit that should be removed below
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import { render } from 'react-dom';
//experimental shit that might get removed who knows
import Dropzone from 'react-dropzone';
import request from 'superagent';

//const preset = 'oanabro2';
//const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/your_cloudinary_app_name/upload';
//const cloudApi = 'https://api.cloudinary.com/v1_1/jonastore/image/upload';

class DropUpload extends Component {

	constructor(props) {
    super(props);

    this.state = {
      fileUrl: null,
    };
  }

  dropImage(files) {
    this.uploadImage(files[0]);
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
          <div>
              <Dropzone
                onDrop={this.dropImage.bind(this)}>
                <p>Drop or select image</p>
              </Dropzone>
              <div>
                  <img src={this.state.fileUrl} />
              </div>
          </div>
        );
    }
}

export default DropUpload;
