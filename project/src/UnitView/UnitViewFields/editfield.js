import React, { Component } from 'react';
import {saveFieldTypeChange, saveFieldLabelChange} from '../../lib/fieldassist.js'


class EditField extends Component {
    constructor(){
        super()
        this.updateLabel = this.updateLabel.bind(this)
    }
    state = {
            label: 'Enter the label title',
            project_id: '',
            unit_id: '',
            field_id: '',
            type: '',
            position: '',
            listVisible: false,
            selected: '',
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

        this.setState({label: this.props.label})
        this.setState({type: this.props.type})
        this.setState({field_id: this.props.id})
        this.setState({project_id: this.props.projectId})
        this.setState({unit_id: this.props.unitId})
        this.setState({selected: this.props.selected})
        this.setState({title: this.props.title})
    }
    updateLabel = (e) => {

        var str = e.target.innerHTML
        var p_id = this.props.projectId
        var u_id = this.props.unitId
        var f_id = this.props.fieldId 
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
        if(this.state.selected === "Label"){
            field = this.renderlabelfield()
            type = "Label"
        }
        else if(this.state.selected === "Phone Field"){
            field = this.renderphonefield()
            type = "Phone Field"
        }
        else if(this.state.selected === "Email Field"){
            field = this.renderemailfield()
            type = "Email Field"
        }
        else if(this.state.selected === "Long Text Box"){
            field = this.renderlongfield()
            type = "Long Text Box"
        }
        else if(this.state.selected === "Checkfields"){
            field = this.rendercheckfield()
            type = "Checkfields"
        }
        else if(this.state.selected === "Short Text Box"){
            field = this.rendershortfield()
            type = "Short Text Box"
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
                            >{this.state.label}</h1>)
            return label        
    }
    rendershortfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }
    renderphonefield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }
    renderemailfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }
    renderlongfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }
    rendercheckfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }
    select = (item) => {
        console.log("item selected: " + item.name)
        this.state.selected = item.name;
    }
    show = () => {
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
                        <span className="ddboxoption">{this.state.selected}</span>
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
