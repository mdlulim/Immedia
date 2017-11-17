import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoList from './components/PhotoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <SearchForm />
            <Navigation />
            <Switch>
              <Route exact path="/" render={() => <PhotoList />} />
              <Route path="/cats" render={() => <PhotoList pageTitle="Cats" />} />
              <Route path="/dogs" render={() => <PhotoList pageTitle="Dogs" />} />
              <Route path="/computers" render={() => <PhotoList pageTitle="Computers" />} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
