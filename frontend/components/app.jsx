import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import NavContainer from './nav_component/nav_container';
import MovieIndexContainer from './movie_component/movie_index_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavContainer />
    </header>
    <Switch>
      <Route exact path="/movies" component={MovieIndexContainer} />
    </Switch>
  </div>
);

export default App;