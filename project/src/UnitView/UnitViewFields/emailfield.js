import React, { Component } from 'react';
import {saveFieldChange} from '../../lib/fieldassist.js'


class EmailField extends Component {
    state = {
            id: '',
            type: 'email',
            label: '',            
            data: '',
    }
    componentDidMount() {
        this.setState({id: this.props.email_field.id})
        this.setState({label: this.props.email_field.label})
        this.setState({data: this.props.email_field.data})
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

        const p_id = this.props.project_id
        const u_id = this.props.unit_id
        const f_id = this.state.id
        const str = e.target.innerHTML

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            this.setState({data: str})
        }
        
        this.setState({data: this.state.data})
        saveFieldChange(p_id, u_id, f_id, str)

    }
    render(){
        return (
            <div className="EmailFieldContainer">
                <div className="EmailField" key={this.state.id}>
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

export default EmailField;

