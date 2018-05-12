import React, { Component } from 'react';
import EditField from '../UnitView/UnitViewFields/editfield.js';
import {uv_getfieldslist} from '../db/db_unitview.js';


//SECONDARY: Generates the list of NEW PROJECT CARDS
//PROPS: Receives the list of EDIT fields in the NEW PROJECT from CORE
class CreateProjectViewList extends Component{
    constructor(){
        super()
        //this function has been bound so it can be actioned in an event call
        this.reloadAfterDelete = this.reloadAfterDelete.bind(this)  
    }

	//ACTION: Get the updated unit to recalculate progress.
    //NOTE: This is a chain function, it is passed down to checkboxfield_group to be actioned
    //if a check field is toggled so that the progress of the unit is recalculated and displayed
    //uv_getfieldslist: get the list of fields for the unit
    //convert: get the updated percentage complete for the unit
    reloadAfterDelete(p_id, u_id){
        
        this.props.action(p_id, u_id)
    }
    render(){
    	return(
            <div>
            	{this.props.fields.map(field => <EditField action={this.reloadAfterDelete} projectId={this.props.projectId} unitId={this.props.unitId} label={field.label} type={field.type} selected={field.type} label={field.label} fieldId={field.id} key={field.id} {...field}/>)}
            </div>
        )
    }
}
export default CreateProjectViewList;


