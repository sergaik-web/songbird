import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import React from "react";

const PlayStopButton = ({play, handleClick}) => {
  return (
    <>
      {play ?
        <PauseCircleOutlineIcon onClick={handleClick} style={{color:'#00efb2', fontSize: 50}}/>:
        <PlayCircleOutlineIcon onClick={handleClick} style={{color:'#00efb2', fontSize: 50}}/>}
    </>
  )
};

export default PlayStopButton;