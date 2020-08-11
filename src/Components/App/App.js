import React, {useEffect} from 'react';
import Header from "../Header";
import RandomBird from "../RandomBird";
import GamePanel from "../GamePanel";
import db from '../../DB/DB';
import {connect} from "react-redux";
import {setRandomBird} from '../../Actions/Actions';
import './App.css';

function App(props) {
  const predatorsBirds = db.predatorsBirds;
  const forestBirds = db.forestBirds;
  const otherBirds = db.otherBirds;
  const allBirds = predatorsBirds.concat(forestBirds.concat(otherBirds));

  useEffect(()=>{
    props.setRandomBird(allBirds[Math.round(Math.random()*allBirds.length)].ruName);
  });

  return (
    <div className={'app'}>
      <Header/>
      <RandomBird/>
      <GamePanel/>
    </div>
  );
}

const mapDispatchToProps = {setRandomBird};

export default connect('', mapDispatchToProps)(App);
