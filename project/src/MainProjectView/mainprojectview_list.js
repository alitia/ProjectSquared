import React from 'react';
import {MainProjectViewCard} from './mainprojectview_card.js'

//SECONDARY: Generates the list of CARDS.
//PROPS: Receives the list of projects from CORE

export const MainProjectViewList = (props) => {
	return(
		<div>
            {props.projects.map(project => <MainProjectViewCard key={project.id} {...project}/>)}                   
        </div>)
	}


