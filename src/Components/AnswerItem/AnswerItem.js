import React, { useRef } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import {
  setRandomBird,
  setStep,
  setWin,
  setScore,
  setSelect,
} from "../../Actions/Actions";
import { connect } from "react-redux";
import audioWin from "./win.mp3";
import audioErr from "./error.mp3";
import db from "../../DB/DB";
import "./AnswerItem.css";

const AnswerItem = (props) => {
  const selectBirds = useRef(db.otherBirds);
  const selectBird = useRef("");
  let win = false;
  let scoreQuestion = 5;

  switch (props.classBirds) {
    case "predatorsBirds":
      selectBirds.current = db.predatorsBirds;
      break;

    case "forestBirds":
      selectBirds.current = db.forestBirds;
      break;

    case "songBirds":
      selectBirds.current = db.songBirds;
      break;

    case "oceanBirds":
      selectBirds.current = db.oceanBirds;
      break;

    case "otherBirds":
      selectBirds.current = db.otherBirds;
      break;

    case "warmUp":
      selectBirds.current = db.warmUp;
      break;

    default:
      break;
  }

  if (selectBirds.current.length > 0) {
    selectBird.current =
      selectBirds.current[
        Math.floor(Math.random() * selectBirds.current.length)
      ].ruName;
    props.setRandomBird(selectBird.current);
  }

  const createArrBirds = () => {
    const randomPosition = randomCount();
    let arrBirds = [];
    while (arrBirds.length < 5) {
      const randomBird =
        selectBirds.current[
          Math.floor(Math.random() * selectBirds.current.length)
        ].ruName;
      if (!arrBirds.includes(randomBird) && randomBird !== selectBird.current) {
        arrBirds.push(randomBird);
      }
    }
    arrBirds.splice(randomPosition, 0, selectBird.current);
    return arrBirds;
  };

  const acceptAnswer = (item, icon, audio) => {
    audio.src = audioWin;
    audio.play();
    win = true;
    icon.style.color = "#00bc8c";
    item.classList = "answerItem select-true";
    props.setWin();
    props.setScore(scoreQuestion);
  };

  const rejectAnswer = (item, icon, audio) => {
    audio.src = audioErr;
    audio.play();
    icon.style.color = "#d62c1a";
    item.classList = "answerItem select-false";
    props.setStep();
    scoreQuestion--;
  };

  const handleClick = (item) => {
    props.setSelect(item.innerText);
    if (!win) {
      item.innerText === selectBird.current
        ? acceptAnswer(item, item.children[0], item.children[1])
        : rejectAnswer(item, item.children[0], item.children[1]);
    }
  };

  const AnswerItems = () => {
    const arrBirds = createArrBirds();
    return arrBirds.map((item, index) => {
      return (
        <li
          key={index}
          className={"answerItem noSelect"}
          onClick={(elem) => handleClick(elem.target)}
        >
          <TwitterIcon className={"itemIcon"} fontSize="small" />
          <audio />
          {item}
        </li>
      );
    });
  };

  return (
    <>
      <AnswerItems />
    </>
  );
};

const randomCount = (count = 6) => {
  return Math.floor(Math.random() * count);
};

const mapStateToProps = (state) => {
  return {
    classBirds: state.classBirds,
    page: state.page,
  };
};

const mapDispatchToProps = {
  setRandomBird,
  setStep,
  setWin,
  setScore,
  setSelect,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem);
