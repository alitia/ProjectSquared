import React, { Component } from 'react';
import {uv_savecheckchange, uv_calcprogress} from '../../db/db_unitview.js';

//TERTIARY: Displays the CHECKBOX.
//These have a light text label on the left, and a checkfield on the right
//ACTION: When the checkbox is clicked, it should update to be checked/unchecked.
//The progress bar should also update correctly depending on which fields are clicked.
//(Left) The label of the checkbox in light text (Not editable here)
//(Right) The checkfield icon which can be true or false
//PROPS: Receives checkbox id, label and bool from CHECKBOXGROUP FIELD
class CheckField extends Component {
    state = {
            id: '',
            type: 'checkbox_node',
            bool: '',            
            data: ''
        } 

    //ABOUT: Assigns the PROPS to the current STATE
    componentDidMount() {
        this.setState({id: this.props.id})
        this.setState({data: this.props.data})
        this.setState({bool: this.props.bool})
    } 

    //ACTION: Handles the image update as the checkbox is checked
    //functions on both a click on the label, and the box itself   
    check = (event) => {

        //on click of a label
        if(event.target.className === "cardh1lightcheckbox"){
            if(event.target.nextSibling.className ==="checkField_uncheck"){
                event.target.nextSibling.className = "checkField_checked"
            }
            else{
                event.target.nextSibling.className = "checkField_uncheck"
            }
        }
        //on click of a box
        else if(event.target.className ==="checkBoxSet"){
            if(event.target.childNodes[1].className ==="checkField_uncheck"){
                event.target.childNodes[1].className = "checkField_checked"
            }
            else{
                event.target.childNodes[1].className = "checkField_uncheck"
            }
        }        
    }

    //ACTION: calls db to toggle whether the box is checked or not
    //Gets the project id, unit id and field id from PROPS
    //Gets the box id from the state
    //Function updates the class of the selected target
    //uv_savecheckchange: Saves the bool change to the db
    //uv_calcprogress: Recalculates the progress of the overall unit

    update = (event) => {

        var str = event.target.innerHTML
        const p_id = this.props.projectId
        const u_id = this.props.unitId
        const f_id = this.props.fieldId
        const b_id = this.state.id

        if(event.target.className ==="checkField_uncheck"){
            event.target.className = "checkField_checked"
            str = "true"
        }
        else{
            event.target.className = "checkField_uncheck"
            str = "false"
        }
        uv_savecheckchange(p_id, u_id, f_id, b_id, str)
        uv_calcprogress(p_id, u_id)
    }

    //ACTION: render a different image depending on if the checkbox is true or not
    //Render: CheckBox Field
    //Render: Light text label
    render() {
        if(this.state.bool === "true"){
            return (
            <div className="checkBoxSet" key={this.state.id} onClick={this.check}>
                <h1 className="cardh1lightcheckbox" >{this.state.data}</h1>
                <div className="checkField_checked" onClick={this.update}>{this.state.bool}</div>
            </div> 
            );
        }
        else{
            return (
            <div className="checkBoxSet" key={this.state.id} onClick={this.check}>
                <h1 className="cardh1lightcheckbox" >{this.state.data}</h1>
                <div className="checkField_uncheck" onClick={this.update}>{this.state.bool}</div>
            </div> 
            );
        }
    }
}
export default CheckField;