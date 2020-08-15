import React from "react";
import {connect} from "react-redux";
import Hoc from "../Hoc";
import './AnswerInfo.css';


const AnswerInfo = (props) => {
  const service = props.service;

  service.getInfoBirds('Gyps fulvus').then((res)=>console.log(res));

  return (
    <div className={'answer-info'}>
      AnswerInfo
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    bird: state.bird
  }
};

export default connect(mapStateToProps)(Hoc()(AnswerInfo));