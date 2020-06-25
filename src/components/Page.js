import React from 'react';
import { withRouter } from 'react-router-dom';

import PhotoList from './PhotoList';
import Navigation from './Navigation';
import SearchForm from './SearchForm';

import IndexNavbar from "./Navbars/IndexNavbar";
import IndexHeader from "./Headers/IndexHeader.js";

const Page = ({title, currentPage, getPhotos, changePageName, history, photos, fetchPhotos}) => {

  if((title !== currentPage) && title !== "Search") {
    getPhotos(currentPage, title);
    changePageName(title);
  }

  return(
    <div>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <br />
      <SearchForm history={history} onSearch={term => fetchPhotos(term)}/>
      <Navigation/>
      <div className="photo-container">
        { title !== "Search" && <h2>{title}</h2>}
        <PhotoList photos={photos} />
      </div>
      </div>
    </div>
  );
}

export default withRouter(Page);
