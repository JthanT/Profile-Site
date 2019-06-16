import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';


import { setInStorage } from '../../utils/storage';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      token: '',
    };
  }

  signInEvent() {
    const {
      signInEmail,
      signInPassword,
    } = this.state;

    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if(json.success) {
          setInStorage('profile_site', { token: json.token });
          this.setState({
            signInError: json.message,
            signInEmail: '',
            signInPassword: '',
            token: json.token,
          });
          this.props.history.push('/UserSignedInScreen');
        } else {
          alert(json.message);
        }
      });
  }

  render() {
    return (
      <div className="login_screen">
        <MuiThemeProvider>
          <div>
            <TextField
              placeholder="Email"
              onChange = { (event) => this.setState({ signInEmail: event.target.value }) }
            />
            <br/>
            <TextField
              placeholder="Password"
              onChange = { (event) => this.setState({ signInPassword: event.target.value }) }
            />
            <br/>
            <Button onClick={ (event) => this.signInEvent(event) }>Login</Button>
            <br/>
            <Link to="/CreateAccountScreen">Sign Up</Link>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default LoginScreen;
