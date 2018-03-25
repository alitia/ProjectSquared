import React, { Component } from 'react'

//SECONDARY: Draws the PROJECT TITLE card.
//These have a white card
//(Left) Icon in a rounded square
//(Left) Bold text with Title of the PROJECT
//TODO: Add image for add symbol
//ACTION: The user cannot edit any details of the project without clicking the 'Edit' button
class ProjectUnitViewTitle extends Component{
    render(){
    	return(
			<div className="ProjectUnitView_Title">
                <div className="card">
                    <div className="cardLeftImgRed"><div className="projectSymbol"></div></div>
                    <h1 className="cardh1bold">{this.props.title}</h1>
                </div>
            </div>
		)
    }
	
}
export default ProjectUnitViewTitle;