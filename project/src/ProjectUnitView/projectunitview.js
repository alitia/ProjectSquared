import React, { Component } from 'react';
import {ProjectUnitViewList} from './projectunitview_list.js';
import {ProjectUnitViewTitle} from './projectunitview_title.js';
import {addUnit, generateId} from '../lib/projecthelpers.js';
import {ProjectUnitViewNew} from './projectunitview_new.js'
import {BackButton} from '../Other/backbutton.js'

class ProjectUnitView extends Component {
    constructor(){
        super()
        this.state = {
            units: [
                {id: 201, projectName: 'Unit One', percentageComplete: '22%'},
                {id: 202, projectName: 'Unit Two', percentageComplete: '33%'},
                {id: 203, projectName: 'Unit Three', percentageComplete: '44%'}
            ],
            currentUnit: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (evt) =>{
        evt.preventDefault()
        console.log('got to here - units')        
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
                    <ProjectUnitViewTitle />
                    <ProjectUnitViewList units={this.state.units}/>
                    <div onClick={this.handleClick}>
                        <ProjectUnitViewNew/>
                    </div>
                </div>
                
                 
            </div>     
        );
    }
}
export default ProjectUnitView;