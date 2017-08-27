import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './NavBar/navbar.js'
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'


ReactDOM.render((
		<App />), document.getElementById('root'));
registerServiceWorker();
