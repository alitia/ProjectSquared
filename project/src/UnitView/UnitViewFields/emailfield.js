import React, { Component } from 'react';

class EmailField extends Component {
    constructor(){
        super()
        this.state = {
            email_field: [
                {id: 303, position: 3, label: 'Email', fieldname: 'stpierre.alitia@gmail.com', fieldtype: 'text_email'}
            ]
        }
    }
    render() {
        return (
            <div className="EmailFieldContainer">
                {this.state.email_field.map(email =>
                <div className="EmailField" key={email.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{email.label}</h1>
                        <div className="slash"></div>
                        <h1 className="cardh1light">{email.fieldname}</h1>
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default EmailField;