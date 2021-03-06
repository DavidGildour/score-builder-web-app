import React from 'react';
import { Redirect } from 'react-router-dom';

import usersAPIClient from '../utils/usersAPIClient';
import toastMessage from '../utils/toast';

import Register from './Register';
import Login from './Login';


export default class extends React.Component {
  state = {
    loginSuccess: false,
  };

  logIn = async (e) => {
    const { username, password } = e.target;
    try {
      const json = await usersAPIClient.getAuth(username.value, password.value);
      const user = json.content;

      delete user.access_token;
      this.props.appStateChange({
        user: user,
        isLogged: true,
        lang: user.language,
      });
      this.setState({
        loginSuccess: true,
      });
    } catch (err) {
      toastMessage(err.message);
    };
  }

  register = async (e) => {
    const { username, password1, password2, email } = e.target;
    let msg;
    try {
      const json = await usersAPIClient.registerUser(username.value, password1.value, password2.value, email.value, this.state.language);
      msg = json.message;
    } catch (err) {
      msg = err.message;
    }
    toastMessage(msg);
  }

  render = () => {
    if (this.state.loginSuccess) return <Redirect to='/' />

    return (
      <div id="main">
        <div className="row page-content">
          <Register
            text={this.props.lang.navbar.forms}
            close={this.props.lang.navbar.close}
            onSubmit={this.register}
          />
          <div className="col s2" />
          <Login
            text={this.props.lang.navbar.forms}
            onSubmit={this.logIn}
            close={this.props.lang.navbar.close}
          />
        </div>
      </div>
    )
  }
}