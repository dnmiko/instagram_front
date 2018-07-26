import React, { Component } from 'react';
import Header from '../Download/Header';
import { Link } from 'react-router-dom';
import payload from '../../resolvers/payload';
import checkToken from '../../resolvers/checkToken';
import Feed from '../Feed/Feed';

class Home extends Component {
    constructor() {
        super();
    }

    chargeProfile = () => {
        if (checkToken()) {
            const token = localStorage.getItem('token');
            let pl = payload(token);
            return (
                <div className="my-container-fluid">
                    <Feed />
                </div>
            )
        } else {
            return (
                <div className="my-container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Header />
                        </div>
                    </div>
                    Este es el Home cuando no te has loggeado
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.chargeProfile()}
            </div>
        )
    }

}

export default Home;