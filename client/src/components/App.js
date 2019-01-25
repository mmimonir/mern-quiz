import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import RegistrationSuccessfull from '../pages/RegistrationSuccessfull'
import ActivationPage from '../pages/ActivationPage';

class App extends Component {
  render() {
    return( 
    <BrowserRouter>
      <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/registration-success' component={RegistrationSuccessfull} />
            <Route path='/activateaccount/:token' component={ActivationPage} />
            </Switch>
      </Container>
    </BrowserRouter>
    )
  }
}

export default App;
