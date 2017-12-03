import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import Page from './components/Page';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentWillMount() {
    this.getRecentPhotos();
  }

  getRecentPhotos() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=748c099de145d35660505013da5a508a&format=json&nojsoncallback=1')
    .then(result => {
      this.setState({photos: result.data.photos.photo});
      console.log(this.state.photos);
    })
    .catch(error => {
      console.log("Error occured while fetching data from Flickr: " + error.message);
    });
  }

  performSearch(term) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=748c099de145d35660505013da5a508a&text=${term}&format=json&nojsoncallback=1`)
      .then(result => {
        // console.log(result);
        this.setState({photos: result.data.photos.photo});
        console.log(this.state.photos);
      })
      .catch(error => {
        console.log("Error occured while fetching data from Flickr: " + error.message);
      });
  }

  render() {
    return (
      <BrowserRouter basename="/react-flickr-gallery">
        <Switch>
          <Route exact path='/' render={ () => <Page title="Home" photos={this.state.photos} fetchPhotos={term => this.performSearch(term)} fetchLatestPhotos={() => this.getRecentPhotos()}/>} />
          <Route path='/cats' render={() => <Page title="Cats" photos={this.state.photos} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/dogs' render={() => <Page title="Dogs" photos={this.state.photos} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/computers' render={() => <Page title="Computers" photos={this.state.photos} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/search' render={() => <Page title="Search" photos={this.state.photos} fetchPhotos={term => this.performSearch(term)}/>} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
