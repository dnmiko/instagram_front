import React, { Component } from 'react';
import Header from '../Download/Header';
import './style.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: ""
        }
    }

    checkOnInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    validatePassword = (pwd1, pwd2) => {
        return pwd1 === pwd2;
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <p>ADIOS</p>
                </div>
            </div>
        )
    }

}

export default Signup;


/*<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
</header>*/