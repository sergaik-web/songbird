import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {connect} from "react-redux";
import {setSelectClassBirds} from "../../Actions/Actions";
import './Navigation.css';


const Navigation = (props) => {
  const dataNavItems = [
    {label:'Разминка', active: true, classBirds: 'otherBirds'},
    {label:'Лесные птицы', active: true, classBirds: 'forestBirds'},
    {label:'Хищные птицы', active: true, classBirds: 'predatorsBirds'},
    {label:'Распостранённые птицы', active: true, classBirds: 'otherBirds'},
    {label:'Все птицы', active: true, classBirds: 'allBirds'},
    {label:'Морские птицы', active: false},
  ];

  const handleClick = (classBirds) => {
    props.setSelectClassBirds(classBirds);
  };

  const navItems = dataNavItems.map((item, index)=>{
        return (
          item.active ?
            <Button onClick={()=>handleClick(item.classBirds)} key={index} className={'nav-item'} style={{backgroundColor:'rgba(233, 233, 233, 1)'}} >{item.label}</Button>:
            <Button key={index} className={'nav-item'} style={{backgroundColor:'rgba(233, 183, 183, 1)'}} disabled>{item.label}</Button>)
      });

  return (
    <ButtonGroup variant="contained" color="default" className={'navigation'}>
      {navItems}
    </ButtonGroup>
  )
};

const mapDispatchToProps = { setSelectClassBirds };

export default connect('', mapDispatchToProps)(Navigation);