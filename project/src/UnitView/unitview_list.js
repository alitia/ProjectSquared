import React, { Component } from 'react';
import EmailField from './UnitViewFields/emailfield.js'
import CheckBoxGroupField from './UnitViewFields/checkboxgroupfield.js'
import LabelField from './UnitViewFields/labelfield.js'
import ShortField from './UnitViewFields/shortfield.js'
import LongField from './UnitViewFields/longfield.js'
import PhoneField from './UnitViewFields/phonefield.js'
import UnitViewTitle from './UnitViewFields/unitviewtitle.js'
import UnitViewProgress from './UnitViewFields/unitviewprogress.js';
import {uv_getfieldslist, uv_convertfieldslist} from '../db/db_unitview.js';

//SECONDARY: Draws the unit FIELDS.
//These have a white card but each has a different appearance
//PROPS: Receives a field list from CORE
class UnitViewList extends Component {
    constructor(){
        super()
        //this function has been bound so it can be actioned in an event call
        this.reloadComponent = this.reloadComponent.bind(this)  
    }
    state = {                
        unit_fields: [],
        unit_title: "",
        project_id: '',
        unit_id: '',
        progress: ''
    }

    //ACTION: receives project id from PROPS
    //receives unit id from PROPS
    //if the state for fields has not been set, set it???
    componentDidMount(){
                
        var x = this.props.project_id
        var y = this.props.unit_id
        this.setState({project_id: x})
        this.setState({unit_id: y})
        this.setState({progress: this.props.unit_progress})

        if(!this.props.unit_fields.length === 0){
            this.setState({unit_fields: this.props.unit_fields})
        }
    }

    //ACTION: Get the updated unit to recalculate progress.
    //NOTE: This is a chain function, it is passed down to checkboxfield_group to be actioned
    //if a check field is toggled so that the progress of the unit is recalculated and displayed
    //uv_getfieldslist: get the list of fields for the unit
    //convert: get the updated percentage complete for the unit
    reloadComponent(progress){
        
        var project_val = this.state.project_id
        var unit_val = this.state.unit_id

        uv_getfieldslist(project_val, unit_val)
        .then(result => this.convert(result.val()))  
    }

    //ACTION: Get the updated percentage complete for the unit
    convert(result){

        this.setState({progress: result.percentageComplete})     
    }

    //ACTION: return the appropriate component related to the field type data
    //NOTE: reloadComponent is passed as a chain function for 'checkboxes'
    assign(field){

        var type = field.type
        var p_id = this.props.project_id
        var u_id = this.props.unit_id
            
        if(type === 'title'){
            // return <UnitViewTitle 
            // title_field={field} 
            // key={field.id} 
            // project_id={p_id} 
            // unit_id={u_id}/>
        }
        else if(type === 'label'){
            return <LabelField 
            labels_field={field} 
            key={field.id} 
            project_id={p_id} 
            unit_id={u_id}/>
        }
        else if(type === 'email'){
            return <EmailField 
            email_field={field} 
            key={field.id} 
            project_id={p_id} 
            unit_id={u_id}/>
        }
        else if(type === 'phone'){
            return <PhoneField 
            phone_field={field} 
            key={field.id} 
            project_id={p_id} 
            unit_id={u_id}/>
        }
        else if(type === 'short'){
            return <ShortField 
            short_field={field} 
            key={field.id} 
            project_id={p_id} 
            unit_id={u_id}/>
        }
        else if(type === 'long'){
            return <LongField 
            long_field={field} 
            key={field.id} 
            project_id={p_id} 
            unit_id={u_id}/>
        }
        else if(type === 'checkboxes'){
            return <CheckBoxGroupField 
            checkboxgroup_field={field} 
            action={this.reloadComponent()} 
            key={field.id} 
            project_id={p_id} 
            unit_id={u_id}/>
        }
        else{
            console.log('Unable to return an appropriate component for the field type')
        }
    }
    
    //ACTION:
    //Render: Unit Fields List (Middle Top)
    //Render: Unit Progress (Middle Bottom)
    render(){
        return(
            <div>
                {this.props.unit_fields.map(this.assign.bind(this))}                
                <UnitViewProgress data={this.state.progress}/>
            </div>
        )
    }
}
export default UnitViewList;