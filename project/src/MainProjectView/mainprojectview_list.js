import React from 'react';
import {MainProjectViewCard} from './mainprojectview_card.js'
import PropTypes from 'prop-types'

export const MainProjectViewList = (props) => (

		<div>
            {props.projects.map(project => <MainProjectViewCard key={project.id} {...project}/>)}                   
        </div>
	)


