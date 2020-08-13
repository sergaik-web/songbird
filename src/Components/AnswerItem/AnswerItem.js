import React, {useEffect, useRef} from "react";
import db from "../../DB/DB";
import {setRandomBird} from "../../Actions/Actions";
import {connect} from "react-redux";

const AnswerItem = (props) => {
  const selectedBirds = useRef(db.otherBirds);

  useEffect(()=>{
    switch (props.classBirds) {
      case "predatorsBirds":
        selectedBirds.current = db.predatorsBirds;
        break;

      case "forestBirds":
        selectedBirds.current = db.forestBirds;
        break;

      case "allBirds":
        selectedBirds.current = db.predatorsBirds.concat(db.forestBirds.concat(db.otherBirds));
        break;

      case "otherBirds":
        selectedBirds.current = db.otherBirds;
        break;

      default:
        break;
    }
  });

  console.log(selectedBirds.current);

  if (selectedBirds.current.length > 0) {
    console.log(selectedBirds.current);
    console.log(selectedBirds.current[Math.floor(Math.random()*selectedBirds.current.length).ruName]);
    props.setRandomBird(selectedBirds.current[Math.floor(Math.random()*selectedBirds.length)].ruName);
  }



  return (
    <>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    classBirds: state.classBirds,
  }
};

const mapDispatchToProps = {setRandomBird};


export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem);