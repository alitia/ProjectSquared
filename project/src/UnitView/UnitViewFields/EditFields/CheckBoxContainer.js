import React, { Component } from 'react';
import {pcv_savefieldtypechange, pcv_savecheckfieldlabelchange} from '../../../db/db_createprojectview.js'

//SECONDARY: Draws the checkbox label and checkbox box FIELD.
//This is a light label and a checkbox next to it
//(Left) The label of the check field in light text (editable)
//(Right) The checkbox
//PROPS: Receives email field id, label and data from LIST
class CheckBoxContainer extends Component {
    state = {
            id: '',
            type: 'checkbox_container',
            label: '',            
            data: '',
    }

    //ABOUT: Assigns the PROPS to the current STATE
    componentDidMount() {
    //     this.setState({id: this.props.email_field.id})
    //     this.setState({label: this.props.email_field.label})
    //     this.setState({data: this.props.email_field.data})
    } 

    //ABOUT: handles the event of the user typing in the checkbox container label field
    //gets the text from the selected checkbox container field
    //NOTE: if enter is pressed, focus is lost on the field
    //field supports a maximum of 60 characters   
    onKeyPress = (event) =>{
        const str = event.target.innerHTML
        if (event.charCode === 13){
            event.preventDefault()  
            const element = event.target
            element.blur()
        }
        else if(str.length > 60){
                event.preventDefault()
        }
    }

    //ACTION: calls updates to the db once focus is off the email 
    //gets text in the email field
    //gets project id, unit id, and field id from STATE
    //if text in email field is empty, make it '...'
    //pcv_savecheckfieldlabelchange: Save the changes to the email field
    update = (event) => {

        const p_id = this.props.project_id
        const u_id = this.props.unit_id
        const f_id = this.state.id
        const str = event.target.innerHTML

        if(str === ""){
            event.target.innerHTML = "..."
        }
        else{
            this.setState({data: str})
        }
        
        this.setState({data: this.state.data})
        //pcv_savecheckfieldlabelchange(p_id, u_id, f_id, b_id, str)
    }

    //ACTION:
    //Render: CheckBox Container Field
    //Render: Light label
    //Render: Checkbox
    render(){
        return (
            <div className="CheckBoxContainer">
                <div className="checkFieldContainer" key={this.state.id}>
                    <h1 className="checkField_EditText"
                        contentEditable = {true}
                        onBlur={this.update}
                        onKeyPress={this.onKeyPress}
                        >{this.state.data}</h1>
                        <div className="checkField_checked"></div>
                </div> 
            </div>   
        );
    } 
}
export default CheckBoxContainer;

