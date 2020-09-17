import React, { Component } from 'react';
import { render } from 'react-dom';
import ListaArticulos from './Components/ListaArticulos';
import Vendedores from './Vendedores';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";

//import Footer from './Footer';



import './style.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
        <Router>
          <ListaArticulos/> 
          <Vendedores/>      
          </Router>
      </div>
    )}};