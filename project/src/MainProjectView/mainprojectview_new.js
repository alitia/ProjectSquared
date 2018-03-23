import {Link} from 'react-router-dom'
import React, { Component } from 'react';

//SECONDARY: Draws the project NEW card.
//These have a white card
//(Left) Icon in a rounded square
//(Left) Light text with 'Create Project'
//PROPS: Receives a project node from CORE
//LINK: Links to new page using the new project id if clicked
class MainProjectViewNew extends Component {
    render() {
		return(
			<Link to={`/create_project/${this.props.projectId}`}>
		        <div className="card">
		            <div className="cardLeftImgRed"><div className="addSymbol"></div></div>
		            <h1 className="cardh1light">Create Project</h1>
		        </div>
	        </Link>
		)
	}
}
export default MainProjectViewNew;