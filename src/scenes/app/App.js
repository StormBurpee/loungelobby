import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.scss';
import Header from '../../components/header/header';
import Home from '../home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Router>
            <Route exact path='/' component={Home}/>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
