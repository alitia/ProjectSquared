import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './NavBar/navbar.js'
import MainProjectView from './MainProjectView/mainprojectview.js';
import ProjectUnitView from './ProjectUnitView/projectunitview.js';
import UnitView from './UnitView/unitview.js';
import { Router, Route, IndexRoute } from 'react-router'
import {HashRouter} from 'react-router-dom'


ReactDOM.render((
		<HashRouter>
		<div>
			<NavBar />
            <Route exact path="/" component={MainProjectView}/>
            <Route path="project/101" component={UnitView}/>
            <Route path="/unit/:id" component={UnitView}/>
            <Route path="/unitview/:id" component={UnitView}/>
        </div>
        </HashRouter>), document.getElementById('root'));
registerServiceWorker();
