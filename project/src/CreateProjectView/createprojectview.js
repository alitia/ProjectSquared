import React, { Component } from 'react';
import { BackButton } from '../Other/backbutton.js'
import firebase from '../firebase.js'
import { generateId } from '../lib/projecthelpers.js';
import { createProject, createUnit, createTitleField, createEditField, checkIfProjectExistsAlready} from '../lib/createproject.js';
import { CreateProjectViewList } from './createprojectview_list.js';
import { CreateProjectViewCard } from './createprojectview_card.js';
import  CreateProjectViewTitle  from './createprojectview_title.js';
import { CreateProjectViewNew } from './createprojectview_new.js';
import EditField from '../UnitView/UnitViewFields/editfield.js';

class CreateProjectView extends Component {
    state = {
            fields: [],
            currentUnit: '',
            title: '',
            projectId: '',
            fieldId: '',
            titleId: '',
            unitId: ''
    }
    //enquires on the unit data based on the current URL and sends it through
    componentDidMount() {
        var project_val = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1)
        var unit_val = generateId()
        var field_val = generateId()
        var title_val = generateId()
        var bool = checkIfProjectExistsAlready(project_val)
        if(bool){
            console.log("Project Name already exists")
        }
        else{
            
            this.createNewProject(project_val, unit_val, field_val,title_val)
        }                
    }
    createNewProject(project_val, unit_val, field_val, title_val){
        createProject(project_val)
        createUnit(project_val, unit_val)
        createEditField(project_val, unit_val, field_val)
        this.setState({projectId: project_val})
        this.setState({unitId: unit_val})
        this.setState({titleId: title_val})
    }
    convertResult(res){
        var arr = []
        var count = 0

        for (var item in res.fields){
            arr[count] = res.fields[item]
            count++
        }
        this.setState({fields: arr})      
    }
    getProjectName(res){
        var projectName = res.projectName
        this.setState({title: projectName})
    }
    handleClick = (evt) => {
        var project_val = this.state.projectId
        var unit_val = this.state.unitId
        var field_val = generateId()
        createEditField(project_val, unit_val, field_val)
    }
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList">
                    <CreateProjectViewTitle title={this.state.title} projectId={this.state.projectId} unitId={this.state.unitId} titleId={this.state.titleId}/>
                    <CreateProjectViewList fields={this.state.fields} projectId={this.state.projectId} unitId={this.state.unitId}/>
                    <div onClick={this.handleClick}>
                        <CreateProjectViewNew />
                    </div>
                </div>                 
            </div>     
        );
    }
}
export default CreateProjectView;
