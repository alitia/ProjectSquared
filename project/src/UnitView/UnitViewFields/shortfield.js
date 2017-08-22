import React, { Component } from 'react';

class ShortField extends Component {
    state = {
            short_field: [
                {id: 304, position: 4, label: 'Champion Name', fieldname: 'Short Text Field', fieldtype: 'text_short'}
            ]
        }
    onKeyPress = (event) =>{
        const str = event.target.innerHTML
        if (event.charCode === 13){
            event.preventDefault()  
            const element = event.target
            element.blur()

        }
        else if(str.length > 36){
                event.preventDefault()
        }

    }
    update = (e) => {

        const short_field = this.state.short_field
        const str = e.target.innerHTML

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            short_field.fieldname = str
        }
        
        this.setState({short_field})

    }
    render() {
        return (
            <div className="ShortFieldContainer">
                {this.state.short_field.map(short =>
                <div className="ShortField" key={short.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{short.label}</h1>
                        <div className="slash"></div>
                        <h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.update}
                            onKeyPress={this.onKeyPress}
                            >{short.fieldname}</h1>
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default ShortField;