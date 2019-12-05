import React, { Component } from 'react';
import {pcv_savefieldlabelchange} from '../db/db_createprojectview.js';

class CreateProjectViewTitle extends Component {
    constructor(){
        super()
        this.updateLabel = this.updateLabel.bind(this)
    }
	state = {
            id: '',
            type: 'title',
            label: '',            
            data: '',
            project_id: '',
            unit_id: '',
            field_id: '',
            title_id: '',
            title: ''
        }

    componentDidMount(){
        this.setState({data: this.props.title})
    }
    componentWillReceiveProps(){
        this.setState({data: this.props.title})
    }

    //ABOUT: handles the event of the user typing in the project title field
    //NOTE: if enter is pressed, focus is lost on the field
    //field supports a maximum of 36 characters   
    onKeyPress = (event) => {

        this.setState({data: event.target.value})
    }

    //ACTION: calls updates to the db once focus is off the title field 
    //gets text in the title field
    //gets project id, unit id, and field id from STATE
    //if text in title field is empty, make it '...'
    //pcv_savefieldlabelchange: Save the changes to the title field
    updateLabel = (e) => {        
        const str = e.target.value
        const p_id = this.props.projectId
        const u_id = this.props.unitId
        const f_id = 0
        var type = "title"

        if(str === ""){
            e.target.value = "..."
        }
        else{
            this.setState({data: str})
        }        
        this.setState({data: this.state.data})
        pcv_savefieldlabelchange(p_id, u_id, f_id, str, type)
    }

    //ACTION:
    //Render: Title Field
    //Icon in box (Left)
    //Title text in bold (Left)
	render(){
		return(
			<div className="CreateProjectView_Title">
                <div className="card">
                    <div className="cardLeftImgRed"></div>
                    	<form className="form_label">
                        <input type="text" 
                            className="labelFieldInput" 
                            value={this.state.data} 
                            onBlur={this.updateLabel} 
                            onChange={this.onKeyPress} 
                            maxLength="40" 
                            size="40"/>
                    </form>
                </div>
            </div>
		)
	}	
}
export default CreateProjectViewTitle