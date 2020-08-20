import IconButton from "@material-ui/core/IconButton";
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import React from "react";

const PlayStopButton = ({play, handleClick}) => {
  return (
    <IconButton onClick={handleClick}>
      {play ?
        <PauseCircleOutlineIcon fontSize={'large'}/>:
        <PlayCircleOutlineIcon fontSize={"large"}/>}
    </IconButton>
  )
};

export default PlayStopButton;