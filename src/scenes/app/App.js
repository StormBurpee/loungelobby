import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.scss';
import Header from '../../components/header/header';
import Home from '../home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
