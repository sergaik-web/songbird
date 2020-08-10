import React from "react";
import AnswerOptions from "../AnswerOptions";
import AnswerInfo from "../AnswerInfo";
import NextLevelButton from "../NextLevelButton";
import './GamePanel.css';

const GamePanel = () => {
  return (
    <div className={'game-panel'}>
      <div className={'answers'}>
        <AnswerOptions/>
        <AnswerInfo/>
      </div>
      <NextLevelButton/>
    </div>
  )
};

export default GamePanel;