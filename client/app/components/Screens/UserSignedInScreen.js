import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { getFromStorage, setInStorage } from '../../utils/storage';

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
      const token = obj;
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())

      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="signedin_screen">
        <MuiThemeProvider>
          <div>
            <RaisedButton label="Logout" primary={ true } onClick={ (event) => this.logoutEvent(event) }/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default UserSignedInScreen;
