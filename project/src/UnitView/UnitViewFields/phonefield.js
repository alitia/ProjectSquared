import React, { Component } from 'react';

class PhoneField extends Component {
    constructor(){
        super()
        this.state = {
            phone_field: [
                {id: 302, position: 2, label: 'Phone Number', fieldname: '+64273040964', fieldtype: 'text_phone'}
            ]
        }
    }
    render() {
        return (
            <div className="PhoneFieldContainer">
                {this.state.phone_field.map(phone =>
                <div className="PhoneField" key={phone.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{phone.label}</h1>
                        <div className="slash"></div>
                        <h1 className="cardh1light">{phone.fieldname}</h1>
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default PhoneField;