import React from 'react'
import ProjectUnitView from '../ProjectUnitView/projectunitview.js'
import {Link} from 'react-router-dom'

export const MainProjectViewCard = (props) => {

	return(
        <Link to={`/project/${props.id}`}>
            {this.props}
			<div className="MainProjectView_Card">
                <div className="card">
                    <div className="cardLeftImgWhite">
                    	<h1 className="projectNumCube">{props.projectsInside}</h1>
                    </div>
                        <h1 className="cardh1normal">{props.projectName}</h1>
                        <h2 className="percentRegularCard">{props.percentageComplete}</h2> 
                </div>
            </div>
        </Link>
	)
}
