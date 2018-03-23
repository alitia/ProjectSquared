import React from 'react'
import {Link} from 'react-router-dom'
import ProgressBar from '../UnitView/UnitViewFields/progressbar.js'

//SECONDARY: Draws the unit CARD. Links to the PROGRESSBAR
//These have a white card
//(Left) Progress bar totalling the progress of all units inside
//(Left) The bold title of the unit
//(Right) The percentage number of progress of the unit
//PROPS: Receives a project list of units from LIST
//LINK: Links to the selected projects id and units page if clicked
export const ProjectUnitViewCard = (props) => {  
	return(
		<Link to={`/project/${props.projectId}/unit/${props.id}`}>
			<div className="ProjectUnitView_Card">
                <div className="card">
                    <h1 className="percentRegularCard">{props.percentageComplete}%</h1>
                    <h1 className="cardh1normalprog">{props.projectName}</h1>                    
                    <ProgressBar progress={props.percentageComplete}/>
                </div>
            </div>
        </Link>
	)
}
