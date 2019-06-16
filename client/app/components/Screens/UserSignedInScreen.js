import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { getFromStorage } from '../../utils/storage';

class UserSignedInScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      signInError: '',
    };
  }

  logoutEvent() {
    const obj = getFromStorage('profile_site');

    if(obj && obj.token) {
      const token = obj.token;
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
            });
            this.props.history.push('/');
          }
        });
    }
  }

  render() {
    return (
      <div className="signedin_screen">
        <MuiThemeProvider>
          <Button onClick={ (event) => this.logoutEvent(event) }>Logout</Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default UserSignedInScreen;
