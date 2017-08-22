import React, { Component } from 'react'
import NavBar from './NavBar/navbar.js'
import MainProjectView from './MainProjectView/mainprojectview.js';
import ProjectUnitView from './ProjectUnitView/projectunitview.js';
import UnitView from './UnitView/unitview.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
          <NavBar />
        );
    }
}
export default App;