import React, { Component } from 'react';

class UnitView extends Component {
    constructor(){
        super()
        this.state = {
            unit_fields: [
                {id: 302, position: 2, label: 'Phone Number', fieldname: '+64273040964', fieldtype: 'text_phone'}
            ]
        }
    }
    render() {
        return (
            <div className="UnitView_Page">
                <div className="backButton">
                    <div className="backIcon">
                        <div className="backButtonIcon"></div>
                    </div>
                </div>
                <div className="UnitView_List">
                    <div className="card">
                        <h1 className="cardh1bold">Unit title</h1>
                    </div>



                    <div className="UnitView_New">
                        <div className="card">
                            <h1 className="cardh1normal">Progress</h1>
                            <h1 className="percentRegularCard">65%</h1>
                        </div>
                    </div>
                </div>
            </div>      
        );
    }
}
export default UnitView;