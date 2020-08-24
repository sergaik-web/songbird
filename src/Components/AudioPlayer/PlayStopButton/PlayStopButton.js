import React from "react";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const PlayStopButton = ({ play, handleClick }) => {
  return (
    <>
      {play ? (
        <PauseCircleOutlineIcon
          onClick={handleClick}
          style={{ color: "#00efb2", fontSize: 50, marginTop: "-30px" }}
        />
      ) : (
        <PlayCircleOutlineIcon
          onClick={handleClick}
          style={{ color: "#00efb2", fontSize: 50, marginTop: "-30px" }}
        />
      )}
    </>
  );
};

export default PlayStopButton;
