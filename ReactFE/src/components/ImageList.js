import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  //   console.log(images);
  const imgs = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imgs}</div>;
};

export default ImageList;
