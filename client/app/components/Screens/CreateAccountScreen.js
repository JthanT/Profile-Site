import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import 'whatwg-fetch';

class CreateAccountScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      signUpError: '',
      signUpFirstname: '',
      signUpLastname: '',
      signUpEmail: '',
      signUpUsername: '',
      signUpPassword: '',
    };
  }

  signUpEvent() {
    const {
      signUpFirstname,
      signUpLastname,
      signUpEmail,
      signUpUsername,
      signUpPassword,
    } = this.state;

    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: signUpFirstname,
        lastname: signUpLastname,
        email: signUpEmail,
        username: signUpUsername,
        password: signUpPassword,
      }),
    }).then(res => res.json())
  }

  render() {
    return (
      <div className="create_account_screen">
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange = { (event, newValue) => this.setState({ signUpFirstname: newValue }) }
            />
            <br/>
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange = { (event, newValue) => this.setState({ signUpLastname: newValue }) }
            />
            <br/>
            <TextField
              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange = { (event, newValue) => this.setState({ signUpEmail: newValue }) }
            />
            <br/>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange = { (event, newValue) => this.setState({ signUpUsername: newValue }) }
            />
            <br/>
            <TextField
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange = { (event, newValue) => this.setState({ signUpPassword: newValue }) }
            />
            <br/>
            <RaisedButton label="Submit" primary={ true } onClick={ (event) => this.signUpEvent(event) }/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CreateAccountScreen;
