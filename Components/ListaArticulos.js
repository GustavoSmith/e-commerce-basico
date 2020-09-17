import React, { Component } from 'react';
import { connect } from 'react-redux';
import reducers from './reducers/index';
import Articulo from '../Articulo';
import '../style.css';

 class ListaArticulos extends Component {
  constructor(props) {
    super(props);
  }

 ListaArticulos(){
     return this.props.articulos.map( (articulo)=>
      
    <div className="col-4">
     <Articulo foto={articulo.foto} nombre={articulo.nombre} precio={articulo.precio} 
     precioPromo={articulo.precioPromo} stock={articulo.stock} />
      
      
      </div>);
 }


 
  render() {
    return (
      <div>  
      <div className="container">
     <div className="row">
          {this.ListaArticulos()}
          </div>  
          </div>  
      </div>  
    )}};

function mapStateToProps(state){
  return {
     articulos: state.articulos
  };
}

export default connect (mapStateToProps) (ListaArticulos);