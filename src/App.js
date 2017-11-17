import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoList from './components/PhotoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
        <Navigation />
        <PhotoList />
      </div>
    );
  }
}

export default App;
