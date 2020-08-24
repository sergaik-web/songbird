import React from "react";
import { connect } from "react-redux";
import NewGameButton from "../NewGameButton";
import img from "./win.jpg";
import "./EndGamePanel.css";

const EndGamePanel = (props) => {
  if (props.score === 30) {
    return (
      <div className={"end-game-panel"}>
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "600px",
            height: "600px",
            margin: "50px",
          }}
        />
        <NewGameButton />
      </div>
    );
  } else {
    return (
      <div className={"end-game-panel"}>
        <h1>Поздравляем!</h1>
        <p>
          Вы прошли викторину и набрали {props.score} из <b>30</b> возможных
          баллов
        </p>
        <hr />
        <NewGameButton />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps)(EndGamePanel);
