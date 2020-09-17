import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Articulo from "./Articulo"
export default class Articulos extends React.Component {
  constructor() {
    super();
  }


render() {
return (

<div className="container">
  <div className="row">
    <div className="col-4">

   <Articulo foto="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Captain_America%27s_shield.svg/2000px-Captain_America%27s_shield.svg.png" precio="1000" nombre="ESCUDO CAPITAN AMÉRICA" stock="2"/> 
    </div>
    <div className="col-4">
      <Articulo foto="https://image.spreadshirtmedia.com/image-server/v1/products/108885248/views/1,width=650,height=650,appearanceId=4,version=1547213188/do-tons-of-damage-with-the-trusty-triforce.jpg"
    precio="14" nombre=" Remera FUERZA TRINIDAD " 
    precioPromo="7,50" stock= "0"
    />
    </div>
    <div className="col">
   <Articulo foto= "https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320604_960_720.png"
   precio="45"
   nombre="Lámpara cool" stock=" 51"/>
    </div>
    
  </div>
</div>

)
}
};