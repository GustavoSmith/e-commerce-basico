import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class EditArticulo extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (

      <div>
             


     <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">Nombre</span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <div className="input-group-append">
  </div>
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">$</span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <div className="input-group-append">
    <span className="input-group-text">.00</span>
  </div>
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">Cantidad</span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <div className="input-group-append">
  </div>
</div>
<div class="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">Descripción</span>
  </div>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>


<button type="button" className="btn btn-success">Guardar Cambios</button>


</div>
    );
  }
}