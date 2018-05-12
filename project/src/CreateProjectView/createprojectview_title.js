import React, { Component } from 'react';
import {pcv_savefieldlabelchange} from '../db/db_createprojectview.js';

class CreateProjectViewTitle extends Component {
    constructor(){
        super()
        this.update = this.update.bind(this)
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

    //ABOUT: handles the event of the user typing in the project title field
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

    //ACTION: calls updates to the db once focus is off the title field 
    //gets text in the title field
    //gets project id, unit id, and field id from STATE
    //if text in title field is empty, make it '...'
    //pcv_savefieldlabelchange: Save the changes to the title field
    update = (e) => {        
        const str = e.target.innerHTML
        const p_id = this.props.projectId
        const u_id = this.props.unitId
        const f_id = this.props.titleId
        var type = "title"

        if(str === ""){
            e.target.innerHTML = "..."
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
                    	<h1 className="cardh1bold"
                    		contentEditable = {true}
                        	onBlur={this.update}
                           	onKeyPress={this.onKeyPress}
                           	>{this.props.title}</h1>
                </div>
            </div>
		)
	}	
}
export default CreateProjectViewTitle