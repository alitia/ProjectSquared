import React from 'react'
import {Link} from 'react-router-dom'
import ProgressBar from '../UnitView/UnitViewFields/progressbar.js'

//SECONDARY: Draws the project CARD.
//These have a white card
//(Left) Progress bar totalling the progress of all units inside
//(Left) A total number of units in the project
//(Right) The percentage number of progress
//PROPS: Receives a project node from LIST
//LINK: Links to the selected projects page if clicked
//TODO: Test if line 17 can be deleted
export const MainProjectViewCard = (props) => {
	return(
        <Link to={`/project/${props.id}`}>        
            {this.props} 
			<div className="MainProjectView_Card">
                <div className="card">
                    <div className="cardLeftImgWhite">
                        <h1 className="projectNumCube">{props.projectsInside}</h1>
                    </div> 
                    <h1 className="percentRegularCard">{props.percentageComplete}%</h1>
                    <h1 className="cardh1normalprogwithcount">{props.projectName}</h1>                    
                    <ProgressBar progress={props.percentageComplete}/>
                </div>
            </div>
        </Link>
	)
}

