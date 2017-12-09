import React from 'react'
import { CreateProjectViewCard } from './createprojectview_card.js';
import EditField from '../UnitView/UnitViewFields/editfield.js';

export const CreateProjectViewList = (props) => {
    return(
            <div>
            	{props.fields.map(field => <EditField projectId={props.projectId} unitId={props.unitId} label={field.label} type={field.type} selected={field.type} fieldId={field.id} key={field.id} {...field}/>)}
            </div>
        )
}



