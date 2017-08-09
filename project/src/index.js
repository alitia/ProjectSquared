import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './NavBar/navbar.js'
import MainProjectView from './MainProjectView/mainprojectview.js';
import ProjectUnitView from './ProjectUnitView/projectunitview.js';
import UnitView from './UnitView/unitview.js';
import LabelField from './UnitView/UnitViewFields/labelfield.js';
import PhoneField from './UnitView/UnitViewFields/phonefield.js';
import EmailField from './UnitView/UnitViewFields/emailfield.js';
import ShortField from './UnitView/UnitViewFields/shortfield.js';
import LongField from './UnitView/UnitViewFields/longfield.js';
import CheckBoxGroupField from './UnitView/UnitViewFields/checkboxgroupfield.js';

ReactDOM.render(<div>
	<NavBar />
	<ProjectUnitView />
	</div>, document.getElementById('root'));
registerServiceWorker();
