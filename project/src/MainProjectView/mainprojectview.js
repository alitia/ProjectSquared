import React, { Component } from 'react';
import {MainProjectViewList} from './mainprojectview_list.js';
import {addProject, generateId} from '../lib/projecthelpers.js';
import {MainProjectViewNew} from './mainprojectview_new.js'
import {BackButton} from '../Other/backbutton.js'

class MainProjectView extends Component {
    constructor(){
        super()
        this.state = {
            projects: [
                {id: 101, projectsInside: 10, projectName: 'Project Name One', percentageComplete: '55%'},
                {id: 102, projectsInside: 14, projectName: 'Project Name Two', percentageComplete: '66%'},
                {id: 103, projectsInside: 17, projectName: 'Project Name Three', percentageComplete: '77%'}
            ],
            currentProject: ''

        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (evt) =>{
        evt.preventDefault()       
        const newId = generateId()
        const newProject = {id: newId, projectsInside: 22, projectName: 'Project Name Four', percentageComplete: '66%'}
        const updatedProjects = addProject(this.state.projects, newProject)
        this.setState({
            projects: updatedProjects

        })
    }
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList" >
                    <MainProjectViewList projects={this.state.projects}/>
                    <div onClick={this.handleClick}><MainProjectViewNew /></div>
                </div>
            </div>
        );
    }
}
export default MainProjectView;