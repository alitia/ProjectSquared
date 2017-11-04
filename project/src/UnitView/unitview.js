import React, { Component } from 'react';
import UnitViewList from './unitview_list.js';
import {BackButton} from '../Other/backbutton.js';
import firebase from '../firebase.js'


class UnitView extends Component {
    constructor(){
        super()
        this.reloadComponent = this.reloadComponent.bind(this)  
    }
    state = {
            unit_fields: [],
            unit_progress: '',
            project_id: '',
            unit_id: ''
        }
    //enquires on the unit data based on the current URL and sends it through
    componentDidMount() {            
            var project_val = this.props.match.params.projectId 
            var unit_val = this.props.match.params.unitId
            var path = "projects/" + project_val + "/units/" + unit_val + "/"          
            var db = firebase.database().ref().child(path)
            db.once("value")
            .then(result => this.convertResult(result.val()))
    }
    
    //converts object array into array for mapping by UV_List
    convertResult(res){
        var arr = []
        var count = 0

        for (var item in res.fields){
            arr[count] = res.fields[item]
            count++
        }
        this.setState({unit_progress: res.percentageComplete}) 
        this.setState({unit_fields: arr})      
    }
    reloadComponent(progress){
        //console.log("UnitView Progress Bar Component Reloaded")
        this.setState({unit_progress: progress})
    }
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList">
                    <UnitViewList unit_fields={this.state.unit_fields} action={this.reloadComponent} project_id={this.props.match.params.projectId} unit_id={this.props.match.params.unitId} unit_progress={this.state.unit_progress}/>
                </div>
            </div>     
        );
    }
}

export default UnitView;