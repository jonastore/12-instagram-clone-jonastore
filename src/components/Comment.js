import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import request from 'superagent';

class Comment extends Component {

	constructor(props) {
    super(props);

    this.state = {
      comment: null,
    };
    this.commentImage = this.commentImage.bind(this);
  }

  commentImage(event) {
      this.setState({comment: event.target.value});
  }


  render() {
        return (
          <div>
          { this.state.comment }
           <input type="text" value={this.state.value} placeholder="write something mean" onChange={this.commentImage} />
          </div>
        );
    }
}

export default Comment;
