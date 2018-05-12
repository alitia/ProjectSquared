import React, { Component } from 'react';

//SECONDARY: Draws the checkbox label and checkbox box FIELD.
//This is a light label and a checkbox next to it
//(Left) The label of the check field in light text (editable)
//(Right) The checkbox
//PROPS: Receives email field id, label and data from LIST
class CheckBoxAddButton extends Component {
    state = {
            id: '',
            type: 'checkbox_addbutton',
            label: '',            
            data: '',
    }

    //ABOUT: Assigns the PROPS to the current STATE
    componentDidMount() {
    }

    //ACTION:
    //Render: CheckBox Container Field
    //Render: Light label
    //Render: Checkbox
    render(){
        return (
            <div className="checkBoxAdd_Button">                
                <h1 className="checkBoxAdd_ButtonText">Add Checkfield</h1>
            </div>   
        );
    } 
}
export default CheckBoxAddButton;
