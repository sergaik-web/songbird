import React from "react";
import { connect } from "react-redux";
import NewGameButton from "../NewGameButton";
import "./EndGamePanel.css";

const EndGamePanel = (props) => {
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
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps)(EndGamePanel);
