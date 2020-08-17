import React, {useRef} from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import {setRandomBird, setStep, setWin, setScore, setSelect} from "../../Actions/Actions";
import {connect} from "react-redux";
import db from "../../DB/DB";
import './AnswerItem.css';

const AnswerItem = (props) => {
  const selectBirds = useRef(db.otherBirds);
  const selectBird = useRef('');
  let win = false;
  let scoreQuestion = 5;

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


  if (selectBirds.current.length > 0) {
    selectBird.current = selectBirds.current[Math.floor(Math.random()*selectBirds.current.length)].ruName;
    props.setRandomBird(selectBird.current);
  }

  const createArrBirds = () => {
    const randomPosition = randomCount();
    let arrBirds = [];
    while (arrBirds.length < 5) {
      const randomBird = selectBirds.current[Math.floor(Math.random()*selectBirds.current.length)].ruName;
      if (!arrBirds.includes(randomBird) && (randomBird!==selectBird.current)){
        arrBirds.push(randomBird)
      }
    }
    arrBirds.splice(randomPosition, 0, selectBird.current);
    return (arrBirds);
  };

  const acceptAnswer = (item, icon) => {
    win = true;
    icon.style.color = 'green';
    item.classList = 'answerItem select-true';
    props.setWin();
    props.setScore(scoreQuestion);
  };

  const rejectAnswer = (item, icon) => {
    icon.style.color = 'red';
    item.classList = 'answerItem select-false';
    props.setStep();
    scoreQuestion--;
  };

  const handleClick = (item) => {
    props.setSelect(item.innerText);
    if (!win) {
      item.innerText === selectBird.current ?
        acceptAnswer(item, item.children[0]) :
        rejectAnswer(item, item.children[0]);
    }
  };

  const AnswerItems = () => {
    const arrBirds = createArrBirds();
    return (
      arrBirds.map((item, index) => {
        return (
          <li key={index} className={'answerItem noSelect'} onClick={(elem)=>handleClick(elem.target)}>
            <TwitterIcon fontSize="small" style={{marginRight: '10px'}}/>
            {item}
          </li>
        )
      })
    )
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
    page: state.page
  }
};

const mapDispatchToProps = {setRandomBird, setStep, setWin, setScore, setSelect};


export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem);