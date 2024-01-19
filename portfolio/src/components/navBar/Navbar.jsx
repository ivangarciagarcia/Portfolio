import { useNavigate } from "react-router";
import "./navbar.css";
import React from 'react';

export const Navbar = (props) => {
  let navigate = useNavigate();

  const { name, tab1, tab2, tab3 } = props;

  const navigateToPortfolio = () => {
    navigate('/Portfolio');
  };

  const navigateToProjects = () => {
    navigate('/projects');
  };

  const navigateToBlog = () => {
    navigate('/blog');
  };

  return (
    <div className="content-wrapper">
      <nav className="navbar">
        <div className="left">{name}</div>
        <div className="center"></div>
        <div className="right">
          <span className="link" onClick={navigateToPortfolio}>{tab1}</span>
          <span className="link" onClick={navigateToProjects}>{tab2}</span>
          <span className="link" onClick={navigateToBlog}>{tab3}</span>
        </div>
      </nav>
    </div>
  );
};
