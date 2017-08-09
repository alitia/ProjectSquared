import React, { Component } from 'react';

class ShortField extends Component {
    constructor(){
        super()
        this.state = {
            short_field: [
                {id: 304, position: 4, label: 'Champion Name', fieldname: 'Short Text Field', fieldtype: 'text_short'}
            ]
        }
    }
    render() {
        return (
            <div className="ShortFieldContainer">
                {this.state.short_field.map(short =>
                <div className="ShortField" key={short.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{short.label}</h1>
                        <h1 className="cardh1light">{short.fieldname}</h1>
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default ShortField;