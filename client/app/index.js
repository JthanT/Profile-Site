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

import CreateAccountScreen from './components/Screens/CreateAccountScreen';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={CreateAccountScreen}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
