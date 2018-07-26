import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './components/Login/Login';
import checkToken from './resolvers/checkToken';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Logout from './components/Logout/Logout';

class Routes extends Component {
    render() {
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                checkToken() === true ? <Component {...props} /> : <Redirect to="/login" />
            )} />
        )

        return (
            <Router >
                < main >
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <PrivateRoute exact path='/logout' component={Logout} />
                </main>
            </Router>
        )
    }
}

export default Routes;