import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

class UnitViewOptionsButton extends Component {
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
        this.props.deleteCheck(card)
    }
    render() {
        return (
            <div className="uv_option_wrapper">
                <div className="option_container_outer">
                    <div className="option_container_inner" onClick={this.deleteCheck}>
                        <button type="button" className="option_button">
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UnitViewOptionsButton);
