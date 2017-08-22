import React, { Component } from 'react';
import {UnitViewList} from './unitview_list.js';
import UnitViewProgress from './UnitViewFields/unitviewprogress.js';
import {BackButton} from '../Other/backbutton.js';
import {findById} from '../lib/projecthelpers.js';



class UnitView extends Component {
    state = {
            unit_fields: [
                {id: 302, position: 2, label: 'Phone Number', fieldname: '+64273040964', fieldtype: 'text_phone'}
            ]
        }
    render() {
        return (
            <div className="Page">
                <BackButton />
                <div className="ProjectList">
                    <UnitViewList />
                    <UnitViewProgress />
                </div>
            </div>      
        );
    }
}

export default UnitView;