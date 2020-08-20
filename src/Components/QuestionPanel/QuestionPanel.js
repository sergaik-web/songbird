import React, {useState, useEffect} from "react";
import AudioPlayer from "../AudioPlayer";
import './QuestionPanel.css';
import {connect} from "react-redux";
import Hoc from "../Hoc";


const QuestionPanel = (props) => {
  const urlUnBird = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIvGutgFl9ujQ8MDmwaX4_qJPfN5Zx3ah61g&usqp=CAU';
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
            <h1>{props.win ? props.bird : '*****'}</h1>
          </li>
          <li>
            <AudioPlayer url={urlAudio}/>
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