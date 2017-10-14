import React, { Component } from 'react';
import {saveFieldChange} from '../../lib/fieldassist.js'


class LongField extends Component {
    state = {
            id: '',
            type: 'long',
            label: '',            
            data: '',
    }
    componentDidMount() {
        this.setState({id: this.props.long_field.id})
        this.setState({label: this.props.long_field.label})
        this.setState({data: this.props.long_field.data})
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
    update = (e) => {

        const p_id = this.props.project_id
        const u_id = this.props.unit_id
        const f_id = this.state.id

        const long_field = this.state.data
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
    render() {
        return (
            <div className="LongFieldContainer">
                <div className="LongField" key={this.state.id}>
                    <div className="cardlong">
                        <h1 className="cardh1normallong">{this.state.label}</h1>
                        <div className="slash"></div>
                        <h1 className="cardh1lightlongtext"
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

export default LongField;