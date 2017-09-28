import React, { Component } from 'react';
import { saveData } from '../fieldservice.js';


class ShortField extends Component {
    state = {
            id: '',
            label: '',            
            data: '',
            unit_id: '',
            project_id: ''
        }
    componentDidMount() {
        this.setState({id: this.props.short_field.id})
        this.setState({label: this.props.short_field.label})
        this.setState({data: this.props.short_field.data})
        this.setState({unit_id: this.props.short_field.unit_id})
        this.setState({project_id: this.props.short_field.project_id})
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

        const short_field = this.state.data
        const str = e.target.innerHTML
        const p_id = this.props.project_id
        const u_id = this.props.unit_id
        const f_id = this.state.id

        console.log(p_id)

        if(str === ""){
            e.target.innerHTML = "..."
        }
        else{
            this.state.data = str
        }
        
        this.setState({data: this.state.data})

        saveData(p_id, u_id, f_id, str)

    }
    render() {
        return (
            <div className="ShortFieldContainer">
                <div className="ShortField" key={this.state.id}>
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

export default ShortField;