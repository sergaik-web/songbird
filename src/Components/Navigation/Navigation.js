import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { connect } from "react-redux";
import { setSelectClassBirds } from "../../Actions/Actions";
import "./Navigation.css";

const Navigation = (props) => {
  const dataNavItems = [
    { label: "Разминка", classBirds: "otherBirds" },
    { label: "Лесные птицы", classBirds: "forestBirds" },
    { label: "Хищные птицы", classBirds: "predatorsBirds" },
    { label: "Певчие птицы", classBirds: "songBirds" },
    { label: "Морские птицы", classBirds: "oceanBirds" },
    { label: "Распостранённые птицы", classBirds: "warmUp" },
  ];

  const handleClick = (classBirds) => {
    props.setSelectClassBirds(classBirds);
  };

  const navItems = dataNavItems.map((item, index) => {
    return (
      <Button
        onClick={() => handleClick(item.classBirds)}
        key={index}
        className={"nav-item"}
        style={
          props.classBirds === item.classBirds
            ? { backgroundColor: "#00bc8c", color: "white", border: "none" }
            : { backgroundColor: "#008966", color: "white", border: "none" }
        }
        active
      >
        {item.label}
      </Button>
    );
  });

  return (
    <ButtonGroup variant="contained" color="default" className={"navigation"}>
      {navItems}
    </ButtonGroup>
  );
};

const mapStateToProps = (state) => {
  return {
    classBirds: state.classBirds,
  };
};

const mapDispatchToProps = { setSelectClassBirds };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
