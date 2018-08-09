import React, {
    Component
} from 'react';
import './style.css';
import login from '../../services/login';

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
        login(this.state).then((resp) => {
            if (resp.status === 200) {
                let token = resp.data.token;
                localStorage.setItem('token', token);
                this.props.props.history.push('/');
            }
            else {
                alert(resp.data);
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="col-md-6 col-lg-6 topped">
                <h1>Login to Instagram</h1>
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" name="user_name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" value={this.state.user_name} onChange={this.checkOnInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.checkOnInput} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;