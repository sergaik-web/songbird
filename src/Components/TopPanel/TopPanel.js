import React from "react";
import './TopPanel.css';
import Navigation from "../Navigation";
import DB from '../../DB/DB';


const TopPanel = () => {
  console.log(DB);
  const score=0;
  return (
    <>
      <div className={'top-panel'}>
        <div className={'logo'}/>
        <h5>Score: {score}</h5>
      </div>
      <Navigation/>
    </>
  )
};

export default TopPanel;