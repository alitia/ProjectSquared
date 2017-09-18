import React, { Component } from 'react';
import UnitViewList from './unitview_list.js';
import UnitViewProgress from './UnitViewFields/unitviewprogress.js';
import {BackButton} from '../Other/backbutton.js';
import {loadUnitsFields} from '../lib/unitfieldsservice.js'


class UnitView extends Component {
    
    state = {
            unit_fields: [],
            unit_progress: ''
        }
    //enquires on the unit data based on the current URL and sends it through
    componentDidMount() {
            var x = this.props.match.params.unitId
            var y = this.props.match.params.projectId
            loadUnitsFields(x, y)
            .then(units => this.conditionTest(units))
    }

    //checks that the unit array is not empty and displays accordingly
    //if the unit array is empty and it is then mapped, it throws an error in the state
    conditionTest(units){
        this.setState({unit_fields: units.fields})      
        this.setState({unit_fields: units.percentageComplete})         
    }
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList">
                    <UnitViewList unit_fields={this.state.unit_fields}/>
                    <UnitViewProgress unit_progress={this.state.unit_progress}/>
                </div>
            </div>     
        );
    }
}

export default UnitView;