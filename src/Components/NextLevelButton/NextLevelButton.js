import React from "react";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {setPage} from "../../Actions/Actions";
import './NextLevelButton.css';



const NextLevelButton = (props) => {
  const handleClick = () => {
    props.setPage();
  };

  return (
    <Button id={'next-level-button'} variant="contained" onClick={handleClick} disabled={!props.win}>
      Next Level
    </Button>
  )
};

const mapDispatchToProps = {setPage};

const mapStateToProps = (state) => {
  return (
    {
      win: state.win
    }
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(NextLevelButton);