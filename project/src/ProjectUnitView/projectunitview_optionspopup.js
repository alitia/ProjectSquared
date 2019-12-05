import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import ProjectUnitViewOptionsModal from './projectunitview_optionsmodal.js'

const OptionsModal = ({ unitName, unitCount, deleteCheck, handleClose, children }) => {
    const showHideClassName = "option_modal_display-block";
    return (
        <div className={showHideClassName}>            
            <div className="option_modal_overlay">
            </div>
                <section className="option_modal_main">
                    <ProjectUnitViewOptionsModal unitName={unitName} unitCount={unitCount} deleteCheck={deleteCheck} close={handleClose}/>
                </section>
        </div>
    )
}
class OptionsButton extends Component {
  constructor(props) {
        super(props);
        this.state = {
            show_optionsModal: false,
        }       
    }
    showOptionsModal = () => {
        this.setState({show_optionsModal: true})
    }
    hideOptionsModal = () => {
        this.setState({show_optionsModal: false})
    }
    deleteCheck = (card) => {
        this.hideOptionsModal()
        this.props.deleteCheck(card)
    }
    render() {
        return (
            <div className="option_wrapper">
                {this.state.show_optionsModal && <OptionsModal unitName={this.props.unitName} unitCount={this.props.unitCount} deleteCheck={this.deleteCheck} handleClose={this.hideOptionsModal} />}
                <div className="option_container_outer">
                    <div className="option_container_inner" onClick={this.showOptionsModal}>
                        <button type="button" className="option_button">
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(OptionsButton);
