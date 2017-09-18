import React from 'react'
import {Link} from 'react-router-dom'

export const ProjectUnitViewCard = (props) => {
	return(
		<Link to={`/project/${props.projectId}/unit/${props.id}`}>
			<div className="ProjectUnitView_Card">
                <div className="card">
                    <h2 className="cardh2normal">{props.projectName}</h2>
                    <h2 className="percentRegularCard">{props.percentageComplete}</h2>
                </div>
            </div>
        </Link>
		)
}
