import React, { useState, useEffect } from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { connect } from "react-redux";
import Hoc from "../Hoc";
import "./AnswerInfo.css";

const AnswerInfo = (props) => {
  const service = props.service;
  const [urlImg, setUrlImg] = useState("");
  const [infoBird, setInfo] = useState("");
  const [urlAudio, setUrlAudio] = useState("");
  const [engName, setEngName] = useState("");

  useEffect(() => {
    if (props.select) {
      setUrlAudio(service.getAudioBird(props.select, props.classBirds));

      service.getInfoBirds(props.select, props.classBirds).then((res) => {
        setUrlImg(res.url);
        setInfo(res.info);
      });

      setEngName(service.getEngName(props.select, props.classBirds));
    }
  }, [props.select, props.classBirds, service]);

  if (props.select) {
    return (
      <div className={"answer-info"}>
        <div
          style={{ backgroundImage: `url(${urlImg})` }}
          className={"infoImg"}
        />
        <div className={"infoAudio"}>
          <ul>
            <li>
              <h4>{props.select}</h4>
            </li>
            <li>
              <span>{engName}</span>
            </li>
            <li>
              <AudioPlayer url={urlAudio} name={"audio-info"} />
            </li>
          </ul>
        </div>

        <div className={"infoBird"}>{infoBird}</div>
      </div>
    );
  } else {
    return (
      <div className={"answer-info"}>
        <div>
          Послушайте плеер.
          <br />
          Выберите птицу из списка.
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    select: state.select,
    classBirds: state.classBirds,
  };
};

export default connect(mapStateToProps)(Hoc()(AnswerInfo));
