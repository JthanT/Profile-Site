import React, { Component } from 'react';
import 'whatwg-fetch';
// import { getFromStorage, setInStorage } from '../../utils/storage';

class CreateAccountScreen extends Component {
  render() {
    return (
      <div className="create_account_screen">
        <div className="create_account_form">
          <h1>Create account</h1>
          // <form onSubmit={this.saveAndContinue}>
          <form onSubmit={this.saveAndContinue}>
            <Input
                text="First Name"
                ref="firstName"
                validate={this.isEmpty}
                value={this.state.firstName}
                // onChange={this.handleCompanyInput}
                // emptyMessage="Company name can't be empty"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateAccountScreen;
