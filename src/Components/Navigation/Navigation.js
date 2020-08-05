import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import './Navigation.css';

const Navigation = () => {
  const dataNavItems = [
    {label:'Разминка', active: true},
    {label:'Лесные птицы', active: true},
    {label:'Хищные птицы', active: true},
    {label:'Распостранённые птицы', active: true},
    {label:'Все птицы', active: true},
    {label:'Морские птицы', active: false},
  ];

  const navItems = dataNavItems.map((item, index)=>{
        return (
          item.active ?
            <Button key={index} className={'nav-item'} style={{backgroundColor:'rgba(233, 233, 233, 1)'}} >{item.label}</Button>:
            <Button key={index} className={'nav-item'} style={{backgroundColor:'rgba(233, 183, 183, 1)'}} disabled>{item.label}</Button>)
      });

  console.log(navItems);


  return (
    <ButtonGroup variant="contained" color="default" className={'navigation'}>
      {navItems}
    </ButtonGroup>
  )
};

export default Navigation;