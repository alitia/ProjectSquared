import React from 'react';
import {Link} from 'react-router-dom'

export const MainProjectViewNew = (props) => {

	return(
			<Link to={`/create_project`}>
	                <div className="card">
	                    <div className="cardLeftImgRed">
	                    </div>
	                    <h1 className="cardh1light">Create Project</h1>
	                </div>
            </Link>
		)
}