import React, { Component } from 'react';

class PhoneField extends Component {
    constructor(){
        super()
        this.state = {
            phone_field: [
                {id: 302, position: 2, label: 'Phone Number', fieldname: '+64273040964', fieldtype: 'text_phone'}
            ]
        }
        this.update = this.update.bind(this)
        this.onKeyPress = this.onKeyPress.bind(this)
    }
    onKeyPress = (event) =>{
        const str = event.target.innerHTML
        if (event.charCode === 13){
            event.preventDefault()  
            const element = event.target
            element.blur()

        }
        else if(!(event.key >= 0) && !(event.key <= 9)){
            if(event.key === '+' || event.key==="(" || event.key===")"){

            }
            else{
                event.preventDefault()
            }            
        }
        else if(str.length > 17){
                event.preventDefault()
        }

    }
    update(e){

        const phone_field = this.state.phone_field
        const str = e.target.innerHTML

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            phone_field.fieldname = str
        }
        
        this.setState({phone_field})

    }
    render() {
        return (
            <div className="PhoneFieldContainer">
                {this.state.phone_field.map(phone =>
                <div className="PhoneField" key={phone.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{phone.label}</h1>
                        <div className="slash"></div>
                        <h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.update}
                            onKeyPress={this.onKeyPress}
                            >{phone.fieldname}</h1>
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default PhoneField;