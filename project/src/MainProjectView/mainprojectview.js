import React, { Component } from 'react';
import {MainProjectViewList} from './mainprojectview_list.js';
import {addProject, generateId} from '../lib/projecthelpers.js';
import {MainProjectViewNew} from './mainprojectview_new.js'
import {BackButton} from '../Other/backbutton.js'
import {loadProjects} from '../lib/projectservice.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProjectUnitView from '../ProjectUnitView/projectunitview.js'

class MainProjectView extends Component {
    state = {
            projects: [],
            currentProject: ''

        }
    componentDidMount() {
          loadProjects()
          .then(data => this.conditionTest(data))
    }
    //checks that the unit array is not empty and displays accordingly
    //if the unit array is empty and it is then mapped, it throws an error in the state
    conditionTest(title){

        this.setState({projects: title})       
            
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