import React from 'react'
import {Link} from 'react-router-dom'
import ProgressBar from '../UnitView/UnitViewFields/progressbar.js'

export const MainProjectViewCard = (props) => {

	return(
        <Link to={`/project/${props.id}`}>
            {this.props}
			<div className="MainProjectView_Card">
                <div className="card">
                    <div className="cardLeftImgWhite">
                        <h1 className="projectNumCube">{props.projectsInside}</h1>
                    </div> 
                    <h1 className="percentRegularCard">{props.percentageComplete}</h1>
                    <h1 className="cardh1normalprogwithcount">{props.projectName}</h1>                    
                    <ProgressBar progress={props.percentageComplete}/>
                </div>
            </div>
        </Link>
	)
}

