import React, { Component } from 'react';
import CheckField from './checkfield.js'

class CheckBoxGroupField extends Component {
    state = {
            id: '',
            type: 'checkbox_group',
            label: '',            
            data: [],
        }  
    componentDidMount() {
        this.setState({id: this.props.checkboxgroup_field.id})
        this.setState({label: this.props.checkboxgroup_field.label})
        this.convertResult(this.props.checkboxgroup_field.data)
    }  

    //converts object array into array for mapping by MPV_List
    convertResult(res){
        var arr = []
        var count = 0

        for (var item in res){
            arr[count] = res[item]
            count++
        }
        if(typeof arr === 'undefined'){
            //something is broken, we have a checkfieldgroup with no checks.
            console.log("something is broken, we have a checkfieldgroup with no checks")               
        }
        else{
            this.setState({data: arr})
        }  
    }

    /*Needs to check the checkbox or vice versa */
    update = (e) => {

       
        
    }
    render() {
        return (
            <div className="CheckBoxGroupFieldContainer">
                <div className="CheckBoxGroupField" key={this.state.id}>
                    <div className="cardCheckBox">
                        <h1 className="cardh1normal">{this.state.label}</h1>
                            {this.state.data.map(check => <CheckField key={check.id} {...check} projectId = {this.props.project_id} unitId = {this.props.unit_id} action={this.props.action} fieldId={this.props.checkboxgroup_field.id}/>)}
                    </div>
                </div>
            </div>   
        );
    }
}

export default CheckBoxGroupField;