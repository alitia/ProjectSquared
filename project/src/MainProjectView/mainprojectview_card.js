import React from 'react'
import PropTypes from 'prop-types'

export const MainProjectViewCard = (props) => {

	return(
			<div className="MainProjectView_Card">
                <div className="card">
                    <div className="cardLeftImgWhite">
                    	<h1 className="projectNumCube">{props.projectsInside}</h1>
                    </div>
                        <h1 className="cardh1normal">{props.projectName}</h1>
                        <h2 className="percentRegularCard">{props.percentageComplete}</h2> 
                </div>
            </div>
		)
}
MainProjectViewCard.propTypes = {
	projectsInside: React.PropTypes.number.isRequired,
	projectName:React.PropTypes.string.isRequired,
	percentageComplete:React.PropTypes.string.isRequired
}