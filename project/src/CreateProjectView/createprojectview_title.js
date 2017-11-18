import React, { Component } from 'react'
import { saveFieldLabelChange } from '../lib/fieldassist.js'

class CreateProjectViewTitle extends Component {
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
    update = (e) => {        
        const str = e.target.innerHTML
        const p_id = this.props.project_id
        const u_id = this.props.unit_id
        const f_id = this.props.title_id
        var type = "title"

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            this.setState({data: str})
        }        
        this.setState({data: this.state.data})
        saveFieldLabelChange(p_id, u_id, f_id, str, type)
    }
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