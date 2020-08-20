import React, {useState, useEffect} from "react";
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import {connect} from "react-redux";
import Hoc from "../Hoc";
import './AnswerInfo.css';


const AnswerInfo = (props) => {
  const service = props.service;
  const [urlImg, setUrlImg] = useState('');
  const [infoBird, setInfo] = useState('');
  const [urlAudio, setUrlAudio] = useState('');

  useEffect(()=>{
    if (props.select) {
      service.getAudioBird(props.select, props.classBirds).then(res => {
        setUrlAudio('http:'+res.recordings[0].file)
      });
      service.getInfoBirds(props.select, props.classBirds).then(res => {
          setUrlImg(res.url);
          setInfo(res.info);
        }
      );
    }
  }, [props.select, props.classBirds, service]
  );

   if (props.select) {
     return (
       <div className={'answer-info'}>
         <div style={{backgroundImage: `url(${urlImg})`}} className={'infoImg'}>
         </div>
         <AudioPlayer url={urlAudio}/>
         <div className={'infoBird'}>
           {infoBird}
         </div>

       </div>
     )
   } else {
     return (
       <div className={'answer-info'}>
         <div>
           Послушайте плеер.
           <br/>
           Выберите птицу из списка
         </div>
       </div>
     )
   }
};

const mapStateToProps = (state) => {
  return {
    select: state.select,
    classBirds: state.classBirds,
  }
};

export default connect(mapStateToProps)(Hoc()(AnswerInfo));