import React, { Component } from 'react';
import { BackButton } from '../Other/backbutton.js'
import firebase from '../firebase.js'
import { generateId } from '../lib/projecthelpers.js';
import { createProject, createUnit, createTitleField, createShortField } from '../lib/createproject.js';
import { CreateProjectViewList } from './createprojectview_list.js';
import { CreateProjectViewCard } from './createprojectview_card.js';
import { CreateProjectViewTitle } from './createprojectview_title.js';
import { CreateProjectViewNew } from './createprojectview_new.js';

class CreateProjectView extends Component {
    state = {
            fields: [],
            currentUnit: '',
            title: '',
            projectId: ''
    }
    //enquires on the unit data based on the current URL and sends it through
    componentDidMount() {
    
        var project_val = generateId()
        var unit_val = generateId()
        var field_val = generateId()
        createProject(project_val)
        createUnit(project_val, unit_val)
        createTitleField(project_val, unit_val, field_val)
        createShortField(project_val, unit_val, field_val)
    }
    handleClick = (evt) =>{

        
    }
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList">
                    <CreateProjectViewTitle title={this.state.title}/>
                    <div onClick={this.handleClick}>
                        <CreateProjectViewNew/>
                    </div>
                </div>                 
            </div>     
        );
    }
}
export default CreateProjectView;
//                    <CreateProjectViewList fields={this.state.fields} projectId={this.state.projectId}/>
