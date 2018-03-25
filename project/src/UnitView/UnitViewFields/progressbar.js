import React, { Component } from 'react';

//SECONDARY: Draws the progress bar
//These have a white with a coloured progress bar inside
//PROPS: Receives progress field from LIST
class ProgressBar extends Component {
  
    //ACTION: Set the width of the progress bar style to the progress percentage from PROPS
    componentDidMount(){

        this.refs.progressBar.style.width = this.props.progress + "%"
    }
    //ACTION: If state updates, update progress bar
    componentDidUpdate(props, state){

        this.refs.progressBar.style.width = this.props.progress + "%"
    }
    //ACTION:
    //Render: Progress Bar
    render() {
        return (
            <div className="ProgBar" ref="progressBar"></div>   
        );
    }
}
export default ProgressBar