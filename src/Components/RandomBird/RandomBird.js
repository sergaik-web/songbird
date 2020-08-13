import React from "react";
import './RandomBird.css';
import {connect} from "react-redux";




const RandomBird = (props) => {
  return (
    <div className={'random-bird'}>
      <div className={'image-bird'} style={{backgroundImage: 'url("https://live.staticflickr.com/65535/50209429396_2a03571d6d.jpg")'}}/>
      <h2>{props.bird === props.selectBird ? props.bird : '*****'}</h2>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    bird: state.bird,
    selectBird: state.select
  }
};

export default connect(mapStateToProps)(RandomBird);