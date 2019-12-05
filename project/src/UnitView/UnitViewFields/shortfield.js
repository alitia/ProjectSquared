import React, { Component } from 'react'
import {uv_savefieldchange} from '../../db/db_unitview.js'

//SECONDARY: Draws the short FIELD.
//These have a white card with a bold label and light text
//(Left) The label of the short field in bold text (Not editable here)
//(Left) The text input in light text
//PROPS: Receives short field id, label and data from LIST
class ShortField extends Component {
    state = {
            id: '',
            type: 'short',
            label: '',            
            data: '...'
    }

    //ABOUT: Assigns the PROPS to the current STATE
    componentDidMount() {
        this.setState({id: this.props.short_field.id})
        this.setState({label: this.props.short_field.label})
        this.setState({data: this.props.short_field.data})
    }

    //ABOUT: handles the event of the user typing in the short field
    //gets the text from the selected short field
    //NOTE: if enter is pressed, focus is lost on the field
    //field supports a maximum of 36 characters
    handleChange = (event) =>{

        this.setState({data: event.target.value})
    }

    //ACTION: calls updates to the db once focus is off the short 
    //gets text in the short field
    //gets project id, unit id, and field id from STATE
    //if text in short field is empty, make it '...'
    //uv_savefieldchange: Save the changes to the short field
    update = (event) => {
        
        const str = event.target.value
        const p_id = this.props.project_id
        const u_id = this.props.unit_id
        const f_id = this.state.id

        if(str === ""){
            this.setState({data: "..."})
        }
        else{
            this.setState({data: str})
        }
        this.setState({data: this.state.data})
        uv_savefieldchange(p_id, u_id, f_id, str)
    }

    //ACTION:
    //Render: Short Field
    //Render: Bold label
    //Render: Divider
    //Render: Light text input
    render() {
        return (
            <div className="ShortFieldContainer">
                <div className="ShortField" key={this.state.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{this.state.label}</h1>
                        <div className="slash"></div>
                        <form className="form_short">
                            <input type="text" 
                                className="shortFieldInput" 
                                value={this.state.data} 
                                onBlur={this.update} 
                                onChange={this.handleChange} 
                                maxLength="50" 
                                size="40"/>
                        </form>
                    </div>
                </div>
            </div>   
        );
    }
}
export default ShortField;