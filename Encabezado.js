import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Encabezado extends React.Component {
  constructor(props) {
    super(props);
  }


render() {
return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"> {this.props.titulo}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Catálogo</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ver más
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/FAQ" className="dropdown-item"> FAQ </Link>
          <div className="dropdown-divider"></div>
          <Link to="/About" className="dropdown-item">Quiénes somos</Link>
        </div>
      </li>
    
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>


)
}
};



