import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import 'whatwg-fetch';

class CreateAccountScreen extends Component {
  signUpEvent() {
    const {
      signUpEmail,
      signUpPassword,
    } = this.state;

    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            signUpEmail: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
          });
        }
      });
  }

  render() {
    return (
      <div className="create_account_screen">
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange = { (event,newValue) => this.setState({ firstName:newValue }) }
            />
            <br/>
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange = { (event,newValue) => this.setState({ lastName:newValue }) }
            />
            <br/>
            <TextField
              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange = { (event,newValue) => this.setState({ email:newValue }) }
            />
            <br/>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange = { (event,newValue) => this.setState({ username:newValue }) }
            />
            <br/>
            <TextField
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange = { (event,newValue) => this.setState({ password:newValue }) }
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
