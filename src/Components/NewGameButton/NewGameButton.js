import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { setNewGame } from "../../Actions/Actions";
import "./NewGameButton.css";

const NewGameButton = (props) => {
  const handleClick = () => {
    props.setNewGame();
  };

  return (
    <Button id={"new-game-button"} onClick={handleClick}>
      Попробовать ещё раз!
    </Button>
  );
};

const mapDispatchToProps = { setNewGame };

export default connect("", mapDispatchToProps)(NewGameButton);
