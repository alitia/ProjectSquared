import React, { Component } from 'react';
import {pcv_addcheckbox, pcv_getnextboxid} from '../../../db/db_createprojectview.js'

//SECONDARY: Draws the checkbox label and checkbox box FIELD.
//This is a light label and a checkbox next to it
//(Left) The label of the check field in light text (editable)
//(Right) The checkbox
//PROPS: Receives email field id, label and data from LIST
class CheckBoxAddButton extends Component {
    state = {
            id: '',
            type: 'checkbox_addbutton',
            label: '',            
            data: '',
    }

    //ACTION: Looks up the other boxes inorder to find the last known id
    getLastBox = () => {

        var p_id = this.props.project_id
        var u_id = this.props.unit_id
        var f_id = this.props.field_id

        pcv_getnextboxid(p_id, u_id, f_id)
        .then(result => this.findBoxId(result))
    }

    //ACTION: Gets the last known ID and creates a new checkfield after increasing to the next box number
    //ACTION: Triggers call back to reload the fields
    findBoxId = (res) => {
        var p_id = this.props.project_id
        var u_id = this.props.unit_id
        var f_id = this.props.field_id 
        var list = []

        try{list = Object.keys(res.val())}
        catch(err){
            list[0] = f_id + "" + 1
        }
        
        var b_id = list[0]
        b_id++
        pcv_addcheckbox(p_id, u_id, f_id, b_id)
        this.props.action()
    }
    //ACTION:
    //Render: CheckBox Container Field
    //Render: Light label
    //Render: Checkbox
    render(){
        return (
            <div className="checkBoxAdd_Button">                
                <h1 className="checkBoxAdd_ButtonText" onClick={this.getLastBox}>Add Checkfield</h1>
            </div>   
        );
    } 
}
export default CheckBoxAddButton;
