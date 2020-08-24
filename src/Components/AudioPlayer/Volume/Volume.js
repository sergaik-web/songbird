import React, { useRef, useState } from "react";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Grid from "@material-ui/core/Grid";
import "./Volume.css";

const Volume = ({ player }) => {
  const volume = useRef(100);
  const [value, setValue] = useState(player.volume * 100);

  const onChangeCommitted = (event, newValue) => {
    volume.current = newValue;
    player.volume = volume.current / 100;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={1} className={"volume"}>
      <Grid item>
        <VolumeDown />
      </Grid>
      <Grid item xs>
        <Slider
          value={value}
          onChange={handleChange}
          onChangeCommitted={onChangeCommitted}
        />
      </Grid>
      <Grid item>
        <VolumeUp />
      </Grid>
    </Grid>
  );
};

export default Volume;
