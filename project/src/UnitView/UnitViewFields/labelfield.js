import React, { Component } from 'react'
import {uv_savefieldchange} from '../../db/db_unitview.js'

//SECONDARY: Draws the label FIELD.
//These have a white card with bold text
//(Left) Rounded square with an icon inside it
//(Left) The label of the unit in bold
//PROPS: Receives label field id and data from LIST
class LabelField extends Component {
    state = {
            id: '',
            type: 'label',
            data: 'Test',  
    }

    //ABOUT: Assigns the PROPS to the current STATE
    componentDidMount() {
        this.setState({id: this.props.labels_field.id})
        this.setState({data: this.props.labels_field.label})
    }

    //ABOUT: handles the event of the user typing in the label field
    //gets the text from the selected label field
    //NOTE: if enter is pressed, focus is lost on the field
    //field supports a maximum of 36 characters
    onKeyPress = (event) =>{
        const str = event.target.innerHTML
        if (event.charCode === 13){
            event.preventDefault()  
            const element = event.target
            element.blur()
        }
        else if(str.length > 36){
                event.preventDefault()
        }
    }

    //ACTION: calls updates to the db once focus is off the label 
    //gets text in the label field
    //gets project id, unit id, and field id from STATE
    //if text in label field is empty, make it '...'
    //uv_savefieldchange: Save the changes to the label field
    update = (event) => {
        
        const str = event.target.innerHTML
        const p_id = this.props.project_id
        const u_id = this.props.unit_id
        const f_id = this.state.id

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
    //Render: Label Field
    render() {
        return(
            <div className="ShortFieldContainer">
                <div className="LabelField" key={this.state.id}>
                    <div className="card">
                        <h1 className="cardh1bold"
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
export default LabelField;