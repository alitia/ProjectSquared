import React from 'react'
import {Link} from 'react-router-dom'
import ProgressBar from '../UnitView/UnitViewFields/progressbar.js'

export const CreateProjectViewCard = (props) => {  
	return(
		<Link to={`/create_project`}>
			<div className="ProjectUnitView_Card">
                <div className="card">
                    <h1 className="percentRegularCard">{props.percentageComplete}</h1>
                    <h1 className="cardh1normalprog">{props.projectName}</h1>                    
                    <ProgressBar progress={props.percentageComplete}/>
                </div>
            </div>
        </Link>
		)
}
