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
            var path = "projects/" + project_val + "/"
            var itemsRef = firebase.database().ref().child(path)
            itemsRef.once('value')
            .then(result => this.convertResult(result.val()))    
    }
    //converts object array into array for mapping by MPV_List
    convertResult(res){
        var arr = []
        var count = 0

        for (var item in res.units){
            arr[count] = res.units[item]
            count++
        }
        if(typeof arr === 'undefined'){
            this.setState({title: res.projectName})                
        }
        else{
            this.setState({title: res.projectName})
            this.setState({units: arr})
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