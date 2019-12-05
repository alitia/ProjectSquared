import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ProgressBar from '../UnitView/UnitViewFields/progressbar.js'

//SECONDARY: Draws the project CARD.
//These have a white card
//(Left) Progress bar totalling the progress of all units inside
//(Left) A total number of units in the project
//(Right) The percentage number of progress
//PROPS: Receives a project node from LIST
//LINK: Links to the selected projects page if clicked
class MainProjectViewCard extends Component {
    constructor(){
        super()
        this.setPercentageView = this.setPercentageView.bind(this)
    }

    //ACTION: If the percentage is 0, don't show the percentage status on the card
    setPercentageView = () => {
        var element = []
        if(this.props.percentageComplete === 0){
            
        }
        else{
            element.push(
                //this needs to have a key
                <h1 className="percentRegularCard" key="1" >{this.props.percentageComplete + "%"} </h1>
                )
        }
        return element
    } 

    render(){
        return(
        <Link to={`/project/${this.props.id}`}>
            <div className="MainProjectView_Card">
                <div className="card">
                    <div className="cardLeftImgWhite">
                        <h1 className="projectNumCube">{this.props.projectsInside}</h1>
                    </div> 
                    {this.setPercentageView()}
                    <h1 className="cardh1normalprogwithcount">{this.props.projectName}</h1>                    
                    <ProgressBar progress={this.props.percentageComplete} colour={this.props.colour}/>
                </div>
            </div>
        </Link>)
    }
}
export default MainProjectViewCard;

