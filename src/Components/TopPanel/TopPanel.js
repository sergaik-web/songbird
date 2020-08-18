import React from "react";
import {connect} from "react-redux";
import './TopPanel.css';
import Navigation from "../Navigation";


const TopPanel = (props) => {
  return (
    <>
      <div className={'top-panel'}>
        <div className={'logo'}/>
        <div>
          <h5>Score: {props.score}</h5>
          <h5>Round: {props.page}/6</h5>
        </div>
      </div>

    </>
  )
};

const mapStateToProps = (state) => {
  return (
    {
      page: state.page,
      score: state.score
    }
  )
};

export default connect(mapStateToProps)(TopPanel);