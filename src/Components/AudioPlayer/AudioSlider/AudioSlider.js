import React, { useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import Volume from "../Volume/Volume";
import "./AudioSlider.css";

const AudioSlider = ({ player, name }) => {
  const [countStatusBar, setCountStatusBar] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      if (countStatusBar === 100 || player.currentTime === player.duration) {
        setCountStatusBar(0);
      } else {
        setCountStatusBar(
          Math.floor((player.currentTime * 100) / player.duration)
        );
      }
    }, 500);
    return () => clearInterval(timer);
  });

  const handleChangeCommitted = (event, newValue) => {
    player.currentTime = (player.duration / 100) * newValue;
  };

  const handleChange = (event, newValue) => {
    setCountStatusBar(newValue);
  };

  return (
    <div className={"slider-block"}>
      <Slider
        className={"slider"}
        onChangeCommitted={handleChangeCommitted}
        value={countStatusBar}
        onChange={handleChange}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Timer value={player.currentTime} />
        <Timer value={player.duration} />
      </div>
      {name === "question-info" ? <Volume player={player} /> : <></>}
    </div>
  );
};

const Timer = ({ value }) => {
  const min = Math.floor(Math.floor(Math.floor(value * 100) / 100) / 60);
  const sec = Math.floor(Math.floor(value * 100) / 100) - 60 * min;
  return <p>{`${min>=10?min:'0'+String(min)}:${sec>=10 ? sec : '0'+ String(sec)}`}</p>;
};

export default AudioSlider;
