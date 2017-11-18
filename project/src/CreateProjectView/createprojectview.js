import React, { Component } from 'react';
import { BackButton } from '../Other/backbutton.js'
import firebase from '../firebase.js'
import { generateId } from '../lib/projecthelpers.js';
import { createProject, createUnit, createTitleField, createEditField} from '../lib/createproject.js';
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
    
        var project_val = generateId()
        var unit_val = generateId()
        var field_val = generateId()
        var title_val = generateId()
        createProject(project_val)
        createUnit(project_val, unit_val)
        createTitleField(project_val, unit_val, title_val)
        createEditField(project_val, unit_val, field_val)
        this.setState({projectId: project_val})
        this.setState({unitId: unit_val})
        this.setState({fieldId: field_val})
        this.setState({titleId: title_val})
    }
    handleClick = (evt) => {

        
    }
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList">
                    <CreateProjectViewTitle 
                        project_id={this.state.projectId}
                        unit_id={this.state.unitId}
                        title_id={this.state.titleId}
                        title={'Project'}
                        />
                    <EditField 
                        projectId={this.state.projectId}
                        unitId={this.state.unitId}
                        fieldId={this.state.fieldId}
                        />
                    <CreateProjectViewNew />
                </div>                 
            </div>     
        );
    }
}
export default CreateProjectView;
