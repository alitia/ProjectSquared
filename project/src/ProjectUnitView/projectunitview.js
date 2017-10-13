import React, { Component } from 'react';
import {ProjectUnitViewList} from './projectunitview_list.js';
import {ProjectUnitViewTitle} from './projectunitview_title.js';
import {addUnit, generateId} from '../lib/projecthelpers.js';
import {ProjectUnitViewNew} from './projectunitview_new.js'
import {BackButton} from '../Other/backbutton.js'
import firebase from '../firebase.js'


class ProjectUnitView extends Component {
    state = {
            units: [],
            currentUnit: '',
            title: '',
            projectId: ''
        }

    //enquires on the unit data based on the current URL and sends it through
    componentDidMount() {
            var project_val = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1)
            var db = firebase.database().ref().child("projects")
            var query = db.orderByChild("id").equalTo(101).limitToFirst(1) //need to fix 101 to a num in some way
            query.on("child_added", result => this.conditionTest(result.val()))        
    }

    //checks that the unit array is not empty and displays accordingly
    //if the unit array is empty and it is then mapped, it throws an error in the state
    conditionTest(input){
        if(typeof input.units === 'undefined'){

            this.setState({title: input.projectName})
                
        }
        else{
            this.setState({title: input.projectName})
            this.setState({units: input.units})
            this.setState({projectId: this.props.match.params.projectId})
        }         
            
    }
    handleClick = (evt) =>{
        evt.preventDefault()      
        const newId = generateId()
        const newUnit = {id: newId, projectName: 'Unit Four', percentageComplete: '55%'}
        const updatedUnits = addUnit(this.state.units, newUnit)
        this.setState({
            units: updatedUnits

        })
    }
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList">
                    <ProjectUnitViewTitle title={this.state.title}/>
                    <ProjectUnitViewList units={this.state.units} projectId={this.state.projectId}/>
                    <div onClick={this.handleClick}>
                        <ProjectUnitViewNew/>
                    </div>
                </div>
                
                 
            </div>     
        );
    }
}
export default ProjectUnitView;