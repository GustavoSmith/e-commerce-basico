import React, { Component } from 'react';
import { render } from 'react-dom';
import Encabezado from './Encabezado';
import Articulos from './Articulos';
import Vendedores from './Vendedores';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import FAQ from "./FAQ";
import EditArticulo from "./EditArticulo";
import reducers from "./Reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import './style.css';

const store = createStore(reducers);


class Principal extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
        <Provider store={store}>
        <Router>
          <Encabezado titulo="Gustavo Smith"/>
          
        
          <Route path="/" exact component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/FAQ" component={FAQ}/>
          <Route path="/EditArticulo" component={EditArticulo}/>
        </Router>
        </Provider>
      </div>
    );
  }
}

render(<Principal />, document.getElementById('root'));