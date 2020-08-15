import React from "react";
import './QuestionPanel.css';
import {connect} from "react-redux";




const QuestionPanel = (props) => {
  return (
    <div className={'random-bird'}>
      <div className={'image-bird'} style={{backgroundImage: 'url("https://live.staticflickr.com/65535/50209429396_2a03571d6d.jpg")'}}/>
      <h2>{props.win ? props.bird : '*****'}</h2>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    bird: state.bird,
    win: state.win
  }
};

export default connect(mapStateToProps)(QuestionPanel);