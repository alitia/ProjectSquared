import React from 'react';

//SECONDARY: Draws the UNIT NEW card.
//These have a white card
//(Left) Icon in a rounded square
//(Left) Light text with 'Add Unit'
export const ProjectUnitViewNew = (props) => {
    return(
            <div className="ProjectUnitView_New">
                <div className="card">
                    <div className="cardLeftImgRed"><div className="addSymbol"></div></div>
                    <h1 className="cardh2light">Add Unit</h1>
                </div> 
            </div>
    )
}