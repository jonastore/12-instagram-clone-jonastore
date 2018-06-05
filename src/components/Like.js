import React, { Component } from 'react';
import './styles/Like.css';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class Like extends Component {

	constructor(props) {
    super(props);

    this.state = {
      like: 'Like or dislike this crappy picture!',
    };
    this.likeImage = this.likeImage.bind(this);
  }

  likeImage(event) {
      this.setState({like: event.target.value});
  }


  render() {
        return (
          <div>
            <span class="like">{ this.state.like }</span>
            <select value={this.state.value} onChange={this.likeImage}>
              <option>😐</option>
              <option>😄</option>
              <option>🤮</option>
              <option>🐶</option>
            </select>
          </div>
        );
    }
}

export default Like;
