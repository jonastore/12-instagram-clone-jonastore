import React, { Component } from 'react';

class Detail extends Component {
  



  render() {
      const imgId = this.props.match.params.id;

        console.log(this.props)
        return (
          <div>
            <img src={"http://res.cloudinary.com/jonastore/image/upload/v1520433139/" + (this.props.match.params.id) + ".jpg"} />
            Detail Id: {(this.props.match.params.id)}
          </div>
        );
    }
}

export default Detail;
