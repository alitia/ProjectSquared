import React from 'react';
import {MainProjectViewCard} from './mainprojectview_card.js'

export const MainProjectViewList = (props) => {
	return(

		<div>
            {props.projects.map(project => <MainProjectViewCard key={project.id} {...project}/>)}                   
        </div>)
	}


