import React from 'react';
import {withRouter} from 'react-router-dom';

import PhotoList from './PhotoList';
import Navigation from './Navigation';
import SearchForm from './SearchForm';

const Page = ({title, fetchLatestPhotos, fetchPhotos, photos, history}) => {

  if(title !== "Search"){
    if(title === "Home") {
      fetchLatestPhotos();
    } else {
      fetchPhotos(title);
    }
  }

  return(
    <div className="container">
      <SearchForm history={history} onSearch={term => fetchPhotos(term)}/>
      <Navigation/>
      <div className="photo-container">
        { title !== "Search" && <h2>{title}</h2>}
        <PhotoList photos={photos} />
      </div>
    </div>
  );
}

export default withRouter(Page);
