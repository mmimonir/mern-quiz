import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegistrationSuccessfull from '../pages/RegistrationSuccessfull';
import ActivationPage from '../pages/ActivationPage';
import TopNavbar from './navbar/TopNavbar';
import CreateQuiz from '../pages/CreateQuiz';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <TopNavbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route
              path='/registration-success'
              component={RegistrationSuccessfull}
            />
            <Route path='/activateaccount/:token' component={ActivationPage} />
            <Route path='/quiz/create' component={CreateQuiz} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
