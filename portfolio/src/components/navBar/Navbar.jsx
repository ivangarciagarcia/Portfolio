import "./navbar.css";
import React from 'react';

export const Navbar = (props) => {

    const {name, tab1, tab2, tab3} = props;

  return (
    <nav className="navbar">
      <div className="left">{name}</div>
      <div className="center"></div>
      <div className="right">
        <span className="link">{tab1}</span>
        <span className="link">{tab2}</span>
        <span className="link">{tab3}</span>
      </div>
    </nav>
  );
};

