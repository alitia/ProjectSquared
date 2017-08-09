import React, { Component } from 'react';

class MainProjectView extends Component {
    constructor(){
        super()
        this.state = {
            projects: [
                {id: 101, projectsInside: 10, projectName: 'Project Name One', percentageComplete: '55%'},
                {id: 102, projectsInside: 14, projectName: 'Project Name Two', percentageComplete: '66%'},
                {id: 103, projectsInside: 17, projectName: 'Project Name Three', percentageComplete: '77%'}
            ]
        }
    }
    render() {
        return (
            <div className="MainProjectView_List">
                {this.state.projects.map(project =>
                <div className="MainProjectView_Card" key={project.id}>
                    <div className="card">
                        <div className="cardLeftImgWhite"><h1 className="projectNumCube">{project.projectsInside}</h1></div>
                        <h1 className="cardh1normal">{project.projectName}</h1>
                        <h2 className="percenth1">{project.percentageComplete}</h2> 
                    </div>
                </div>
                )}
                <div className="MainProjectView_New">
                    <div className="card">
                        <div className="cardLeftImgWhite"></div>
                        <h1 className="cardh1light">Create Project</h1>
                    </div>
                </div>
            </div>      
        );
    }
}
export default MainProjectView;