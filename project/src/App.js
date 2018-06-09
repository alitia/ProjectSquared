import React, { Component } from 'react'
import NavBar from './NavBar/navbar.js'
import MainProjectView from './MainProjectView/mainprojectview.js';
import ProjectUnitView from './ProjectUnitView/projectunitview.js';
import CreateProjectView from './CreateProjectView/createprojectview.js';
import UnitView from './UnitView/unitview.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
            <NavBar />
            
        	<Router>  
                <Switch>      		
                <Route path="/" exact component={MainProjectView} />
                <Route exact path="/project/:projectId" component={ProjectUnitView} />
                <Route exact path="/create_project/:projectId" component={CreateProjectView} />
                <Route path="/project/:projectId/unit/:unitId" component={UnitView} />
                </Switch>
        	</Router>
            </div>
        );
    }
}
export default App;