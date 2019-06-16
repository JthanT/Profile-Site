import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            signUpFirstname: '',
            signUpLastname: '',
            signUpEmail: '',
            signUpUsername: '',
            signUpPassword: '',
          });
          this.props.history.push('/');
        } else {
          this.setState({
            signUpError: json.message,
          });
          
          alert(json.message);
        }
      });

  }

  render() {
    return (
      <div className="create_account_screen">
        <MuiThemeProvider>
          <div>
            <TextField
              placeholder="First Name"
              onChange = { (event) => this.setState({ signUpFirstname: event.target.value }) }
            />
            <br/>
            <TextField
              placeholder="Last Name"
              onChange = { (event) => this.setState({ signUpLastname: event.target.value  }) }
            />
            <br/>
            <TextField
              placeholder="Email"
              onChange = { (event) => this.setState({ signUpEmail: event.target.value  }) }
            />
            <br/>
            <TextField
              placeholder="Username"
              onChange = { (event) => this.setState({ signUpUsername: event.target.value  }) }
            />
            <br/>
            <TextField
              placeholder="Password"
              onChange = { (event) => this.setState({ signUpPassword: event.target.value  }) }
            />
            <br/>
            <Button onClick={ (event) => this.signUpEvent(event) }>Submit</Button>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CreateAccountScreen;
