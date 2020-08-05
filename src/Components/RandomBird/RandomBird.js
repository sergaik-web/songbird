import React from "react";
import './RandomBird.css';
import image from './unknownBird.jpg';


const RandomBird = () => {
  return (
    <div className={'random-bird'}>
      <img src={image} alt={'random-bird'}/>
    </div>
  )
};

export default RandomBird;