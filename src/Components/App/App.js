import React from "react";
import Header from "../Header";
import QuestionPanel from "../QuestionPanel";
import GamePanel from "../GamePanel";
import EndGamePanel from "../EndGamePanel";
import { connect } from "react-redux";
import "./App.css";

const App = (props) => {
  if (props.gameEnd) {
    return (
      <div className={"app"}>
        <Header />
        <EndGamePanel />
      </div>
    );
  } else {
    return (
      <div className={"app"}>
        <Header />
        <QuestionPanel />
        <GamePanel />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    gameEnd: state.gameEnd,
  };
};

export default connect(mapStateToProps)(App);
