import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import request from 'superagent';

class Like extends Component {

	constructor(props) {
    super(props);

    this.state = {
      fileUrl: null,
      date: null,
    };
  }

  render() {
        return (
          <div>
          </div>
        );
    }
}

export default Like;
