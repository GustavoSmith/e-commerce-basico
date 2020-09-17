import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export default class Articulo extends React.Component {
  constructor(props) {
    super(props);
  }


precio(){

  if(this.props.precioPromo==null){
    
  return (<p> $ {this.props.precio}</p>
  )
  }else{
    return(
    <p> Solo por hoy, compralo a ${this.props.precioPromo}</p>
    )
  }
}
stock(){
  if(this.props.stock>50){
    
    return (<p> Disponible</p>
    );
  }else if(this.props.stock>0){
    return(
    <p> Ojo, quedan solo {this.props.stock} unidades</p>
    );
  }
  else{
    return <p> Agotado :( </p>;
  }
}


render() {


return (
<div>

    {this.props.nombre} <br/>
     <img src={this.props.foto}/>
     <br/>
     {this.precio()}
    <br/>
    {this.stock()}

     
</div>
   
)
}
};
