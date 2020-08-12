import React, {useEffect, useState} from "react";
import './AnswerOptions.css';
import db from '../../DB/DB';
import {setRandomBird} from "../../Actions/Actions";
import {connect} from "react-redux";
import AnswerItem from "../AnswerItem";

const AnswerOptions = (props) => {
  const predatorsBirds = db.predatorsBirds;
  const forestBirds = db.forestBirds;
  const otherBirds = db.otherBirds;
  const allBirds = predatorsBirds.concat(forestBirds.concat(otherBirds));
  const [selectedBirds, setSelectedBirds] = useState([]);

  useEffect(()=>{
    switch (props.classBirds) {
        case "predatorsBirds":
          setSelectedBirds(predatorsBirds);
          props.setRandomBird(predatorsBirds[Math.floor(Math.random()*predatorsBirds.length)].ruName);
          break;

        case "forestBirds":
          setSelectedBirds(forestBirds);
            props.setRandomBird(forestBirds[Math.floor(Math.random()*forestBirds.length)].ruName);
          break;

        case "allBirds":
          setSelectedBirds(allBirds);
          props.setRandomBird(allBirds[Math.floor(Math.random()*allBirds.length)].ruName);
          break;

        case "otherBirds":
          setSelectedBirds(otherBirds);
          props.setRandomBird(otherBirds[Math.floor(Math.random()*otherBirds.length)].ruName);
          break;

        default:
          break;
    }
  });

  console.log(selectedBirds);

  return (
    <ul className={'answer-options'}>
      <AnswerItem birds={selectedBirds}/>
    </ul>
  )
};

const mapStateToProps = (state) => {
  return {
    classBirds: state.classBirds
  }
};

const mapDispatchToProps = {setRandomBird};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);