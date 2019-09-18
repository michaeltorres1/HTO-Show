import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import NavContainer from './nav_component/nav_container';
import MovieIndexContainer from './movie_component/movie_index_container';
import MovieShowContainer from './movie_component/movie_show_container';
import Home from '../components/home_component/home';
import Sidebar from '../components/sidebar';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavContainer />
      <Sidebar />
    </header>
    <Switch>
      <Route exact path="/movies" component={MovieIndexContainer} />
      <Route exact path="/movies/:movieId" component={MovieShowContainer} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;