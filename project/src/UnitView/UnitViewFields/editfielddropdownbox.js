import React, { Component } from 'react';

//SECONDARY: Draws the edit FIELD.
//These are used in CREATEPROJECT VIEW
//(Left) A drop down box of field types
//(Left) The light text input of the field
//PROPS: Receives label, type, field if, project id, unit id, selected, and title from CORE
class EditFieldDropDownBox extends Component {
    state = {
            dd_label: '',
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

        this.setState({dd_label: this.props.dd_label})
    }

    //ABOUT: Ensures the drop down box redraws when it is passed a different selected value
    //especially if the page is refreshed
    componentWillReceiveProps(nextProps) {
        this.setState({ dd_label: nextProps.dd_label }) 
    }

    //ACTION: If the user refereshes the page, this will tell the drop down box what label it had selected before
    //otherwise it just returns the current selected label
    renderLabel() {
        
        if(this.state.dd_label === "label"){
            return "Label"
        }
        else if(this.state.dd_label === "phone"){
            return "Phone Number"
        }
        else if(this.state.dd_label === "email"){
            return "Email"
        }
        else if(this.state.dd_label === "long"){
            return "Long Text Box"
        }
        else if(this.state.dd_label === "checkboxes"){
            return "Check Boxes"
        }
        else if(this.state.dd_label === "short"){
            return "Short Text Box"
        }
        else{
            return this.state.dd_label
        }
    }
    //ACTION: sets the state to the selected item in the drop down
    select = (item) => {

        this.setState({selected: item.name})
        var name = item.name
        this.props.selectField(name)
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
    //A call back called renderField passes the selected field back to the card so the card knows how to look
    render() {
        return (
            <div className="container">
                <div className={"checkbox_condition_container"}>
                    <div className={"dropdown-container" + (this.state.listVisible ? "-show" : "")}>
                        <div className={"dropdown-display" + (this.state.listVisible ? "-clicked": "")} onClick={this.show}>
                            <div className={"caret" + (this.state.listVisible ? "-pointup" : "-pointdown")}></div>                 
                                <span className="ddboxoption">{this.renderLabel()}</span>
                                    <i className="fa fa-angle-down"></i>
                                    <div className={"dropdown-list"+ (this.state.listVisible ? "" : "-hidden")}>
                                            {this.dd_renderListItems()}                                
                                    </div>
                               
                        </div> 
                    </div>
                </div> 
            </div> 
        );
    }
}
export default EditFieldDropDownBox;
