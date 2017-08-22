import React from 'react';


export const MainProjectViewNew = (props) => {

	return(
			<div onClick={props.handleClick}>
                <div className="card">
                    <div className="cardLeftImgWhite">
                    </div>
                    <h1 className="cardh1light">Create Project</h1>
                </div>
            </div>
		)
}