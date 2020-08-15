import React from "react";
import {connect} from "react-redux";
import './TopPanel.css';
import Navigation from "../Navigation";



const TopPanel = (props) => {
  return (
    <>
      <div className={'top-panel'}>
        <div className={'logo'}/>
        <h5>Score: {props.score}</h5>
      </div>
      <Navigation/>
    </>
  )
};

const mapStateToProps = (state) => {
  return (
    {
      score: state.score
    }
  )
};

export default connect(mapStateToProps)(TopPanel);