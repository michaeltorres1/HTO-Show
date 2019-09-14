import React from 'react';
import Modal from './modal/modal';
import NavContainer from './nav_component/nav_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavContainer />
    </header>
  </div>
);

export default App;