import React, { Component } from 'react';
import './styles/Gallery.css';
import { render } from 'react-dom'; 
import { BrowserRouter, Link, Route } from 'react-router-dom';

//https://www.npmjs.com/package/axios
import axios from 'axios';

import { CloudinaryContext, Image } from 'cloudinary-react'; //add Transformation/Transform here to transform images in the code instead of the cloud???

import Like from './Like';
import Comment from './Comment';
import Detail from './Detail';

class UpdateBlocker extends React.PureComponent {
  render() {
    return this.props.children
  }
}

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gallery: [],
        }
    }

    componentDidMount(){
        //https://www.npmjs.com/package/axios
        axios.get('http://res.cloudinary.com/jonastore/image/list/mytag.json')
            .then(res => {
                console.log(res.data.resources);
                console.log(res.data.resources.public_id);
                this.setState({gallery: res.data.resources});
            });
    }

    //a = <Link to={}>
    //add Like and Comment below and find a better way to freaking comment/like
    render(){
        return (
          <BrowserRouter>
            <div className="main">
                <CloudinaryContext cloudName="jonastore">
                <ul>
                    { this.state.gallery.map(data => {return (
                            <li>
                                <a href={`/img/${data.public_id}`}>
                                    <Image className="img" publicId={data.public_id} />
                                </a>
                            </li>
                            )
                        }) 
                    }
                </ul>
                </CloudinaryContext>
            </div>
          </BrowserRouter>
        );
    }
}

export default Gallery;
