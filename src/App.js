import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
    </div>
    </BrowserRouter>
  );
}

export default App;
