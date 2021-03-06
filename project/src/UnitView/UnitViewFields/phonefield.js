import React, { Component } from 'react';
import {uv_savefieldchange} from '../../db/db_unitview.js'

//SECONDARY: Draws the phone FIELD.
//These have a white card with a bold label and light text
//(Left) The label of the phone field in bold text (Not editable here)
//(Left) The text input in light text
//PROPS: Receives phone field id, label and data from LIST
class PhoneField extends Component {
    state = {
            id: '',
            type: 'phone',
            label: '',            
            data: '',
    }

    //ABOUT: Assigns the PROPS to the current STATE
    componentDidMount() {
        this.setState({id: this.props.phone_field.id})
        this.setState({label: this.props.phone_field.label})
        this.setState({data: this.props.phone_field.data})
    }

    //ABOUT: handles the event of the user typing in the phone field
    //gets the text from the selected phone field
    //NOTE: if enter is pressed, focus is lost on the field
    //field supports a maximum of 17 characters
    //field only supports numbers, + and ( )
    onKeyPress = (event) =>{
        const str = event.target.innerHTML
        if (event.charCode === 13){
            event.preventDefault()  
            const element = event.target
            element.blur()
        }
        else if(!(event.key >= 0) && !(event.key <= 9)){
            if(event.key === '+' || event.key==="(" || event.key===")"){

            }
            else{
                event.preventDefault()
            }            
        }
        else if(str.length > 17){
                event.preventDefault()
        }
    }

    //ACTION: calls updates to the db once focus is off the phone 
    //gets text in the phone field
    //gets project id, unit id, and field id from STATE
    //if text in phone field is empty, make it '...'
    //uv_savefieldchange: Save the changes to the phone field
    update = (e) => {

        const str = e.target.innerHTML
        const p_id = this.props.project_id
        const u_id = this.props.unit_id
        const f_id = this.state.id

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            this.setState({data: str})
        }
        
        this.setState({data: this.state.data})
        uv_savefieldchange(p_id, u_id, f_id, str)
    }

    //ACTION:
    //Render: Phone Field
    //Render: Bold label
    //Render: Divider
    //Render: Light text numeric input
    render() {
        return (
            <div className="PhoneFieldContainer">
                <div className="PhoneField" key={this.state.id}>
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
export default PhoneField;