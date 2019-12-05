import React, { Component } from 'react';
import {pcv_savefieldtypechange, 
    pcv_savefieldlabelchange, 
    pcv_savecheckfieldtypechange,
    } from '../../db/db_createprojectview.js'
import {uni_deletefield} from '../../db/db_universal.js'
import UnitViewOptionsButton from './EditFields/unitview_optionsbutton.js'
import CheckBoxContainer from './EditFields/CheckBoxContainer.js'
import CheckBoxAddButton from './EditFields/CheckBoxAddButton.js'
import EditFieldDropDownBox from './editfielddropdownbox.js'
import { DeleteButton } from '../../Other/deletebutton.js';

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
        this.deleteCheck = this.deleteCheck.bind(this)
        this.deleteProceed = this.deleteProceed.bind(this)
        this.deleteCancel = this.deleteCancel.bind(this)
    }
    state = {
            label: '',
            saved_label: '',
            project_id: '',
            unit_id: '',
            field_id: '',
            type: '',
            position: '',
            listVisible: false,
            checkBoxCard: '',
            selected: 'Select a field type',
            data: '',
            delete_check: false,
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

    //ABOUT: Ensures the checkbox draws the data that has just been passed to it when it is created
    componentWillReceiveProps(nextProps) {

        this.setState({ dd_label: nextProps.dd_label }) 
    }

    //ACTION: when the user loses focus on the field, save their input.
    //If empty, set label to 'Enter a label'
    //pcv_savefieldlabelchange: saves the label text to the field in the db
    updateLabel = (event) => {

        var str = event.target.value
        var p_id = this.props.projectId
        var u_id = this.props.unitId
        var f_id = this.props.fieldId 
        var type = this.state.selected      

        //if the field type hasn't been selected, or the field is delete/blank, don't save
        if(str === ""){
            event.target.value = ""
            str = event.target.value = ""
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
        else if(!(field_type === "checkboxes")){

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
        if(!(type === "")){
        
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
        this.setState({label: event.target.value})
    }

    //ACTION: update the appearance on the card based on the current state
    //ACTION: draws a checkbox container automatically if its picked
    //ACTION: if the page is refreshed, draw components based on props
    updateCard = (type) => {

        var str = ""
        var label = []
        
        if(!type === ""){
            str = type
        }
        else{
            str = this.state.selected
        }

        //return a header appropriate for normal fields
        if(str === "Short Text Box"||str === "Phone Number"|| str === "Email" || str === "Long Text Box" || str === "Label"){
            
            if(this.state.label === ""){
                label.push(<form className="form_short">
                        <input type="text" 
                            className="shortFieldInput" 
                            placeholder="Enter a label"  
                            onBlur={this.updateLabel} 
                            onChange={this.onKeyPress} 
                            maxLength="20" 
                            size="16"/>
                    </form>)
            }
            else{
                label.push(<form className="form_short">
                        <input type="text" 
                            className="shortFieldInput" 
                            value={this.state.label}
                            onBlur={this.updateLabel} 
                            onChange={this.onKeyPress} 
                            maxLength="20" 
                            size="16"/>
                    </form>)
            }
            return label         
        }
        else if(str === "Check Boxes"){

            //if the number of containers is 0
            var p_id = this.props.projectId
            var u_id = this.props.unitId
            var f_id = this.props.fieldId            
            var ref = this.props.data
            var arr = []
            var count = 0

            //Draws a checkbox container even if the parent has not sent through the new props
            if(ref===""){
                label.push(<CheckBoxContainer 
                data={str} 
                key={f_id} 
                project_id={p_id} 
                field_id={f_id}
                unit_id={u_id}
                box_id={f_id + "1"}
                box_label={"Enter the check option label"} />)
            }
            else{

                for (var item in ref){
                    for (var item2 in ref[item]){
                            var a = ref[item][item2]
                            arr[count] = a                                      
                    }
                    count++
                }

                for (var val in arr){
                    var id_val = arr[val].id
                    var data_val = arr[val].data
                    
                    label.push(<CheckBoxContainer 
                    data={str} 
                    key={id_val} 
                    project_id={p_id} 
                    field_id={f_id}
                    unit_id={u_id}
                    box_id={id_val}
                    box_label={data_val} />)
                }
            }            
            
            label.push(<CheckBoxAddButton 
                    label={data_val} 
                    id={id_val} 
                    project_id={p_id} 
                    field_id={f_id}
                    unit_id={u_id}
                    action={this.reloadFields()}/>)
            this.setState({checkBoxCard: "CheckBox"})
            return label
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

    //ACTION: If the delete button is clicked cause delete options to appear inside the card
    deleteCheck = (card) => {

        if(this.state.delete_check === false){
            this.setState({delete_check: true})
            var savedText = this.state.label
            this.setState({saved_label: savedText})
            this.setState({label: "Delete the field?"})

            var deleteset = document.createElement('div')
            deleteset.className = "deleteSet"

            var confirmIcon = document.createElement('div')
            confirmIcon.className = "deleteOKIcon"
            confirmIcon.addEventListener('click', this.deleteProceed)

            var cancelIcon = document.createElement('div')
            cancelIcon.className = "deleteCancelIcon"
            cancelIcon.addEventListener('click', this.deleteCancel)

            deleteset.appendChild(confirmIcon)
            deleteset.appendChild(cancelIcon)

            card.target.parentNode.parentNode.style.display = "none"

            //if the card is a checkbox card...
            if(this.state.type === "checkboxes"){
                card.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0].appendChild(deleteset)
            }
            else{
                card.target.parentNode.parentNode.parentNode.appendChild(deleteset)
            }
        }
        
    }
    
    //ACTION: delete the field then reload the page
    deleteProceed = (event) => {

        var f_id = this.props.fieldId
        var u_id = this.props.unitId
        var p_id = this.props.projectId
        this.setState({delete_check: false})
        
        uni_deletefield(p_id, u_id, f_id)
        this.reloadFields()
        
    }
    //ACTION: Use the callback to redraw the fields
    reloadFields = () => {

        var u_id = this.props.unitId
        var p_id = this.props.projectId
        this.props.action(p_id, u_id)
    }

    //ACTION: restore the label of the card and hide the delete options
    deleteCancel = (card) => {

        var label = this.state.saved_label
        var set = ""
        this.setState({delete_check: false})

        //restore the original label
        this.setState({label: label})

        //if card isnt a checkbox card
        if(this.state.type === "checkboxes"){
            set = card.target.parentNode.parentNode
            set.removeChild(set.children[1])
        }
        else{
            card.target.parentNode.parentNode.children[2].style.display = "block"
            set = card.target.parentNode.parentNode
            set.removeChild(set.children[3])
            
        }
    }

    //ACTION: get the correct label to display in the drop down
    getLabel = () => {
        if(!(this.state.type === "")){
            return this.props.selected
        }
        else{
            return this.state.type
        }
    }

    //ACTION:
    //Render: Drop Down Box with a list of field types
    //Render: A label with light text
    //ACTION: renderField(): sets the state of the editfield as selected by the checkbox
    //ACTION: updatecard(): draw the content within the card
    render() {
        return (
            <div>
                <div className={"card" + (this.state.checkBoxCard) + (this.state.listVisible ? "-overflowallow" : "")}>
                    <EditFieldDropDownBox selectField={this.renderField} dd_label={this.state.selected}/>
                            {this.updateCard()}
                    <UnitViewOptionsButton unitName={this.props.projectName} deleteCheck={this.deleteCheck}/>  
                </div>                                
            </div>
        );
    }
}
export default EditField;

