import React from 'react'
import PropTypes from 'prop-types'

export const ProjectUnitViewCard = (props) => {

	return(
			<div className="ProjectUnitView_Card">
                <div className="card">
                    <h2 className="cardh2normal">{props.projectName}</h2>
                    <h2 className="percentRegularCard">{props.percentageComplete}</h2> 
                </div>
            </div>
		)
}
ProjectUnitViewCard.propTypes = {
	projectName:React.PropTypes.string.isRequired,
	percentageComplete:React.PropTypes.string.isRequired
}