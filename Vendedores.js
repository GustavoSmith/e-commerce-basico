import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export default class Vendedores extends React.Component {
  constructor() {
    super();
  }


render() {
return (

<div className="card" style={
  {marginRight: '2rem'}}>
  <img src="https://i.ytimg.com/vi/u0yblUl90wk/maxresdefault.jpg" className="card-img-top"/>
  <div className="card-body">
    <p className="card-text">Nicolás Fischman <br/> Un creador de contenido</p>
  </div>
</div>



)
}
};