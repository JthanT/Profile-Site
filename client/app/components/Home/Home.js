import React, { Component } from 'react';
import 'whatwg-fetch';
import { getFromStorage, setInStorage } from '../../utils/storage';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: ''
    }
  }

  componentDidMount() {
    const token = getFromStorage('profile_app');

    if(token){
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if(json.success) {
            this.setState({
              token: token,
              isLoading: false,
            });
          } else {
            this.setState({ isLoading: false });
          }
        });
    } else {
      this.setState({ isLoading: false });
    }
  }

  newCounter() {
    fetch('/api/counters', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        let data = this.state.counters;
        data.push(json);

        this.setState({
          counters: data
        });
      });
  }

  render() {
    const {
      isLoading,
      token,
    } = this.state;

    if(isLoading) {
      return(
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    if(!token) {
      return(
        <div>
          <p>Sign In</p>
          <p>Sign Up</p>
        </div>
      );
    }

    return (
      <div>
        <p>Account</p>
      </div>
    );
  }
}

export default Home;
