import React, {
    Component
} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            password: ""
        }
    }

    checkOnInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    submitForm = (event) => {
        event.preventDefault();

    }
}

export default Login;