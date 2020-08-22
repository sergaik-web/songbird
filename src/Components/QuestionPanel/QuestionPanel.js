import React, {useState, useEffect} from "react";
import AudioPlayer from "../AudioPlayer";
import './QuestionPanel.css';
import img from './unBird.png'
import {connect} from "react-redux";
import Hoc from "../Hoc";


const QuestionPanel = (props) => {
  const urlUnBird = img;
  const service = props.service;

  const [urlAudio, setUrlAudio] = useState('');
  const [urlImg, setUrlImage] = useState('');


  useEffect(()=>{
    if (props.bird){
      service.getAudioBird(props.bird, props.classBirds).then(res => {
        setUrlAudio('http:'+res.recordings[0].file)
      });
    }
    }, [props.bird]);


  if (props.win){
    props.service.getInfoBirds(props.bird, props.classBirds).then(res => {
      setUrlImage(res.url);
    });
  }

  return (
    <div className={'random-bird'}>
      <div
        className={'image-bird'}
        style={props.win ?
          {backgroundImage: `url(${urlImg})`} :
          {backgroundImage: `url(${urlUnBird})`}}/>
      <div className={'question-info'}>
        <ul>
          <li>
            <h3>{props.win ? props.bird : '******'}</h3>
          </li>
          <li>
            <AudioPlayer url={urlAudio} name={'question-info'}/>
          </li>
        </ul>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    bird: state.bird,
    win: state.win,
    classBirds: state.classBirds
  }
};

export default connect(mapStateToProps)(Hoc()(QuestionPanel));