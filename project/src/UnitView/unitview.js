import React, { Component } from 'react';
import UnitViewList from './unitview_list.js';
import UnitViewProgress from './UnitViewFields/unitviewprogress.js';
import {BackButton} from '../Other/backbutton.js';
import firebase from '../firebase.js'


class UnitView extends Component {
    
    state = {
            unit_fields: [],
            unit_progress: '',
            project_id: '',
            unit_id: ''
        }
    //enquires on the unit data based on the current URL and sends it through
    componentDidMount() {
            
            var project_val = this.props.match.params.projectId           
            var db = firebase.database().ref().child("projects")
            var query = db.orderByChild("id").equalTo(101).limitToFirst(1)
            query.on("child_added", result => this.findUnits(result.val()))
    }
    findUnits(data){

        var unit_val = this.props.match.params.unitId 
        for(var i = 0; i < data.units.length; i++){
            if(data.units[i].id == unit_val){
                this.conditionTest(data.units[i])
            }
        } 

    }
    //checks that the unit array is not empty and displays accordingly
    //if the unit array is empty and it is then mapped, it throws an error in the state
    conditionTest(units){
        this.setState({unit_fields: units.fields})      
        this.setState({unit_progress: units.percentageComplete})   
            
    }
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList">
                    <UnitViewList unit_fields={this.state.unit_fields} project_id={this.props.match.params.projectId} unit_id={this.props.match.params.unitId}/>
                    <UnitViewProgress unit_progress={this.state.unit_progress}/>
                </div>
            </div>     
        );
    }
}

export default UnitView;