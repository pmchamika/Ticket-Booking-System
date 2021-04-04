import React, { Component } from 'react';
import './App.css';
import { Button,ButtonToolbar } from 'react-bootstrap';
import RouterRoutes from "./RouterRoutes";
import Footer from "./JSX/Footer"
import { BrowserRouter } from 'react-router-dom';
import Navbarjsx from "./JSX/Navbarjsx";


class App extends Component {
  render() {
    return (
      <div className="App" >

        <Navbarjsx/>
        <RouterRoutes />

        <Footer/>

      </div>
    );
  }
}

export default App;
