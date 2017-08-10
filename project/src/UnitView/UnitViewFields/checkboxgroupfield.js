import React, { Component } from 'react';

class CheckBoxGroupField extends Component {
    constructor(){
        super()
        this.state = {
            checkboxgroup_field: [
                {id: 306, position: 6, label: 'Completed Steps', fieldname: 'Completed Steps', fieldtype: 'checkbox_group',
                option1label: 'check 1', option1bool: true, option2label: 'check 2', option2bool: true, option1label: 'check 3', option3bool: false, }
            ]
        }
    }
    render() {
        return (
            <div className="CheckBoxGroupFieldContainer">
                {this.state.checkboxgroup_field.map(checkboxgroup =>
                <div className="CheckBoxGroupField" key={checkboxgroup.id}>
                    <div className="cardCheckBox">
                        <h1 className="cardh1normal">{checkboxgroup.label}</h1>

                        <div className="checkBoxSet">
                            <h1 className="cardh1light">{checkboxgroup.option1label}</h1>
                            <div className="checkField"></div>
                        </div>
                        <div className="checkBoxSet">
                            <h1 className="cardh1light">{checkboxgroup.option2label}</h1>
                            <div className="checkField"></div>
                        </div>
                        <div className="checkBoxSet">
                            <h1 className="cardh1light">{checkboxgroup.option3label}</h1>
                            <div className="checkField"></div>
                        </div>
                        
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default CheckBoxGroupField;