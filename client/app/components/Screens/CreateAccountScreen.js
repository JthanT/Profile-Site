import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import 'whatwg-fetch';
// import { getFromStorage, setInStorage } from '../../utils/storage';

class CreateAccountScreen extends Component {
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
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CreateAccountScreen;
