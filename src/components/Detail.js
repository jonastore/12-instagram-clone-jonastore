import React, { Component } from 'react';

import Like from './Like'
import Comment from './Comment'

class Detail extends Component {

  render() {
      const imgId = this.props.match.params.id;

        console.log(this.props)
        return (
          <div>
            <img src={"http://res.cloudinary.com/jonastore/image/upload/v1520433139/" + (this.props.match.params.id) + ".jpg"} />
            Detail Id: {(this.props.match.params.id)}
            <Like />
            <Comment />
          </div>
        );
    }
}

export default Detail;
