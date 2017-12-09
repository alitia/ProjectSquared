import React, { Component } from 'react';
import {generateId} from '../lib/projecthelpers.js';
import MainProjectViewNew from './mainprojectview_new.js'
import {MainProjectViewList} from './mainprojectview_list.js';
import {BackButton} from '../Other/backbutton.js'
import firebase from '../firebase.js'

//CORE: Shows the LIST and NEW once user SIGNIN
class MainProjectView extends Component {
    state = {
            //projects to be displayed for the user
            projects: [],
            //the project id to be used if the user makes a new project
            projectId: ''
        }
    //ACTION: Gets project list from DB. Processes it into list of projects to display.
    //firebase: Asks for the list of projects. 
    //convertResult: Converts the result to project list.
    //generateId: Generates a project ID for a new project that may be created.
    //TODO: Write test for DB call, Generated ID. Make Generate ID iteratively increase instead of random.
    componentDidMount() {
        const ref = firebase.database().ref("projects")
        ref.once('value')
        .then(result => this.convertResult(result.val()))

        var project_val = generateId()
        this.setState({projectId: project_val})
    }
    //ACTION: converts result from db into project list. Sets the list to the state.
    //TODO: Write test for array conversion
    convertResult(res){
        var arr = []
        var count = 0

        for (var item in res){
            arr[count] = res[item]
            count++
        }
        this.setState({projects: arr})
    }
    //ACTION:
    //Render: Back button (Left Top)
    //Render: Project List (Middle Top)
    //Render: New Project (Middle Bottom)
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList" >
                    <MainProjectViewList projects={this.state.projects}/>
                    <MainProjectViewNew projectId={this.state.projectId}/>
                </div>
            </div>
        );
    }
}
export default MainProjectView;