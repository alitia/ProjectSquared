import React, { Component } from 'react';

class ProgressBar extends Component {
  
    componentDidMount(){

        this.refs.progressBar.style.width = this.props.progress + "%"
    }
    componentDidUpdate(props, state){

        this.refs.progressBar.style.width = this.props.progress + "%"
    }
    render() {
        return (
            <div className="ProgBar" ref="progressBar"></div>   
        );
    }
}
export default ProgressBar