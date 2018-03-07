import React, { Component } from 'react';
import { render } from 'react-dom'; 
import { BrowserRouter, Link, Route } from 'react-router-dom';

//https://www.npmjs.com/package/axios
import axios from 'axios';

import { CloudinaryContext, Image } from 'cloudinary-react'; //add Transformation/Transform here to transform images in the code instead of the cloud???

import Like from './Like';
import Comment from './Comment';
import Detail from './Detail';


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

    /*<Router path="/img/:data.public_id" render={({match}) => (
                    <Detail detail={this.state.gallery.find(img => img.id === match.params.data.public_id )}/>
                )}/>*/

    //<a href={`http://res.cloudinary.com/jonastore/image/upload/${data.public_id}.jpg`}>*image here*</a>

    render(){
        return (
          <BrowserRouter>
            <div className="main">
                <CloudinaryContext cloudName="jonastore">
                    { this.state.gallery.map(data => {return (
                            <div>
                                <Link to={`/img/${data.public_id}`}>
                                    <Image publicId={data.public_id} />
                                </Link>
                                <Like /><Comment />
                            </div>
                            )
                        }) 
                    }
                </CloudinaryContext>
            </div>
          </BrowserRouter>
        );
    }
}

export default Gallery;
