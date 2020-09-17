import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class About extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
             
      <p>   SOMOS LOREM IPSUM, SIT DOLOR AMET   </p>
    );
  }
}
