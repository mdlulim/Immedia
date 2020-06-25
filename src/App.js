import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Config from './config';

import NotFound from './components/NotFound';
import Page from './components/Page';
import './App.css';

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPage: ""
    }
  }

  getPhotosForPage(currentPage, title) {
    // reload when current page is different from the last page visited
    if((currentPage !== title) && title !== "Search") {
      if(title === "Home") {
        this.getRecentPhotos();
      } else {
        this.performSearch(title);
      }
    }
  }

  getRecentPhotos() {
    axios.get(Config.api.URL+'?method=flickr.photos.getRecent&api_key=748c099de145d35660505013da5a508a&format=json&nojsoncallback=1')
    .then(result => {
      this.setState({photos: result.data.photos.photo});
      //console.log(this.state.photos);
    })
    .catch(error => {
      console.log("Error occured while fetching data from Flickr: " + error.message);
    });
  }

  performSearch(term) {
    axios.get(Config.api.URL+`?method=flickr.photos.search&api_key=748c099de145d35660505013da5a508a&text=${term}&format=json&nojsoncallback=1`)
      .then(result => {
        // console.log(result);
        this.setState({photos: result.data.photos.photo});
        //console.log(this.state.photos);
      })
      .catch(error => {
        console.log("Error occured while fetching data from Flickr: " + error.message);
      });
  }

  changePageName(currentPage) {
      this.setState({currentPage});
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path='/' render={ () => <Page title="Home" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/search' render={() => <Page title="Search" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
