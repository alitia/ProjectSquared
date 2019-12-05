import React, { Component } from 'react'
import {uv_savefieldchange, uv_savetitlechange} from '../../db/db_unitview.js'

//SECONDARY: Draws the title FIELD.
//These have a white card with bold text
//(Left) Rounded square with an icon inside it
//(Left) The title of the unit in bold
//PROPS: Receives title field id and data from LIST
class UnitViewTitle extends Component {
	state = {
            id: '',
            type: 'title',
            label: '',            
            data: '',
            p_id: '',
            u_id: '',
            f_id: ''
    }

    //ABOUT: Assigns the PROPS to the current STATE whenever they are updated
    componentWillReceiveProps() {
        this.setState({data: this.props.title})
        this.setState({p_id: this.props.project_id})
        this.setState({u_id: this.props.unit_id})
        this.setState({f_id: this.props.field_id})
    }

    componentDidMount() {
        this.setState({data: this.props.title})
        this.setState({p_id: this.props.project_id})
        this.setState({u_id: this.props.unit_id})
        this.setState({f_id: this.props.field_id})
    }

    //ABOUT: handles the event of the user typing in the short field
    //gets the text from the selected short field
    //NOTE: if enter is pressed, focus is lost on the field
    //field supports a maximum of 36 characters
    handleChange = (event) =>{

        this.setState({data: event.target.value})
    }

    //ACTION: calls updates to the db once focus is off the title 
    //gets text in the title field
    //gets project id, unit id, and field id from STATE
    //if text in title field is empty, make it '...'
    //uv_savefieldchange: Save the changes to the title field
    //uv_savetitlechange: Save the changes to the overall unit title
    update = (event) => {
        
        const str = event.target.value
        const p_id = this.state.p_id
        const u_id = this.state.u_id
        const f_id = 0

        if(str === ""){
            event.target.value = "..."
        }
        else{
            this.setState({data: str})
        }
        
        this.setState({data: this.state.data})
        uv_savefieldchange(p_id, u_id, f_id, str)
        uv_savetitlechange(p_id, u_id, f_id, str)
    }

    //ACTION:
    //Render: Title Field
    //Render: Icon and Icon Box
    render() {
    	return(
			<div className="ShortFieldContainer">
                <div className="titleField" key={this.state.id}>
                    <div className="card">
                        <div className="cardLeftImgRed">
                            <div className="unitSymbol"></div>
                        </div>
                            <form className="form_title">
                                <input type="text" 
                                    className="titleFieldInput" 
                                    value={this.state.data} 
                                    onBlur={this.update} 
                                    onChange={this.handleChange} 
                                    maxLength="40" 
                                    size="40"/>
                            </form>
                    </div>
                </div>
            </div>
		);
    }	
}
export default UnitViewTitle;
