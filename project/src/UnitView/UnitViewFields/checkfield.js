import React, { Component } from 'react';
import {saveCheckChange} from '../../lib/fieldassist.js'

class CheckField extends Component {
    state = {
            id: '',
            type: 'checkbox_node',
            bool: '',            
            data: ''
        } 
    componentDidMount() {
        this.setState({id: this.props.id})
        this.setState({data: this.props.data})
        this.setState({bool: this.props.bool})
    }   
    initialDraw(){

        if(this.state.bool === "true"){

        }
    } 
    //visually checks and unchecks the boxes       
    check = (e) => {

        if(e.target.className === "cardh1light"){
            if(e.target.nextSibling.className ==="checkField_uncheck"){
                e.target.nextSibling.className = "checkField_checked"
            }
            else{
                e.target.nextSibling.className = "checkField_uncheck"
            }
        }
        else if(e.target.className ==="checkBoxSet"){
            if(e.target.childNodes[1].className ==="checkField_uncheck"){
                e.target.childNodes[1].className = "checkField_checked"
            }
            else{
                e.target.childNodes[1].className = "checkField_uncheck"
            }
        }        
    }
    //toggles whether the box is checked or not
    update = (e) => {

        var str = e.target.innerHTML
        const p_id = this.props.projectId
        const u_id = this.props.unitId
        const f_id = this.props.fieldId
        const b_id = this.state.id

        if(e.target.className ==="checkField_uncheck"){
            e.target.className = "checkField_checked"
            str = "true"
        }
        else{
            e.target.className = "checkField_uncheck"
            str = "false"
        }

    saveCheckChange(p_id, u_id, f_id, b_id, str)
    }
    render() {
        if(this.state.bool === "true"){
            return (
            <div className="checkBoxSet" key={this.state.id} onClick={this.check}>
                <h1 className="cardh1light" >{this.state.data}</h1>
                <div className="checkField_checked" onClick={this.update}>{this.state.bool}</div>
            </div> 
            );
        }
        else{
            return (
            <div className="checkBoxSet" key={this.state.id} onClick={this.check}>
                <h1 className="cardh1light" >{this.state.data}</h1>
                <div className="checkField_uncheck" onClick={this.update}>{this.state.bool}</div>
            </div> 
            );
        }
    }
}

export default CheckField;