import React, {useState} from "react";
import {connect} from "react-redux";
import Hoc from "../Hoc";
import './AnswerInfo.css';


const AnswerInfo = (props) => {
  const service = props.service;
  const [urlImg, setUrlUmg] = useState('');

   if (props.select) {
     service.getInfoBirds(props.select, props.classBirds).then(res =>
       setUrlUmg(res.photos.photo[0].url_m)
     );
     return (
       <div className={'answer-info'}>
         <img src={urlImg} alt={'img'} className={'infoImg'}/>
         AnswerInfo
       </div>
     )
   } else {
     return (
       <div className={'answer-info'}>
         Послушайте плеер.
         <br/>
         Выберите птицу из списка
       </div>
     )
   }
};

const mapStateToProps = (state) => {
  return {
    select: state.select,
    classBirds: state.classBirds
  }
};

export default connect(mapStateToProps)(Hoc()(AnswerInfo));