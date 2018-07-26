import React, { Component } from 'react';
import './style.css';
import allPhotosFromThisOne from '../../services/allPhotosFromThisOne';

class Feed extends Component {
    constructor() {
        super();
        this.state = {
            photos: ""
        }
    }

    componentDidMount() {
        allPhotosFromThisOne().then((resp) => {
            console.log(resp.data)
            this.setState(
                { photos: resp.data.data.allPhotosFromThisOne }
            )
        }).catch((err) => {
            console.log(err)
        })
    }

    redirect = (id) => {
        this.props.history.push(`/movie/${id}`);
    }

    renderPhotos = () => {
        console.log(this.state)
        if (this.state.photos !== "") {
            let photos = this.state.photos.map((movie, index) => {
                return (
                    <div></div>
                    /* TODO AGREGAR PhotoCard
                    <PhotoCard photo={photo} redirect={this.redirect} />
                    */

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
                        <div className="col">
                            Estás logeado
                    </div>
                    </div>
                </div>
            </header>
        )
    }







}

export default Feed;