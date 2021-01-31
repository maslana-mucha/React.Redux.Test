import React from 'react';
import './App.scss';
import List from './List';

const App = () => {
  return (
    <div className="app">
      <nav className="app-nav-left">
        <div className="app-nav-left__logo">
          <span>TP</span>
        </div>
      </nav>
      <nav className="app-nav-upper">
        <div className="app-nav-upper__title">Lista specjalistów</div>
      </nav>
      <div className="app-list-container">
        <List />
      </div>
    </div>
  );
};

export default App;
