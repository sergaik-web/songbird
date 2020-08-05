import React from 'react';
import Header from "../Header";
import RandomBird from "../RandomBird";
import GamePanel from "../GamePanel";
import './App.css'

function App() {
  return (
    <div className={'app'}>
      <Header/>
      <RandomBird/>
      <GamePanel/>
    </div>
  );
}

export default App;
