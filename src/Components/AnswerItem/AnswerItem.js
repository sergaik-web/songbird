import React, {useEffect, useRef} from "react";
import db from "../../DB/DB";
import {setRandomBird, setStep} from "../../Actions/Actions";
import {connect} from "react-redux";
import './AnswerItem.css';

const AnswerItem = (props) => {
  const selectBirds = useRef(db.otherBirds);
  const selectBird = useRef('');

  useEffect(()=>{
    switch (props.classBirds) {
      case "predatorsBirds":
        selectBirds.current = db.predatorsBirds;
        break;

      case "forestBirds":
        selectBirds.current = db.forestBirds;
        break;

      case "allBirds":
        selectBirds.current = db.predatorsBirds.concat(db.forestBirds.concat(db.otherBirds));
        break;

      case "otherBirds":
        selectBirds.current = db.otherBirds;
        break;

      default:
        break;
    }
  });

  if (selectBirds.current.length > 0) {
    selectBird.current = selectBirds.current[Math.floor(Math.random()*selectBirds.current.length)].ruName;
    props.setRandomBird(selectBird.current);
  }

  const AnswerItems = () => {
    const randomPosition = randomCount();
    let arrBirds = [];
    while (arrBirds.length < 5) {
      const randomBird = selectBirds.current[Math.floor(Math.random()*selectBirds.current.length)].ruName;

      if (!arrBirds.includes(randomBird) && (randomBird!==selectBird.current)){
        arrBirds.push(randomBird)
      }
    }
    arrBirds.splice(randomPosition, 0, selectBird.current);
    console.log(arrBirds);
    return (
      arrBirds.map((item, index) => {
        return <li key={index} className={'answerItem noSelect'} onClick={(elem)=>handleClick(elem.target)}>{item}</li>
      })
    )
  };

  const acceptAnswer = (item) => {
    item.classList = 'answerItem select-true';
  };

  const rejectAnswer = (item) => {
    item.classList = 'answerItem select-false';
    props.setStep();
  };

  const handleClick = (item) => {
    item.innerHTML === selectBird.current ? acceptAnswer(item) : rejectAnswer(item);
  };

  return (
    <>
      <AnswerItems/>
    </>
  )
};

const randomCount = (count=6) => {
  return Math.floor(Math.random()*count);
};

const mapStateToProps = (state) => {
  return {
    classBirds: state.classBirds,
  }
};

const mapDispatchToProps = {setRandomBird, setStep};


export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem);