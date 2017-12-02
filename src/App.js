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
        // console.log(result);
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
            <Switch>
              <Route path=`${match.path}` render = { () => <Page photos={this.state.photos} />} />
              <Route path="/react-flickr-gallery/cats" render={() => <Page pageTitle="Cats" photos={this.state.photos} fetchPhotos={term => this.performSearch(term)} />} />
              <Route path="/react-flickr-gallery/dogs" render={() => <Page pageTitle="Dogs" photos={this.state.photos} fetchPhotos={term => this.performSearch(term)} />} />
              <Route path="/react-flickr-gallery/computers" render={() => <Page pageTitle="Computers" photos={this.state.photos} fetchPhotos={term => this.performSearch(term)} />} />
              <Route path="/react-flickr-gallery/search" render={() => <Page photos={this.state.photos}/>} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
