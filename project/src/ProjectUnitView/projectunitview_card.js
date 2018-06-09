import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ProgressBar from '../UnitView/UnitViewFields/progressbar.js'
import { DeleteButton } from '../Other/deletebutton.js';
import {uni_deleteunit} from '../db/db_universal.js'

//SECONDARY: Draws the unit CARD. Links to the PROGRESSBAR
//These have a white card
//(Left) Progress bar totalling the progress of all units inside
//(Left) The bold title of the unit
//(Right) The percentage number of progress of the unit
//PROPS: Receives a project list of units from LIST
//LINK: Links to the selected projects id and units page if clicked

class ProjectUnitViewCard extends Component {

    state = {
            label: 'Enter a title for the field',
            saved_label: '',
            saved_progress: '',
            progress: '',
            projectName: ''
        }
    componentDidMount() {
        this.setState({projectName: this.props.projectName})
    }

    //ACTION: If the delete button is clicked cause delete options to appear inside the card
    deletecheck = (card) => {

        var savedText = this.state.projectName
        var savedprog = ""
        this.setState({saved_label: savedText})
        this.setState({projectName: "Are you sure you want to delete me?"})

        var deleteset = document.createElement('div')
        deleteset.className = "deleteSet"

        var confirmIcon = document.createElement('div')
        confirmIcon.className = "deleteOKIcon"
        confirmIcon.addEventListener('click', this.deleteProceed)

        var cancelIcon = document.createElement('div')
        cancelIcon.className = "deleteCancelIcon"
        cancelIcon.addEventListener('click', this.deleteCancel)

        deleteset.appendChild(confirmIcon)
        deleteset.appendChild(cancelIcon)

        //if the icon edge was clicked
        if(card.target.className === "deleteIcon"){
            var  x = card.target.parentNode.parentNode.children[0].children[0].children[0]
            x = x.appendChild(deleteset)
            var  y = card.target.parentNode.parentNode.children[0].children[0].children[0].children[0]
            y.style.display = "none";
            card.target.parentNode.children[0].style.display = "none"
        }
        //if the inner icon was clicked
        else if(card.target.className === "deleteButtonIcon"){
            var  x = card.target.parentNode.parentNode.parentNode.children[0].children[0].children[0]
            x = x.appendChild(deleteset)
            var  y = card.target.parentNode.parentNode.parentNode.children[0].children[0].children[0].children[0]
            y.style.display = "none";
            card.target.parentNode.parentNode.children[0].style.display = "none"
        }
        //if the bin icon is clicked
        else{
            var  x = card.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0]
            x = x.appendChild(deleteset)
            var  y = card.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0].children[0]
            y.style.display = "none";
            card.target.parentNode.parentNode.style.display = "none"
        }        
    }
    
    //ACTION: delete the field then reload the page
    deleteProceed = (event) => {

        var u_id = this.props.id
        var p_id = this.props.projectId
        
        uni_deleteunit(p_id, u_id)
        event.preventDefault();
        //prevent link from trying to open card
        //this.reloadFields()
        
    }
    //ACTION: Use the callback to redraw the fields
    reloadFields = () => {

        var u_id = this.props.unitId
        var p_id = this.props.projectId
        //this.props.action(p_id, u_id)
    }

    //ACTION: restore the label of the card and hide the delete options
    deleteCancel = (event) => {

        event.preventDefault();

        var label = this.state.saved_label
        var set = ""
        this.setState({projectName: label})

        //show the delete button icon again
        event.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].style.display = "inline-block"

        //restore the percentage label
        var  y = event.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[0]
        y.style.display = "initial"; 

        //remove delete set
        set = event.target.parentNode.parentNode
        set.removeChild(set.children[3])


    }

    //ACTION: if the percentage is 0, return nothing
    percentView = () => {

        var val = ""

        if(this.props.percentageComplete === '0'){
            return 
        }
        else{
            val = this.props.percentageComplete + "%"
            return val
        }
        return
    }

	render(){
        return(                 
                <div className="deletebar">
                    <div className="test">
                        <Link to={`/project/${this.props.projectId}/unit/${this.props.id}`}>   
                        <div className="card">                             
                            <h1 className="percentRegularCard">{this.percentView()}</h1>   
                            <h1 className="cardh1normalprog">{this.state.projectName}</h1>                                            
                            <ProgressBar progress={this.props.percentageComplete} colour={this.props.colour}/>
                        </div>
                        </Link>
                    </div>
                    <div className="deleteOption" onClick={this.deletecheck}><DeleteButton /></div>
                </div>  
    )}
}
export default ProjectUnitViewCard;