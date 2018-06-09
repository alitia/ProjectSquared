import React, { Component } from 'react';
import {uv_getfieldslist, uv_convertfieldslist, uv_getunittitle} from '../db/db_unitview.js';
import UnitViewList from './unitview_list.js';
import UnitViewTitle from './UnitViewFields/unitviewtitle.js';
import BackButton from '../Other/backbutton.js';

//CORE: Shows the LIST of fields in the UNIT
class UnitView extends Component {
    constructor(){
        super()
        //this is bound so it can be called in an event
        this.reloadComponent = this.reloadComponent.bind(this)  
    }
    state = {
            unit_fields: [],
            unit_progress: '',
            project_id: '',
            unit_id: '',
            title: ''
    }

    //ACTION: gets the project id from PROPS
    //gets the unit id from PROPS
    //uv_getfieldlist: gets the list of fields in the unit
    //convert: converts the field list into an array
    componentDidMount() {            
        var project_val = this.props.match.params.projectId 
        var unit_val = this.props.match.params.unitId
            
        uv_getfieldslist(project_val, unit_val)
        .then(result => this.convert(result.val())) 

        uv_getunittitle(project_val, unit_val)
        .then(result => this.setTitle(result.val())) 
    }

    //ACTION:
    setTitle(result){
        this.setState({title: result})
    }
    
    //ACTION: converts the list of fields into an array for the LIST
    //uv_convertfieldslist: converts the object into an array of fields
    convert(result){
        
        var fields_list = ''
        fields_list = uv_convertfieldslist(result)
        this.setState({unit_progress: result.percentageComplete}) 
        this.setState({unit_fields: fields_list})      
    }

    //ACTION: Controls the update of the progress bar state
    //NOTE: This function is passed down to the via UnitViewList. 
    //When the check is clicked, the effect is actioned here via the chained method.
    reloadComponent(progress){
       
        this.setState({unit_progress: progress})
    }
    

    //ACTION:
    //Render: Back button (Left Top)
    //Render: Unit Fields List (Middle Top)
    //PROPS: 
    // field array
    // progress reload function
    // project id
    // unit id
    // progress count
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList">
                <UnitViewTitle title={this.state.title}/>
                    <UnitViewList unit_fields={this.state.unit_fields} action={this.reloadComponent} project_id={this.props.match.params.projectId} unit_id={this.props.match.params.unitId} unit_progress={this.state.unit_progress}/>
                </div>                   
            </div>     
        );
    }
}

export default UnitView;