import React, { Component } from 'react';

class LongField extends Component {
    constructor(){
        super()
        this.state = {
            long_field: [
                {id: 305, position: 5, label: 'Customer Notes', fieldname: 'Long Text Field', fieldtype: 'text_long'}
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
        else if(str.length > 250){
                event.preventDefault()
        }

    }
    update(e){

        const long_field = this.state.long_field
        const str = e.target.innerHTML

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            long_field.fieldname = str
        }
        
        this.setState({long_field})

    }
    render() {
        return (
            <div className="LongFieldContainer">
                {this.state.long_field.map(long =>
                <div className="LongField" key={long.id}>
                    <div className="cardlong">
                        <h1 className="cardh1normallong">{long.label}</h1>
                        <div className="slash"></div>
                        <h1 className="cardh1lightlongtext"
                            contentEditable = {true}
                            onBlur={this.update}
                            onKeyPress={this.onKeyPress}
                            >{long.fieldname}</h1>
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default LongField;