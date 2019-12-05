import React from 'react'
import ProjectUnitViewCard from './projectunitview_card.js'

//SECONDARY: Generates the list of UNIT CARDS
//PROPS: Receives the list of units from CORE
export const ProjectUnitViewList = (props) => {
    return(
            <div>
                {props.units.map(unit => <ProjectUnitViewCard 
                                            projectId={props.projectId} 
                                            action={props.action} 
                                            key={unit.id} 
                                            {...unit}/>)}
            </div>
        )
}



