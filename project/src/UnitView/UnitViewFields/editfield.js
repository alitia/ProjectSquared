import React, { Component } from 'react';
import {pcv_savefieldtypechange, 
    pcv_savefieldlabelchange, 
    pcv_savecheckfieldtypechange,
} from '../../db/db_createprojectview.js'
import CheckBoxContainer from './EditFields/CheckBoxContainer.js'
import EditFieldDropDownBox from './editfielddropdownbox.js'

//SECONDARY: Draws the edit FIELD.
//These are used in CREATEPROJECT VIEW
//(Left) A drop down box of field types
//(Left) The light text input of the field
//PROPS: Receives label, type, field if, project id, unit id, selected, and title from CORE
class EditField extends Component {
    constructor(){
        super()
        this.updateLabel = this.updateLabel.bind(this)
        this.onKeyPress = this.onKeyPress.bind(this)
        this.renderField = this.renderField.bind(this)
    }
    state = {
            label: 'Enter a title for the field',
            project_id: '',
            unit_id: '',
            field_id: '',
            type: '',
            position: '',
            listVisible: false,
            checkBoxCard: '',
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

    //ACTION: stops the component from updating if it is a checkbox
    //prevents an infinite loop
    shouldComponentUpdate = (nextProps, nextState) => {
    
        if(this.state.checkBoxCard === "CheckBox" && nextState.type === "checkboxes"){
            this.setState({checkBoxCard: ""})
            return false;
        }
        else{
            return true;
        }
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
            event.target.innerHTML = "Enter a title for the field"
            str = event.target.innerHTML = "Enter a title for the field"
        }

        if(p_id === void(0)){
            
        } 
        else{
            pcv_savefieldlabelchange(p_id, u_id, f_id, str, type)
        }       
    }

    //ACTION: Gets the project, unit and field ID from props and saves the type to the db
    //pcv_savefieldtypechange: saves the new field type to the db and wipes any existing checkbox data if it existed
    //pcv_savecheckfieldtypechange: save the new checkfield type to the db with a first label
    saveFieldType = (field_type) => {
        var p_id = this.props.projectId
        var u_id = this.props.unitId
        var f_id = this.props.fieldId
        
        if(p_id === void(0)){

        }
        else if(!(field_type == "checkboxes")){

            pcv_savefieldtypechange(p_id, u_id, f_id, field_type)
        }
        else{
            var b_id = "" + this.props.fieldId + 1
            pcv_savecheckfieldtypechange(p_id, u_id, f_id, b_id, field_type)
        }        
    }

    //ACTION: calls the render related to the field type
    //saveFieldType: Saves the field type to the db for the field id
    renderField = (data) =>{

        var type = ""
        this.setState({selected: data})
        
        if(data === "Label"){
            type = "label"
        }
        else if(data === "Phone Number"){
            type = "phone"
        }
        else if(data === "Email"){
            type = "email"
        }
        else if(data === "Long Text Box"){
            type = "long"
        }
        else if(data === "Check Boxes"){
            type = "checkboxes"
        }
        else if(data === "Short Text Box"){
            type = "short"
        }
        if(!type == ""){
        
            if(type === "checkboxes"){
                this.saveFieldType(type)
            }
            else{
                this.saveFieldType(type)
            }            
        }

        this.setState({type: type})
    }

    //ACTION: prevent the user from adding too many letters or illegal keys
    onKeyPress = (event) =>{
        const str = event.target.innerHTML
        if (event.charCode === 13){
            event.preventDefault()  
            const element = event.target
            element.blur()
        }
        else if(str.length > 60){
            event.preventDefault()
        }
    }

    //ACTION: update the appearance on the card based on the current state
    updateCard = (type) => {

        var str = ""
        
        if(!type === ""){
            str = type
        }
        else{
            str = this.state.selected
        }

        //return a header appropriate for normal fields
        if(str === "Short Text Box"||str === "Phone Number"|| str === "Email" || str === "Long Text Box"){
            
            var label = []
            label.push(<h1 className="cardh1light"
                            contentEditable = {true}
                            onBlur={this.updateLabel}
                            onKeyPress={this.onKeyPress}
                            >{this.state.label}</h1>)
            return label 
        }
        else if(str === "Check Boxes"){

            //if the number of containers is 0
            var p_id = this.props.projectId
            var u_id = this.props.unitId
            var f_id = this.props.fieldId            
            var b_id = "" + this.props.fieldId + 1

            this.setState({checkBoxCard: "CheckBox"})

            return <CheckBoxContainer 
                data={str} 
                key={f_id} 
                project_id={p_id} 
                unit_id={u_id}
                box_id={b_id} />
        }
    }

    //ACTION: tells render what kind of card to draw
    //if Checkboxes are active, draw checkcard
    check_checkBox = (status) => {

        if (status === "true"){
            this.setState({checkBoxCard: "CheckBox"})
        }
        else{
            this.setState({checkBoxCard: ''})
        }
    }

    //ACTION:
    //Render: Drop Down Box with a list of field types
    //Render: A label with light text
    //ACTION: renderField(): sets the state of the editfield as selected by the checkbox
    //ACTION: updatecard(): draw the content within the card
    render() {
        return (
            <div className="test">
                <div className={"card" + (this.state.checkBoxCard) + (this.state.listVisible ? "-overflowallow" : "")}>
                    <EditFieldDropDownBox selectField={this.renderField}/>
                        {this.updateCard()}                                 
                </div> 
            </div> 
        );
    }
}
export default EditField;

//NEXT: create a list component that displays the correct items based on the drop down box selection

///maybe we need to change the way the render field is constructed by making it so the card contains the drop down box
//as a component. The component has a condition that causes the checkbox add button to become visible if selected
//then there is a second component underneath, the checkfield container, that appears if checkboxes are slected or 
//added

//the dropdownbox is passed a method that tells the edit field how to look


// If the value of the input fields is important (which they apparently are), and if they can change (which the obviously can), then React should be aware of them, typically in state.
// The 'standard' (on only) react way to maintain the contents of the input fields is:

// put the content of the input fields in state as well,
// include something like value={this.state.foo} and onChange={this._onChange()} to the render of each input field
// include the _onChange() function to the form to handle input changes
// That way, whenever the form is re-rendered (after each setState()), the input values are also preserved.

// PS: The question title "stop reactjs component from rerender on state change" does not really cover the question from text: you are asking for a partial re-render: do re-render the show/hide extra fields based on checkbox, but do not re-render input fields.


    //ACTION: prevent the user from adding too many letters or illegal keys
    // onCheckKeyPress = (event) =>{
    //     const str = event.target.innerHTML
    //     if (event.charCode === 13){
    //         event.preventDefault()  
    //         const element = event.target
    //         element.blur()
    //     }
    //     else if(str.length > 60){
    //         event.preventDefault()
    //     }
    // }
