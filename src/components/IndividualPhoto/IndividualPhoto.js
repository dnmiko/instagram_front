import React, { Component } from 'react';
import singlePhoto from '../../services/singlePhoto';
import './style.css';

class IndividualPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.props.match.params.id,
            photo: ""
        }
    }

    componentDidMount() {
        singlePhoto(this.state.id).then((photo) => {
            console.log(photo.data);
            this.setState({ photo: photo.data.data.singlePhoto });
        })
    }

    chargePhoto = () => {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            }
        };

        if (this.state.photo !== "") {
            return (
                <div className="row">
                    <div className="col-md-10">
                        <div className="card" style={{ width: "100%" }}>
                            <h5 class="card-title text-left user_name_text">{this.state.photo.owner.user_name}</h5>
                            <img className="card-img-top" src={this.state.photo.url} alt="Card image cap" />
                            <h5 className="my-card-text" onClick={() => this.props.redirect(this.state.photo._id)}>{this.state.photo.description}</h5>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            <div></div>
        }
    }

    render() {
        return (
            <div className="row justify-content-center">
                {this.chargePhoto()}
            </div>
        )
    }
}

export default IndividualPhoto;