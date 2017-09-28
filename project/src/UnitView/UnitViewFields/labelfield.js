import React, { Component } from 'react';

class LabelField extends Component {
    state = {
            labels_field: [],
            project_id: '',
            unit_id: ''
        }
    componentDidMount() {

    }
    render() {
        return (
            <div className="LabelFieldContainer">
                {this.state.labels_field.map(label =>
                <div className="LabelField" key={label.id}>
                    <div className="card">
                        <h1 className="cardh1normal">{label.label}</h1>
                    </div>
                </div>)}   
            </div>   
        );
    }
}

export default LabelField;