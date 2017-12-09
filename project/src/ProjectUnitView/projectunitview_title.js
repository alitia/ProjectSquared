import React, { Component } from 'react'

class ProjectUnitViewTitle extends Component{
	state = {
            id: '',
            type: 'title',
            label: '',            
            data: '',
        }
    componentDidMount() {
        this.setState({id: this.props.titleId})
        this.setState({data: this.props.title})
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
        const f_id = this.state.id

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            this.setState({data: str})
        }
        
        this.setState({data: this.state.data})
        //saveFieldChange(p_id, u_id, f_id, str)
        //saveTitleChange(p_id, u_id, f_id, str)

    }
    render(){
    	return(
			<div className="ProjectUnitView_Title">
                <div className="card">
                    <div className="cardLeftImgRed"></div>
                    	<h1 className="cardh1bold">{this.props.title}</h1>
                    </div>
            </div>
		)
    }
	
}
export default ProjectUnitViewTitle;