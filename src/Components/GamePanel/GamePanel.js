import React from "react";
import AnswerOptions from "../AnswerOptions";
import AnswerInfo from "../AnswerInfo";
import NextQuestionButton from "../NextQuestionButton";
import './GamePanel.css';

const GamePanel = () => {
  return (
    <div className={'game-panel'}>
      <div className={'answers'}>
        <AnswerOptions/>
        <AnswerInfo/>
      </div>
      <NextQuestionButton/>
    </div>
  )
};

export default GamePanel;