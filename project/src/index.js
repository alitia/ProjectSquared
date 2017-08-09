import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './NavBar/navbar.js'
import MainProjectView from './MainProjectView/mainprojectview.js';
import ProjectUnitView from './ProjectUnitView/projectunitview.js';

ReactDOM.render(<div>
	<NavBar />
	<ProjectUnitView />
	</div>, document.getElementById('root'));
registerServiceWorker();
