import React, { Component } from 'react';
import {puv_getunitslist, 
        puv_convertunitslist, 
        puv_viewnewunit, 
        puv_createnewunit,
        puv_getprojectsunitcount,
        puv_setprojectsunitcount} 
from '../db/db_projectunitview.js';
import {ProjectUnitViewList} from './projectunitview_list.js';
import ProjectUnitViewTitle from './projectunitview_title.js';
import {ProjectUnitViewNew} from './projectunitview_new.js'
import BackButton from '../Other/backbutton.js'

//CORE: Shows the TITLE and LIST of units then the NEW button
class ProjectUnitView extends Component {
    state = {
            units: [],
            title: '',
            projectId: ''
    }
    
    //ACTION: 
    //get the current project id from the PROPS
    //puv_getunitslist: get unit list from DB using project_val
    //convert: send the result to the db file to get converted to a units list
    componentDidMount() {

        var project_val = this.props.match.params.projectId
        this.setState({projectId: project_val})
        puv_getunitslist(project_val)
        .then(result => this.convert(result.val()))   
    }

    //ACTION:
    //get the current project id from the PROPS
    //puv_convertunitslist: converts the result from the db into a list of units
    convert(result){

        var units_list = []
        units_list = puv_convertunitslist(result)

        if(typeof units_list === 'undefined'){

        }
        else{
            this.setState({units: units_list})
            this.setState({projectId: this.props.match.params.projectId})
        }
        if(result !== null){
            this.setState({title: result.projectName})  
        }
    }

    reloadFields = () =>{
        var project_val = this.state.projectId
        puv_getunitslist(project_val)
        .then(result => this.convert(result.val()))   
    }
    //ACTIONS: 
    //get the current project id from the PROPS
    //preventDefault: prevents change to a new page???
    //puv_createnewunit: create a new unit in the db under the project value
    //puv_viewnewunit: get the new units fields
    //convert: convert the new unit fields for display
    handleClick = (evt) =>{

        var project_val = this.props.match.params.projectId
        evt.preventDefault()    
        var unit_val = puv_createnewunit(project_val)

        puv_viewnewunit(project_val)
        .then(result => this.convert(result.val())) 

        puv_getprojectsunitcount(project_val)
        .then(result => this.setUnitCount(result.val()))

    }
    //ACTION: Set the projects inside for the unit to increase by one as we have added a new unit
    setUnitCount = (result) => {

        var project_val = this.props.match.params.projectId
        puv_setprojectsunitcount(project_val, result + 1)
    }
    
    //ACTION:
    //Render: Back button (Left Top)
    //Render: Unit List (Middle Top)
    //Render: New Unit (Middle Bottom)
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList">
                    <ProjectUnitViewTitle title={this.state.title}/>
                    <ProjectUnitViewList units={this.state.units} projectId={this.state.projectId} action={this.reloadFields}/>
                    <div onClick={this.handleClick}>
                        <ProjectUnitViewNew/>
                    </div>
                </div>
            </div>     
        );
    }
}
export default ProjectUnitView