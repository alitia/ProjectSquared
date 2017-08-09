import React, { Component } from 'react';

class LongField extends Component {
    constructor(){
        super()
        this.state = {
            long_field: [
                {id: 305, position: 5, label: 'Customer Notes', fieldname: 'Long Text Field', fieldtype: 'text_long'}
            ]
        }
    }
    render() {
        return (
            <div className="LongFieldContainer">
                {this.state.long_field.map(long =>
                <div className="LongField" key={long.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{long.label}</h1>
                        <h1 className="cardh1light">{long.fieldname}</h1>
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default LongField;