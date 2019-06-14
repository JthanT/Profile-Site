import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
        }
      });

    this.props.history.push('/UserSignedInScreen');
  }

  render() {
    return (
      <div className="login_screen">
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange = { (event, newValue) => this.setState({ signInEmail: newValue }) }
            />
            <br/>
            <TextField
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange = { (event, newValue) => this.setState({ signInPassword: newValue }) }
            />
            <br/>
            <RaisedButton label="Login" primary={ true } onClick={ (event) => this.signInEvent(event) }/>
            <br/>
            <Link to="/CreateAccountScreen">Sign Up</Link>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default LoginScreen;
