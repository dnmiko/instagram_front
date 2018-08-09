import React, { Component } from 'react';
import './style.css';

class PhotoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: props.photo
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.photo !== prevProps.photo) {
            this.setState({
                photo: this.props.photo
            })
        }
    }

    render() {
        return (
            <div className="row my-row">
                <div className="col-md-3"></div>
                <div className="col-md-6 col-sm-12">
                    <div className="card" style={{ width: "100%" }}>
                        <h5 className="card-title text-left user_name_text">{this.state.photo.owner.user_name}</h5>
                        <p className="text-left">{this.state.photo.location}</p>
                        <img className="card-img-top" src={this.state.photo.url} alt="Card image cap" />
                        <h5 className="my-card-text" onClick={() => this.props.redirect(this.state.photo._id)}>{this.state.photo.description}</h5>
                    </div>
                    <div className="col-md-3"></div>
                </div>

            </div>
        )
    }
}

export default PhotoCard;