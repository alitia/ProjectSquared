import firebase from '../firebase.js'
import {addUnit} from './projecthelpers.js'

export const checkIfProjectExistsAlready = (p_id) => {

	//check that project does not already exist
	var path = "projects/"
  	var ref = firebase.database().ref(path)
  	ref.child(p_id).once("value").then(function(snapshot){
  		console.log("The project id existed")
  		return true
  	}, function(error){
		console.log("The project id did not exist")
		return false
  	})
}
export const createProject = (p_id) => {

    var path = "projects/" + p_id + "/"
  	var ref = firebase.database().ref().child(path)
  		ref.child("id").set(p_id)
  		ref.child("percentageComplete").set(0)
  		ref.child("projectName").set('Project ' + p_id + ' Name')
  		ref.child("projectsInside").set(0)
}
export const createUnit = (p_id, u_id) => {

	var path = "projects/" + p_id + "/units/" + u_id + "/"
	var ref = firebase.database().ref().child(path)
		ref.child("id").set(u_id)
		ref.child("percentageComplete").set(0)
		ref.child("projectName").set("New Unit")
}
export const createEditField = (p_id, u_id, f_id) => {

	//create a edit field for the next field
	var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id +"/"
	var ref = firebase.database().ref().child(path)
		ref.child("data").set("First field")
		ref.child("id").set(f_id)
		ref.child("position").set(0)
		ref.child("type").set("Select the field type")
		ref.child("label").set("")
}