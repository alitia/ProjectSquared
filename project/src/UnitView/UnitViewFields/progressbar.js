import React, { Component } from 'react';

//SECONDARY: Draws the progress bar
//These have a white with a coloured progress bar inside
//PROPS: Receives progress field from LIST
class ProgressBar extends Component {
  
    //ACTION: Set the width of the progress bar style to the progress percentage from PROPS
    componentDidMount(){

        var width = this.props.progress / 2
        this.refs.progressBar.style.width = width + "%"
        this.refs.progressBar.style.backgroundColor = this.props.colour
    }
    //ACTION: If state updates, update progress bar
    componentDidUpdate(props, state){

        this.refs.progressBar.style.width = (this.props.progress / 2) + "%"
    }
    //ACTION:
    //Render: Progress Bar
    render() {
        return (
            <div className="ProgBar" ref="progressBar" onLoad={this.findColour}></div>   
        );
    }
}
export default ProgressBar