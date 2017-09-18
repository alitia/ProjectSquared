import React from 'react'
import {ProjectUnitViewCard} from './projectunitview_card.js'
import PropTypes from 'prop-types'

export const ProjectUnitViewList = (props) => {
    return(
            <div>
            	{props.units.map(unit => <ProjectUnitViewCard projectId={props.projectId} key={unit.id} {...unit}/>)}
            </div>
        )
}



