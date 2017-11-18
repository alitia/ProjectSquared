import React, { Component } from 'react';
import {saveFieldTypeChange, saveFieldLabelChange} from '../../lib/fieldassist.js'


class EditField extends Component {
    state = {
            label: 'Enter the label title',
            project_id: '',
            unit_id: '',
            field_id: '',
            type: '',
            position: '',
            listVisible: false,
            selected: {name: 'Select field type'},
            fields: [{
            name: "Short Text Box"
            }, {
            name: "Long Text Box"
            }, {
            name: "Checkfields"
            }, {
            name: "Email Field"
            }, {
            name: "Phone Field"
            }, {
            name: "Label"
            }]
        }
    componentDidMount() {

    }
    updateLabel = (e, values) => {

        var str = e.target.innerHTML
        var p_id = this.props.project_id
        var u_id = this.props.unit_id
        var f_id = this.props.field_id 
        var type = this.state.selected      

        if(str === ""){
            e.target.innerHTML = "Enter a label"
            str = e.target.innerHTML = "Enter a label"
        }
        if(p_id === void(0)){
            
        } 
        else{
            saveFieldLabelChange(p_id, u_id, f_id, str, type)
        }       
    }
    saveFieldType = (field_type) => {
        var p_id = this.props.projectId
        var u_id = this.props.unitId
        var f_id = this.props.fieldId
        
        if(p_id === void(0)){

        }
        else{
            saveFieldTypeChange(p_id, u_id, f_id, field_type)
        }        
    }
    renderField = () =>{
        var field = []
        var type = ""
        if(this.state.selected.name === "Label"){
            field = this.renderlabelfield()
            type = "label"
        }
        else if(this.state.selected.name === "Phone Field"){
            field = this.renderphonefield()
            type = "phone"
        }
        else if(this.state.selected.name === "Email Field"){
            field = this.renderemailfield()
            type = "email"
        }
        else if(this.state.selected.name === "Long Text Box"){
            field = this.renderlongfield()
            type = "long"
        }
        else if(this.state.selected.name === "Checkfields"){
            field = this.rendercheckfield()
            type = "checkboxes"
        }
        else if(this.state.selected.name === "Short Text Box"){
            field = this.rendershortfield()
            type = "short"
        }
        if(type === ""){
        }
        else{
            this.saveFieldType(type)
        }
        return field
    }
    renderlabelfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >Enter the label</h1>)
            return label        
    }
    rendershortfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >Enter the field title</h1>)
            return label        
    }
    renderphonefield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >Enter the field title</h1>)
            return label        
    }
    renderemailfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >Enter the field title</h1>)
            return label        
    }
    renderlongfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >Enter the field title</h1>)
            return label        
    }
    rendercheckfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel(event.target, this.props)}
                            onKeyPress={this.onKeyPress}
                            >Enter the field title</h1>)
            return label        
    }
    select = (item) => {
        console.log("item selected: " + item.name)
        this.state.selected.name = item.name;
    }
    show = () => {
        console.log("got to show")
        this.setState({ listVisible: true });
        document.addEventListener("click", this.hide);
    }
    hide = () => {
        this.setState({ listVisible: false });
        document.removeEventListener("click", this.hide);
    }
    renderListItems = () => {

        var items = [];
        for (var i = 0; i < this.state.fields.length; i++) {
            var item = this.state.fields[i];
            items.push(<div onClick={this.select.bind(null, item)}>
                            <span>{item.name}</span>
                        </div>);
        } 
        return items;
    }    
render() {
        return (
            //add a caret
            <div className={"card" + (this.state.listVisible ? "-overflowallow" : "")}>
                <div className={"dropdown-container" + (this.state.listVisible ? "-show" : "")}>
                    <div className={"dropdown-display" + (this.state.listVisible ? "-clicked": "")} onClick={this.show}>
                        <div className={"caret" + (this.state.listVisible ? "-pointup" : "-pointdown")}></div>                 
                        <span className="ddboxoption">{this.state.selected.name}</span>
                            <i className="fa fa-angle-down"></i>
                            <div className={"dropdown-list"+ (this.state.listVisible ? "" : "-hidden")}>
                                    {this.renderListItems()}                                
                            </div>
                    </div>   
                </div> 
                {this.renderField()}
            </div>  
        );
    }
}

export default EditField;
