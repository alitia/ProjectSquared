import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ProgressBar from '../UnitView/UnitViewFields/progressbar.js'
import { DeleteButton } from '../Other/deletebutton.js';
import OptionsButton from './projectunitview_optionspopup.js'
import {puv_getprojectsunitcount} from '../db/db_projectunitview.js'
import { proc_deleteProceed } from '../ProjectUnitView/projectunitview_processor.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//SECONDARY: Draws the unit CARD. Links to the PROGRESSBAR
//These have a white card
//(Left) Progress bar totalling the progress of all units inside
//(Left) The bold title of the unit
//(Right) The percentage number of progress of the unit
//PROPS: Receives a project list of units from LIST
//LINK: Links to the selected projects id and units page if clicked


//TODO: If user opts to delete a unit when it is the last one left, let the user know it is not possible to delete it.
// Either delete the project or edit the unit

class ProjectUnitViewCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            label: '',
            saved_label: '',
            saved_progress: '',
            progress: '',
            projectName: '',
            unitCount: '',
            projectId: ''
        }
    }
    componentDidMount() {
        this.setState({projectName: this.props.projectName})
        this.setState({projectId: this.props.projectId})
        puv_getprojectsunitcount(this.props.projectId)
        .then((result)=> this.getUnitCount(result.val()))        
    }   
   
    //ACTION: Use the callback to redraw the fields
    reloadFields = () => {

        var u_id = this.props.unitId
        var p_id = this.props.projectId
        this.props.action()
    }

    //ACTION: confirm card has been deleted
    notifyDelete = () => {
        toast.success("Your unit has been deleted", {
          position: toast.TOP_RIGHT,
          className: 'foo-bar',
          hideProgressBar: true
        });
    }

    //ACTION: If the delete button is clicked cause delete options to appear inside the card
    deleteCheck = (card) => {
        var x = ""
        var y = ""
        var savedText = this.state.projectName
        this.setState({saved_label: savedText})
        this.setState({projectName: "Delete field?"})

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

        x = card.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        x.appendChild(deleteset)
    }
    //ACTION: delete the field then reload the page
    deleteProceed = (event) => {

        var u_id = this.props.id
        var p_id = this.props.projectId        
        proc_deleteProceed(p_id, u_id)

        //prevent link from trying to open card
        event.preventDefault();
        
        this.reloadFields()
    } 
    //ACTION: restore the label of the card and hide the delete options
    deleteCancel = (event) => {

        event.preventDefault();

        var label = this.state.saved_label
        var set = ""
        this.setState({projectName: label})

        //restore the percentage label
        var x = event.target.parentNode.parentNode.children[0].children[0]
        x.style.display = "initial"; 

        //remove delete set
        set = x.parentNode.parentNode
        set.removeChild(set.children[2])
    }
    //ACTION: get the current count of units in this project
    getUnitCount = (count) => {
        this.setState({unitCount: count})
        console.log("Project ID: " + this.props.projectId + " Unit Count: " + count)
    }
    //ACTION: if the percentage is 0, return nothing
    percentView = () => {

        var val = ""
        if(this.props.percentageComplete === 0){
            return 
        }
        else{
            val = this.props.percentageComplete + "%"
            return val
        }
    }

	render(){
        return(          
                <div className="deletebar">
                    <ToastContainer /> 
                    <div className="test">                        
                        <div className="card"> 
                        <Link to={`/project/${this.props.projectId}/unit/${this.props.id}`}>                               
                            <h1 className="percentRegularCard">{this.percentView()}</h1>   
                            <h1 className="cardh1normalprog">{this.state.projectName}</h1>                                            
                            <ProgressBar progress={this.props.percentageComplete} colour={this.props.colour}/>
                        </Link>
                            <OptionsButton unitName={this.props.projectName} unitCount={this.state.unitCount} deleteCheck={this.deleteCheck}/>
                        </div>                        
                    </div>
                </div>  
    )}
}
export default ProjectUnitViewCard