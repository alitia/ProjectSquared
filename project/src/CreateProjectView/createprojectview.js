import React, { Component } from 'react';
import { BackButton } from '../Other/backbutton.js';
import {uv_getfieldslist, 
        uv_convertfieldslist} from '../db/db_unitview.js';
import {puv_getunitslist, 
        puv_convertunitslist}
from '../db/db_projectunitview.js';
import { pcv_createeditfield } from '../db/db_createprojectview.js';
import { generateId } from '../lib/projecthelpers.js';
import { CreateProjectViewList } from './createprojectview_list.js';
import  CreateProjectViewTitle  from './createprojectview_title.js';
import { CreateProjectViewNew } from './createprojectview_new.js';

//CORE: Shows the LIST and NEW of the new PROJECT
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

    //ACTION: Gets fields list of the new project from DB
    //convert: send the result to the db file to get converted to a projects list
    componentDidMount() {
        var project_val = this.props.match.params.projectId 
        this.setState({projectId: project_val})

        puv_getunitslist(project_val)
        .then(result => this.getUnitId(result.val()))

        var unit_val = this.state.unitId 
        uv_getfieldslist(project_val, unit_val)
        .then(data => this.convert(data.val()))

        puv_getunitslist(project_val)
        .then(result => this.getTitleName(result.val()))  
    }

    //ACTION: get the unit id so we can look up the fields
    //puv_convertunitslist: look up the only unit in the project
    getUnitId(result){
        var list = puv_convertunitslist(result)
        var unit_val = list[0].id
        this.setState({unitId: unit_val})
    }

    //ACTION: get the title of the project and show it at the top of the list
    getTitleName(result){
        var title_val = result.projectName
        this.setState({title: title_val}) 
    }

    //ACTION:
    //get the only value in the object array and convert it
    //uv_convertfieldslist: converts the result from the database into a list of fields
    convert(data, unit_val){
        var fields_list = ''
        for (var item in data){
            fields_list = uv_convertfieldslist(data[item])
            this.setState({fields: fields_list})
        }        
    }

    //ACTION:
    //get the only value in the object array and convert it once a new item is added
    //uv_convertfieldslist: converts the result from the database into a list of fields
    convert_2(data, unit_val){
        var fields_list = ''
        fields_list = uv_convertfieldslist(data)
        this.setState({fields: fields_list})       
    }

    //ACTION: create an edit field in the new project
    //pcv_createeditfield: create an edit field in the new unit and project
    handleClick = (evt) => {
        var field_val = generateId()
        pcv_createeditfield(this.state.projectId, this.state.unitId, field_val)
        uv_getfieldslist(this.state.projectId, this.state.unitId)
        .then(data => this.convert_2(data.val(), this.state.unitId))
    }

    //ACTION:
    //Render: Back button (Left Top)
    //Render: New Project Fields List (Middle Top)
    //Render: New Field (Middle Bottom)
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
