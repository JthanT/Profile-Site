import React, { Component } from 'react';
import 'whatwg-fetch';
// import { getFromStorage, setInStorage } from '../../utils/storage';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h3>React Form</h3>
        <FormContainer />
      </div>
    );
  }
}

export default Home;
