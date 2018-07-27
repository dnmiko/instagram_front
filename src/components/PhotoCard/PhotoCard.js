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
            <div className="card" style={{ width: "50%" }}>
                <img src={this.state.photo.url} width="50%" height="50%" />
                <h5 className="card-title" onClick={() => this.props.redirect(this.state.photo._id)}>{this.state.photo.description}</h5>
                <div className="card-body">
                    <p className="card-text">{this.state.photo.user_name}</p>
                </div>
            </div>
        )
    }
}

export default PhotoCard;