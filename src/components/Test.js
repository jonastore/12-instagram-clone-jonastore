import React, { Component } from 'react';

class Detail extends Component {


  render() {
      console.log(this.props)
        return (
          <div>
            RESULT: {(this.props.params)}
          </div>
        );
    }
}

export default Detail;
