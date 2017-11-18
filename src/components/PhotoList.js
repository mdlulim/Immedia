import React from 'react';
import NotFound from './NotFound';
import PhotoItem from './PhotoItem';

const PhotoList = ({pageTitle, photos}) => {

  let photoItems = photos.map(photo => {
    const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    return <PhotoItem url={url} />;
  });

  return(
    <div className="photo-container">
      <h2>{pageTitle}</h2>
      <ul>
        {photoItems}
        <NotFound />
      </ul>
    </div>
  );
};


export default PhotoList;
