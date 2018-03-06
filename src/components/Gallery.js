import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { render } from 'react-dom';

import Like from './Like'
import Comment from './Comment'


class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gallery: []
        }
    }

    componentDidMount(){
        axios.get('http://res.cloudinary.com/jonastore/image/list/mytag.json')
            .then(res => {
                console.log(res.data.resources);
                this.setState({gallery: res.data.resources});
            });
    }

    render(){
        return (
            <div className="main">
                    <CloudinaryContext cloudName="jonastore">
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div key={data.public_id}>
                                            <a target="_blank" href={`http://res.cloudinary.com/jonastore/image/upload/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id} />
                                            </a>
                                            <Like />
                                            <Comment />
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
            </div>
        );
    }
}

export default Gallery;
