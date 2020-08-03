import React from "react";
import './TopPanel.css';


const TopPanel = () => {
  const score=0;
  return (
    <div className={'top-panel'}>
      <div className={'logo'}/>
      <h5>Score: {score}</h5>
    </div>
  )
};

export default TopPanel;