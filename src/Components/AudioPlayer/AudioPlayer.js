import React, {useState, useRef, useEffect} from "react";
import AudioSlider from "./AudioSlider";
import PlayStopButton from "./PlayStopButton";
import {connect} from "react-redux";
import './AudioPlayer.css';



const AudioPlayer = (props) => {
  const urlAudio = props.url;
  const player = document.getElementById('player');
  const [play, setPlay] = useState(false);
  const [audioLoad, setAudioLoad] = useState(false);

  useEffect(()=>{
    if (props.win) {
      setPlay(false);
      player.pause();
    }
  }, [play,audioLoad,props.win]);

  useEffect(()=>{
    setAudioLoad(false)
  }, [props.page]);



  const handleClick = () => {
    setPlay(!play);
    !play ? player.play() : player.pause();
  };

  const audioOnLoadMeta = () => {
    setAudioLoad(true);
  };

  const loadStart = () => {
    setAudioLoad(false);
    setPlay(false);
  };

  return (
    <div className={'question-player'}>
      <audio id={'player'}
             src={urlAudio}
             autoPlay={false}
             onLoadedMetadata={audioOnLoadMeta}
             onEnded={handleClick}
             onLoadStart={loadStart}
      />
      {audioLoad ?
        <>
        <PlayStopButton play={play} handleClick={()=>handleClick()}/>
        <AudioSlider player={player}/>
        </>:'Loading...'}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    win: state.win,
    page: state.page
  }
};

export default connect(mapStateToProps)(AudioPlayer);