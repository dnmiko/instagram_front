import React, { Component } from 'react';
import Header from '../Download/Header';
import payload from '../../resolvers/payload';
import checkToken from '../../resolvers/checkToken';
import Feed from '../Feed/Feed';
import Login from '../Login/Login';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    chargeProfile = () => {
        if (checkToken()) {
            const token = localStorage.getItem('token');
            let pl = payload(token);
            return (
                <div className="my-container-fluid">
                    <Feed props={this.props} />
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
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <Login props={this.props} />
                        <div className="col-md-3"></div>
                    </div>

                </div >
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