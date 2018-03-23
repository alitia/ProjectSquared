import React, { Component } from 'react';
import {pcv_savefieldtypechange, pcv_savefieldlabelchange} from '../../db/db_createprojectview.js'

//SECONDARY: Draws the edit FIELD.
//These are used in CREATEPROJECT VIEW
//(Left) A drop down box of field types
//(Left) The light text input of the field
//PROPS: Receives label, type, field if, project id, unit id, selected, and title from CORE
class EditField extends Component {
    constructor(){
        super()
        this.updateLabel = this.updateLabel.bind(this)
    }
    state = {
            label: '',
            project_id: '',
            unit_id: '',
            field_id: '',
            type: '',
            position: '',
            listVisible: false,
            selected: 'Select a field type',
            fields: [{
            name: "Short Text Box"
            }, {
            name: "Long Text Box"
            }, {
            name: "Check Boxes"
            }, {
            name: "Email"
            }, {
            name: "Phone Number"
            }, {
            name: "Label"
            }]
        }
    //ABOUT: Assigns the PROPS to the current STATE
    componentDidMount() {

        //Did this so when the page is reloaded, the selected type of edit field
        //looks good
        if(this.props.selected === "short"){
            this.setState({selected: "Short Text Box"})
        }
        else if(this.props.selected === "long"){
            this.setState({selected: "Long Text Box"})
        }
        else if(this.props.selected === "phone"){
            this.setState({selected: "Phone Number"})
        }
        else if(this.props.selected === "email"){
            this.setState({selected: "Email"})
        }
        else if(this.props.selected === "label"){
            this.setState({selected: "Label"})
        }
        else if(this.props.selected === "checkboxes"){
            this.setState({selected: "Check Boxes"})
        }

        this.setState({label: this.props.label})
        this.setState({type: this.props.type})
        this.setState({field_id: this.props.id})
        this.setState({project_id: this.props.projectId})
        this.setState({unit_id: this.props.unitId})
        this.setState({title: this.props.title})
    }

    //ACTION: when the user loses focus on the field, save their input.
    //If empty, set label to 'Enter a label'
    //pcv_savefieldlabelchange: saves the label text to the field in the db
    updateLabel = (event) => {

        var str = event.target.innerHTML
        var p_id = this.props.projectId
        var u_id = this.props.unitId
        var f_id = this.props.fieldId 
        var type = this.state.selected      

        if(str === ""){
            event.target.innerHTML = "Enter a label"
            str = event.target.innerHTML = "Enter a label"
        }

        if(p_id === void(0)){
            
        } 
        else{
            pcv_savefieldlabelchange(p_id, u_id, f_id, str, type)
        }       
    }

    //ACTION: Gets the project, unit and field ID from props and saves the type to the db
    //pcv_savefieldtypechange: saves the new field type to the db
    saveFieldType = (field_type) => {
        var p_id = this.props.projectId
        var u_id = this.props.unitId
        var f_id = this.props.fieldId
        
        if(p_id === void(0)){

        }
        else{
            pcv_savefieldtypechange(p_id, u_id, f_id, field_type)
        }        
    }

    //ACTION: calls the render related to the field type
    //saveFieldType: Saves the field type to the db for the field id
    renderField = () =>{
        var field = []
        var type = ""
        if(this.state.selected === "Label"){
            field = this.renderlabelfield()
            type = "label"
        }
        else if(this.state.selected === "Phone Number"){
            field = this.renderphonefield()
            type = "phone"
        }
        else if(this.state.selected === "Email"){
            field = this.renderemailfield()
            type = "email"
        }
        else if(this.state.selected === "Long Text Box"){
            field = this.renderlongfield()
            type = "long"
        }
        else if(this.state.selected === "Check Boxes"){
            field = this.rendercheckfield()
            type = "checkboxes"
        }
        else if(this.state.selected === "Short Text Box"){
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

    //ACTION: render a label field
    renderlabelfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }

    //ACTION: render a short field
    rendershortfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }

    //ACTION: render a phone field
    renderphonefield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }

    //ACTION: render an email field
    renderemailfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }

    //ACTION: render a long field
    renderlongfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }

    //ACTION: render a check field
    rendercheckfield = () => {
        var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label        
    }

    //ACTION: update the appearance on the card based on the selection from the dropdown
    updateCard = (card) => {

        var str = card.target.innerHTML
        //call back up the chain and get the card class
        

        if(str === "Long Text Box"){
            //change the div to cardlong
            
            str.target.className === "cardlong"
        }
        else if(str === "Short Text Box"||str === "Phone Number"|| str === "Email"){
            //change the div to card
        }
        else if(str === "Check Boxes"){
            card.target.parentNode.parentNode.parentNode.parentNode.parentNode.className = "cardCheckBox"
            //create the first check box for the box
            var checkBox = document.createElement('div')
            checkBox.className = "checkField_uncheck"

            card.target.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(checkBox)
            var x = card.target.parentNode.parentNode.parentNode.parentNode.classList
        }
    }

    //ACTION: sets the state to the selected item in the drop down
    select = (item) => {

        this.setState({selected: item.name})
        //Changes to the appearance of the card based on the type selected should happen here
        //CheckBoxGroupFieldContainer
        //CheckBoxGroupField
    }

    //ACTION: set the drop down box to be visibly open
    show = () => {
        this.setState({ listVisible: true });
        document.addEventListener("click", this.hide);
    }

    //ACTION: set the drop down box to be visibly closed
    hide = () => {
        this.setState({ listVisible: false });
        document.removeEventListener("click", this.hide);
    }

    //ACTION: go through the list of possible fields and render the drop down options list
    //select: bind a select function to the item in the drop down list
    dd_renderListItems = () => {
        var items = [];
        for (var i = 0; i < this.state.fields.length; i++) {
            var item = this.state.fields[i];
            items.push(
                <div onClick={this.select.bind(null, item)}>
                            <span>{item.name}</span>
                        </div>
            );
        } 
        return items;
    }   

    //ACTION:
    //Render: Drop Down Box with a list of field types
    //Render: A label with light text
    render() {
        return (
            <div className="test">
                <div className={"card" + (this.state.listVisible ? "-overflowallow" : "")}>
                    <div className={"dropdown-container" + (this.state.listVisible ? "-show" : "")}>
                        <div className={"dropdown-display" + (this.state.listVisible ? "-clicked": "")} onClick={this.show}>
                            <div className={"caret" + (this.state.listVisible ? "-pointup" : "-pointdown")}></div>                 
                            <span className="ddboxoption">{this.state.selected}</span>
                                <i className="fa fa-angle-down"></i>
                                <div className={"dropdown-list"+ (this.state.listVisible ? "" : "-hidden")} onClick={this.updateCard}>
                                        {this.dd_renderListItems()}                                
                                </div>
                        </div>   
                    </div> 
                    {this.renderField()}
                </div> 
            </div> 
        );
    }
}
export default EditField;
