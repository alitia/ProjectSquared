import React, { Component } from 'react';
import CheckField from './checkfield.js';
import {uv_convertchecklist} from '../../db/db_unitview.js';

//SECONDARY: Draws the list of CHECKBOXs.
//These have a white card that is longer than usual with a bold label and light text labels
//for each of the checkfields.
//ACTION: The unit titles up the total number of checks in the unit, and progress is calculated by that
//You can have multiple checkgroups per unit
//(Left) The label of the checkbox group field in bold text (Not editable here)
//(Left) The label in light text for each checkfield
//(Right) The checkfield icon which can be true or false
//PROPS: Receives checkfielgroup id, label and data from LIST
class CheckBoxGroupField extends Component {
    state = {
            id: '',
            type: 'checkbox_group',
            label: '',            
            data: [],
    }

    //ABOUT: Assigns the PROPS to the current STATE 
    //get the current checkfields list from PROPS 
    componentDidMount() {
        this.setState({id: this.props.checkboxgroup_field.id})
        this.setState({label: this.props.checkboxgroup_field.label})
        this.convert(this.props.checkboxgroup_field.data)
    }  

    //ACTION:
    //converts the checkfields list from PROPS into an array
    //puv_convertunitslist: converts the checkfields list into an array of checkfields
    convert(result){

        var check_list = []
        check_list = uv_convertchecklist(result)
        
        if(typeof check_list === 'undefined'){
            //console.log("SERIOUS ERROR: A checkfield group can not have 0 check fields")               
        }
        else{
            this.setState({data: check_list})
        }  
    }

    //ACTION:
    //Render: CheckBoxGroup Field
    //Render: Bold label
    //Render: Light text label for each check field, and it's check icon
    render() {
        return (
            <div className="CheckBoxGroupFieldContainer">
                <div className="CheckBoxGroupField" key={this.state.id}>
                    <div className="cardCheckBox">
                        <h1 className="cardh1normal">{this.state.label}</h1>
                            {this.state.data.map(check => <CheckField key={check.id} {...check} projectId = {this.props.project_id} unitId = {this.props.unit_id} action={this.props.action} fieldId={this.props.checkboxgroup_field.id}/>)}
                    </div>
                </div>
            </div>   
        );
    }
}
export default CheckBoxGroupField;