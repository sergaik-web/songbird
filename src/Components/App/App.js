import React from 'react';
import Header from "../Header";
import QuestionPanel from "../QuestionPanel";
import GamePanel from "../GamePanel";
import './App.css';

function App(props) {

  return (
    <div className={'app'}>
      <Header/>
      <QuestionPanel/>
      <GamePanel/>
    </div>
  );
}

export default App;
