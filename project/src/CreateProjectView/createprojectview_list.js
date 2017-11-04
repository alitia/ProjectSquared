import React from 'react'
import { CreateProjectViewCard } from './createprojectview_card.js';

export const CreateProjectViewList = (props) => {
    return(
            <div>
            	{props.units.map(unit => <CreateProjectViewCard projectId={props.projectId} key={unit.id} {...unit}/>)}
            </div>
        )
}



