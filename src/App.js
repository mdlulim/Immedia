import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import PhotoList from './components/PhotoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentWillMount() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=748c099de145d35660505013da5a508a&format=json&nojsoncallback=1')
      .then(result => {
        this.setState({photos: result.data.photos.photo});
      })
      .catch(error => {
        console.log("Error occured while fetching data from Flickr: " + error.message);
      });
  }

  performSearch(term) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=748c099de145d35660505013da5a508a&text=${term}&format=json&nojsoncallback=1`)
      .then(result => {
        this.setState({photos: result.data.photos.photo});
      })
      .catch(error => {
        console.log("Error occured while fetching data from Flickr: " + error.message);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <SearchForm onSearch={term => this.performSearch(term)} />
            <Navigation />
            <PhotoList photos={this.state.photos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
