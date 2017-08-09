import React, { Component } from 'react';

class CheckBoxGroupField extends Component {
    constructor(){
        super()
        this.state = {
            checkboxgroup_field: [
                {id: 306, position: 6, label: 'Completed Steps', fieldname: 'Completed Steps', fieldtype: 'checkbox_group'}
            ]
        }
    }
    render() {
        return (
            <div className="CheckBoxGroupFieldContainer">
                {this.state.checkboxgroup_field.map(checkboxgroup =>
                <div className="CheckBoxGroupField" key={checkboxgroup.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{checkboxgroup.label}</h1>
                        <h1 className="cardh1light">{checkboxgroup.fieldname}</h1>
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default CheckBoxGroupField;