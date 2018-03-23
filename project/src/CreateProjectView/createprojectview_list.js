import React from 'react'
import EditField from '../UnitView/UnitViewFields/editfield.js';

//SECONDARY: Generates the list of NEW PROJECT CARDS
//PROPS: Receives the list of EDIT fields in the NEW PROJECT from CORE
export const CreateProjectViewList = (props) => {
    return(
            <div>
            	{props.fields.map(field => <EditField projectId={props.projectId} unitId={props.unitId} label={field.label} type={field.type} selected={field.type} label={field.labek} fieldId={field.id} key={field.id} {...field}/>)}
            </div>
        )
}



