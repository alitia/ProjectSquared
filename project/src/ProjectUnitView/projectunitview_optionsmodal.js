import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import ProjectUnitViewCard from './projectunitview_card.js'

class ProjectUnitViewOptionsModal extends Component {
  constructor(props) {
        super(props);
        this.state = {
            error: ''
        }       
    }
    deleteCheck = (card) => {
        if(this.props.unitCount === 1){
            var error_text = "*You can't delete this unit as it's the last one in the project. Try deleting the project or editing the unit instead."
            this.setState({error: error_text})
        }
        else{
            this.props.deleteCheck(card);
        }        
    }
    //ACTION: If there is only one unit in the project, show error that unit cannot be deleted
    showDeleteError = () => {
        
    }
    render() {
        return (
            <div className="options_modal_wrapper">
                <div className="options_modal_container_outer">
                    <div className="options_modal_container_inner" onClick={this.showModal}>
                    <div className="projectunitview_options_modal_text">Edit {this.props.unitName}</div>
                    <div className="optionsModalError">{this.state.error}</div>
                    
                    <input type="button" className="modal_delete" value="Delete Unit" onClick={this.deleteCheck}></input>
                    <input type="button" className="modal_edit" value="Edit Unit" onClick={this.deleteCheck}></input>
                    <input type="button" className="modal_cancel" value="Cancel" onClick={this.props.close}></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProjectUnitViewOptionsModal);
