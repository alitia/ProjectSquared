import React, { Component } from 'react';
import {uv_savefieldchange} from '../../db/db_unitview.js'

//SECONDARY: Draws the long FIELD.
//These have a white card that is longer than usual, with a bold label and light text
//(Left) The label of the long field in bold text (Not editable here)
//(Left) The text input in light text that can cover multiple lines
//PROPS: Receives long field id, label and data from LIST
class LongField extends Component {
    state = {
            id: '',
            type: 'long',
            label: '',            
            data: '',
    }

    //ABOUT: Assigns the PROPS to the current STATE
    componentDidMount() {
        this.setState({id: this.props.long_field.id})
        this.setState({label: this.props.long_field.label})
        this.setState({data: this.props.long_field.data})
    }

    //ABOUT: handles the event of the user typing in the long field
    //gets the text from the selected long field
    //NOTE: if enter is pressed, focus is lost on the field
    //field supports a maximum of 250 characters
    onKeyPress = (event) =>{
        const str = event.target.innerHTML
        if (event.charCode === 13){
            event.preventDefault()  
            const element = event.target
            element.blur()
        }
        else if(str.length > 250){
                event.preventDefault()
        }
    }

    //ACTION: calls updates to the db once focus is off the long 
    //gets text in the long field
    //gets project id, unit id, and field id from STATE
    //if text in long field is empty, make it '...'
    //uv_savefieldchange: Save the changes to the long field
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
    //Render: Long Field
    //Render: Bold label
    //Render: Light text input
    render() {
        return (
            <div className="LongFieldContainer">
                <div className="LongField" key={this.state.id}>
                    <div className="cardlong">
                        <h1 className="cardh1normallong">{this.state.label}</h1>
                        <h1 className="cardh1lightlongtext"
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
export default LongField;