import React, { Component } from 'react';
import {saveFieldChange} from '../../lib/fieldassist.js'

class PhoneField extends Component {
    state = {
            id: '',
            type: 'phone',
            label: '',            
            data: '',
    }
    componentDidMount() {
        this.setState({id: this.props.phone_field.id})
        this.setState({label: this.props.phone_field.label})
        this.setState({data: this.props.phone_field.data})
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
    update = (e) => {

        const str = e.target.innerHTML
        const p_id = this.props.project_id
        const u_id = this.props.unit_id
        const f_id = this.state.id

        const phone_field = this.state.data

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            this.setState({data: str})
        }
        
        this.setState({data: this.state.data})
        saveFieldChange(p_id, u_id, f_id, str)


    }
    render = () => {
        return (
            <div className="PhoneFieldContainer">
                <div className="PhoneField" key={this.state.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{this.state.label}</h1>
                        <div className="slash"></div>
                        <h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.update}
                            onKeyPress={this.onKeyPress}
                            >{this.state.data}</h1>
                    </div>
                </div>   
            </div>   
        );
    }
}

export default PhoneField;