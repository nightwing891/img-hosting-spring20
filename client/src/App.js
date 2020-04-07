import React, { Fragment, } from 'react';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/profile/Profile';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={Nomatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;
