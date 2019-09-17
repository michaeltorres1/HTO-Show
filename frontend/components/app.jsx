import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import NavContainer from './nav_component/nav_container';
import MovieIndexContainer from './movie_component/movie_index_container';
import Home from '../components/home_component/home';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavContainer />
    </header>
    <Switch>
      <Route exact path="/movies" component={MovieIndexContainer} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;