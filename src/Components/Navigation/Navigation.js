import React from "react";

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
            <li key={index} className={'nav-item'}>{item.label}</li>:
            <li key={index} className={'nav-item deactive'}>{item.label}</li>)
      });

  console.log(navItems);


  return (
    <ul className={'Navigation'}>
      {navItems}
    </ul>
  )
};

export default Navigation;