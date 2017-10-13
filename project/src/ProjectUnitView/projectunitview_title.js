import React from 'react'

export const ProjectUnitViewTitle = (props) => {

	return(
			<div className="ProjectUnitView_Title">
                <div className="card">
                    <div className="cardLeftImgWhite"></div>
                    	<h1 className="cardh1bold">{props.title}</h1>
                    </div>
            </div>
		)
}