import React, { Component } from 'react';
import {uv_savefieldchange} from '../../db/db_unitview.js'

//SECONDARY: Draws the email FIELD.
//These have a white card with a bold label and light text
//(Left) The label of the email field in bold text (Not editable here)
//(Left) The text input in light text
//PROPS: Receives email field id, label and data from LIST
class EmailField extends Component {
    state = {
            id: '',
            type: 'email',
            label: '',            
            data: '',
    }

    //ABOUT: Assigns the PROPS to the current STATE
    componentDidMount() {
        this.setState({id: this.props.email_field.id})
        this.setState({label: this.props.email_field.label})
        this.setState({data: this.props.email_field.data})
    } 

    //ABOUT: handles the event of the user typing in the email field
    //gets the text from the selected email field
    //NOTE: if enter is pressed, focus is lost on the field
    //field supports a maximum of 36 characters   
    onKeyPress = (event) =>{
        const str = event.target.innerHTML
        if (event.charCode === 13){
            event.preventDefault()  
            const element = event.target
            element.blur()
        }
        else if(str.length > 30){
                event.preventDefault()
        }
    }

    //ACTION: calls updates to the db once focus is off the email 
    //gets text in the email field
    //gets project id, unit id, and field id from STATE
    //if text in email field is empty, make it '...'
    //uv_savefieldchange: Save the changes to the email field
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
        uv_savefieldchange(p_id, u_id, f_id, str)
    }

    //ACTION:
    //Render: Email Field
    //Render: Bold label
    //Render: Divider
    //Render: Light text input
    render(){
        return (
            <div className="EmailFieldContainer">
                <div className="EmailField" key={this.state.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{this.state.label}</h1>
                        <div className="slash"></div>
                        <h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.update}
                            onKeyPress={this.onKeyPress}
                            >{this.state.data}</h1>
                    </div>
                </div> 
            </div>   
        );
    } 
}
export default EmailField;

