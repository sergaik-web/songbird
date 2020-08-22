import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { setPage, setEndGame } from "../../Actions/Actions";
import "./NextLevelButton.css";

const NextLevelButton = (props) => {
  const handleClick = () => {
    props.page === 6 ? props.setEndGame() : props.setPage();
  };

  return (
    <Button
      id={"next-level-button"}
      variant="contained"
      onClick={handleClick}
      disabled={!props.win}
      style={
        props.win
          ? { color: "rgba(34,34,34, 1)", backgroundColor: "#00efb2" }
          : { color: "white", backgroundColor: "#303030" }
      }
    >
      Next Level
    </Button>
  );
};

const mapDispatchToProps = { setPage, setEndGame };

const mapStateToProps = (state) => {
  return {
    win: state.win,
    page: state.page,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextLevelButton);
