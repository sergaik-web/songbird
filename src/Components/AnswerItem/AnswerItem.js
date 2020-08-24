import React, {useEffect} from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import {
  setRandomBird,
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
  const selectBirds = db[props.classBirds];
  const selectBird = selectBirds[Math.floor(Math.random() * selectBirds.length)].ruName;
  let win = false;
  let scoreQuestion = 5;

  useEffect(()=>{
    props.setRandomBird(selectBird);
    console.log(selectBird);
  },[props.classBirds]);

  const createArrBirds = () => {
    const randomPosition = randomCount();
    let arrBirds = [];
    while (arrBirds.length < 5) {
      const randomBird =
        selectBirds[
          Math.floor(Math.random() * selectBirds.length)
        ].ruName;
      if (!arrBirds.includes(randomBird) && randomBird !== selectBird) {
        arrBirds.push(randomBird);
      }
    }
    arrBirds.splice(randomPosition, 0, selectBird);
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
    scoreQuestion--;
  };

  const handleClick = (item) => {
    props.setSelect(item.innerText);
    if (!win) {
      item.innerText === selectBird
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
  };
};

const mapDispatchToProps = {
  setRandomBird,
  setWin,
  setScore,
  setSelect,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem);
