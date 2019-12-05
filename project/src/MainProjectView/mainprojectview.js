import React, { Component } from 'react';
import {generateId} from '../lib/projecthelpers.js';
import {mpv_getprojectslist, mpv_convertprojectslist} from '../db/db_mainprojectview.js';
import { pcv_createproject, 
        pcv_createunit, 
        pcv_createeditfield} 
        from '../db/db_createprojectview.js';
import MainProjectViewNew from './mainprojectview_new.js';
import {MainProjectViewList} from './mainprojectview_list.js';

//CORE: Shows the LIST and NEW once user SIGNIN
//Creates a new project if the NEW is pressed
class MainProjectView extends Component {
    state = {
            //projects to be displayed for the user
            projects: [],
            //the project id to be used if the user makes a new project
            projectId: '',
            newProjectId: '',
            newUnitId: ''
    }

    //ACTION: Gets project list from DB
    //convert: send the result to the db file to get converted to a projects list
    componentDidMount() {
        var project_val = generateId()
        this.setState({newProjectId: project_val})
        mpv_getprojectslist()
        .then(result => this.convert(result.val()))    
    }
    
    //ACTION:
    //mpv_convertprojectslist: converts the result from the database into a list of projects
    convert(result) {

        var projects_list = ''
        projects_list = mpv_convertprojectslist(result)
        this.setState({projects: projects_list})
    }

    //ACTION: create an edit field in the new project
    //pcv_createeditfield: create an edit field in the new unit and project
    handleClick = (evt) => {
        var unit_val = generateId()
        var field_val = generateId()
        this.createNewProject(this.state.newProjectId, unit_val, field_val)
    }

    //ACTION: Create a new project in the db
    //pcv_createproject: create a new project on the db
    //pcv_createunit: create a new unit in the new project
    //pcv_createeditfield: create a new field in the new unit
    createNewProject(project_val, unit_val, field_val){
        pcv_createproject(project_val)
        pcv_createunit(project_val, unit_val)
        pcv_createeditfield(project_val, unit_val, field_val)
        this.setState({newProjectId: project_val})
        this.setState({newUnitId: unit_val})
    }

    //ACTION:
    //Render: Back button (Left Top)
    //Render: Project List (Middle Top)
    //Render: New Project (Middle Bottom)
    render() {
        return (
            <div className="Page">
                <div className="leftMargin"></div> 
                <div className="ProjectList" >
                    <MainProjectViewList projects={this.state.projects}/>
                    <div onClick={this.handleClick}>
                        <MainProjectViewNew projectId={this.state.newProjectId} unitId={this.state.newUnitId}/>
                    </div> 
                </div>
            </div>
        );
    }
}
export default MainProjectView;