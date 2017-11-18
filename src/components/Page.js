import React from 'react';

import PhotoList from './PhotoList';

const Page = ({pageTitle, fetchPhotos, photos}) => {

  //fire off performSearch if page is not main
  if(pageTitle) {
    fetchPhotos(pageTitle);
  }

  return(
    <div className="photo-container">
      <h2>{pageTitle}</h2>
      <PhotoList photos={photos} />
    </div>
  );
}


export default Page;
