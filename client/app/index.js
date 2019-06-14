import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import LoginScreen from './components/Screens/LoginScreen';
import CreateAccountScreen from './components/Screens/CreateAccountScreen';
import UserSignedInScreen from './components/Screens/UserSignedInScreen';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={LoginScreen}/>
        <Route path="/CreateAccountScreen" component={CreateAccountScreen}/>
        <Route path="/UserSignedInScreen" component={UserSignedInScreen}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
