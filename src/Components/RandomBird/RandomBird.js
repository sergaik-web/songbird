import React from "react";
import './RandomBird.css';
import image from './unknownBird.jpg';


const RandomBird = () => {
  return (
    <div className={'random-bird'}>
      <div className={'image-bird'} style={{backgroundImage: 'url("https://live.staticflickr.com/65535/50209429396_2a03571d6d.jpg")'}}/>
    </div>
  )
};

export default RandomBird;