import React, { Component } from 'react';
import {MainProjectViewList} from './mainprojectview_list.js';
import {addProject, generateId} from '../lib/projecthelpers.js';
import {MainProjectViewNew} from './mainprojectview_new.js'
import {BackButton} from '../Other/backbutton.js'
import firebase from '../firebase.js'

class MainProjectView extends Component {
    state = {
            projects: [],
            currentProject: ''
        }
    componentDidMount() {
        const itemsRef = firebase.database().ref("projects")
        itemsRef.once('value')
        .then(result => this.convertResult(result.val()))
    }
    //converts object array into array for mapping by MPV_List
    convertResult(res){
        var arr = []
        var count = 0

        for (var item in res){
            arr[count] = res[item]
            count++
        }
        this.setState({projects: arr})
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