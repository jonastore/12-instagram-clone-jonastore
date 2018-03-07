import React, { Component } from 'react';

//https://www.npmjs.com/package/axios
import axios from 'axios';

import { CloudinaryContext, Image } from 'cloudinary-react'; //add Transformation/Transform here to transform images in the code instead of the cloud???
import { render } from 'react-dom'; 

import Like from './Like'
import Comment from './Comment'


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

    render(){
        return (
            <div className="main">
                <CloudinaryContext cloudName="jonastore">
                    { this.state.gallery.map(data => {return (
                            <div><a href={`http://res.cloudinary.com/jonastore/image/upload/${data.public_id}.jpg`}><Image publicId={data.public_id} /></a><Like /><Comment /></div>)
                        }) 
                    }
                </CloudinaryContext>
            </div>
        );
    }
}

export default Gallery;
