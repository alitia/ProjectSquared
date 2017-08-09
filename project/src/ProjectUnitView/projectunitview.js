import React, { Component } from 'react';

class ProjectUnitView extends Component {
    constructor(){
        super()
        this.state = {
            units: [
                {id: 201, projectName: 'Unit One', percentageComplete: '22%'},
                {id: 202, projectName: 'Unit Two', percentageComplete: '33%'},
                {id: 203, projectName: 'Unit Three', percentageComplete: '44%'}
            ]
        }
    }
    render() {
        return (
            <div className="ProjectUnitView_List">
                <div className="ProjectUnitView_Title">
                    <div className="card">
                        <div className="cardLeftImgWhite"></div>
                        <h1 className="cardh1bold">This Projects Name</h1>
                    </div>
                </div>
                {this.state.units.map(unit =>
                <div className="ProjectUnitView_Card" key={unit.id}>
                    <div className="card">
                        <h2 className="cardh2normal">{unit.projectName}</h2>
                        <h2 className="percentRegularCard">{unit.percentageComplete}</h2> 
                    </div>
                </div>
                )}
                <div className="ProjectUnitView_New">
                    <div className="card">
                        <div className="cardLeftImgWhite"></div>
                        <h1 className="cardh1light">Add Unit</h1>
                    </div>
                </div>
            </div>      
        );
    }
}
export default ProjectUnitView;