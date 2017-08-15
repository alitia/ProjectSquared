import React, { Component } from 'react';

class CheckBoxGroupField extends Component {
    constructor(){
        super()
        this.state = {
            checkboxgroup_field: [
                {id: 306, position: 6, label: 'Completed Steps', fieldname: 'Completed Steps', fieldtype: 'checkbox_group',
                option1label: 'check 1', option1bool: true, 
                option2label: 'check 2', option2bool: true, 
                option3label: 'check 3', option3bool: false, }
            ]
        }
        this.update = this.update.bind(this)
        this.check = this.check.bind(this)
    }
    check(e){

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
    /*Needs to check the checkbox or vice versa */
    update(e){

        if(e.target.className ==="checkField_uncheck"){
            e.target.className = "checkField_checked"
        }
        else{
            e.target.className = "checkField_uncheck"
        }
        
    }
    render() {
        return (
            <div className="CheckBoxGroupFieldContainer">
                {this.state.checkboxgroup_field.map(checkboxgroup =>
                <div className="CheckBoxGroupField" key={checkboxgroup.id}>
                    <div className="cardCheckBox">
                        <h1 className="cardh1normal">{checkboxgroup.label}</h1>

                        <div className="checkBoxSet" onClick={this.check}>
                            <h1 className="cardh1light" >{checkboxgroup.option1label}</h1>
                            <div className="checkField_uncheck" onClick={this.update}>{checkboxgroup.option1bool}</div>
                        </div>
                        <div className="checkBoxSet" onClick={this.check}>
                            <h1 className="cardh1light" >{checkboxgroup.option2label}</h1>
                            <div className="checkField_uncheck" onClick={this.update}></div>
                        </div>
                        <div className="checkBoxSet" onClick={this.check}>
                            <h1 className="cardh1light" >{checkboxgroup.option3label}</h1>
                            <div className="checkField_uncheck" onClick={this.update}></div>
                        </div>

                        
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default CheckBoxGroupField;