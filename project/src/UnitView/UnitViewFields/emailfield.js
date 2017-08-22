import React, { Component } from 'react';

class EmailField extends Component {
    state = {
            email_field: [
                {id: 303, position: 3, label: 'Email', fieldname: 'stpierre.alitia@gmail.com', fieldtype: 'text_email'}
            ]
        }
    onKeyPress = (event) =>{
        const str = event.target.innerHTML
        if (event.charCode === 13){
            event.preventDefault()  
            const element = event.target
            element.blur()

        }
        else if(str.length > 30){
                event.preventDefault()
        }

    }
    update = (e) => {

        const email_field = this.state.email_field
        const str = e.target.innerHTML

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            email_field.fieldname = str
        }
        
        this.setState({email_field})

    }
    render(){
        return (
            <div className="EmailFieldContainer">
                {this.state.email_field.map(email =>
                <div className="EmailField" key={email.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{email.label}</h1>
                        <div className="slash"></div>
                        <h1 className="cardh1light" 
                            contentEditable = {true}
                            onBlur={this.update}
                            onKeyPress={this.onKeyPress}
                            >{email.fieldname}</h1>
                    </div>
                </div>)}   
            </div>   
        );
    }
    
}

export default EmailField;

