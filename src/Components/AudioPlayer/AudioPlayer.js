import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import LinearProgress from '@material-ui/core/LinearProgress';
import './AudioPlayer.css';

const AudioPlayer = (props) => {
  const urlAudio = props.url;
  const player = document.getElementById('player');
  const [play, setPlay] = useState(false);
  const [audioLoad, setAudioLoad] = useState(false);
  const [duration, setDuration] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [countStatusBar, setCountStatusBar] = useState(0);

  const handleClick = () => {
    setPlay(!play);
    play ? player.pause():player.play();
  };

  if (countStatusBar === 100) {
    setPlay(!play);
    player.currentTime = 0;
    setCountStatusBar(0);
  }

  const audioOnLoad = () => {
    setAudioLoad(true);
    setDuration(Math.floor(player.duration*100)/100);
    setInterval(()=>{
      setCurrentTime(Math.floor(player.currentTime*100)/100);
      setCountStatusBar(Math.floor(player.currentTime*100/player.duration));
    }, 200)
  };

  const PlayerUi = () => {
    return (
      <>
      <IconButton onClick={()=>handleClick()}>
        {play ?
          <PauseCircleOutlineIcon fontSize={'large'}/>:
          <PlayCircleOutlineIcon fontSize={"large"}/>
        }
      </IconButton>
      <LinearProgress
        className={'status-bar'}
        variant="determinate"
        value={countStatusBar} />
      <div>
        <p>{duration}</p>
        <br/>
        <p>{currentTime}</p>
        <p>{countStatusBar}</p>
      </div>
      </>
    )
  };

  return (
    <div className={'question-player'}>
      <audio
        id={'player'}
        src={urlAudio}
        autoPlay={false}
        onLoadedMetadata={()=>audioOnLoad()}
      />
      {audioLoad ? <PlayerUi/> : 'Loading...'}
    </div>
  )
};

export default AudioPlayer;