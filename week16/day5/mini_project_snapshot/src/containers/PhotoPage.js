import React from "react";

function PhotoPage(props) {
  return (
    <div>
      <h1>{props.perPage}</h1>
      {props.images.photos.map((photo, index) => {
        return <img key={index} alt="this" src={photo.src.small} />;
      })}
    </div>
  );
}

export default PhotoPage;
