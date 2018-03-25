import React from 'react';

//SECONDARY: Draws the project NEW card.
//These have a white card
//(Left) Icon in a rounded square
//(Left) Light text with 'Add Field'
export const CreateProjectViewNew = (props) => {
    return(
        <div className="CreateProjectView_New">
            <div className="card">
                <div className="cardLeftImgRed"></div>
                <h1 className="cardh2light">Add Field</h1>
            </div>
        </div>
    )
}