import React, { Component } from 'react';
import './style.css';
import allPhotosFromThisOne from '../../services/allPhotosFromThisOne';
import PhotoCard from '../PhotoCard/PhotoCard';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: ""
        }
    }

    componentDidMount() {
        allPhotosFromThisOne().then((resp) => {
            console.log(resp.data)
            this.setState(
                { photos: resp.data.data.feed }
            )
        }).catch((err) => {
            console.log(err)
        })
    }

    redirect = (id) => {
        this.props.props.history.push(`/photo/${id}`);
    }

    renderPhotos = () => {
        console.log(this.state)
        if (this.state.photos !== "") {
            let photos = this.state.photos.map((photo, index) => {
                return (
                    <PhotoCard photo={photo} redirect={this.redirect} />
                )
            })
            return photos

        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        return (
            <header className="Instagram-logged-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            Instagram
                        </div>
                    </div>
                    Estás logeado
                </div>
                <div className="container-fluid">
                    {this.renderPhotos()}
                </div>
            </header>
        )
    }







}

export default Feed;