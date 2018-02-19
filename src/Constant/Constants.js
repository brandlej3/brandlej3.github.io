import React from 'react';
import './Constants.css';
import { Jumbotron, Image } from 'react-bootstrap';

export const Header = () => {
  return (
    <Jumbotron className="constants-header">
      <p className="constants-header-text">brandon jones</p>
    </Jumbotron>
  )
}

export const Footer = () => {
  return (
    <div className="constants-footer">
      <a href="https://www.linkedin.com/in/brandonseanjones/" rel="noopener noreferrer" target="_blank"><Image responsive alt="Linked In" src={require("./../assets/linkedin.svg")} height="35" width="35"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="mailto:orthofid013@gmail.com" rel="noopener noreferrer" target="_blank"><Image responsive alt="Email" src={require("./../assets/email.svg")} height="35" width="35"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://github.com/brandlej3" rel="noopener noreferrer" target="_blank"><Image responsive alt="Github" src={require("./../assets/github.svg")} height="35" width="35"/></a>
    </div>
  )
}
