import firebase from '../firebase.js'
import {addUnit} from './projecthelpers.js'

export const createProject = (p_id) => {

    var path = "projects/" + p_id + "/"
  	var ref = firebase.database().ref().child(path)
  		ref.child("id").set(p_id)
  		ref.child("percentageComplete").set(0)
  		ref.child("projectName").set('Set Project Name')
  		ref.child("projectsInside").set(0)
}
export const createUnit = (p_id, u_id) => {

	var path = "projects/" + p_id + "/units/" + u_id + "/"
	var ref = firebase.database().ref().child(path)
		ref.child("id").set(u_id)
		ref.child("percentageComplete").set(0)
		ref.child("projectName").set("New Unit")
}
export const createTitleField = (p_id, u_id, f_id) => {

	//add a title field for the new unit
	var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id +"/"
	var ref = firebase.database().ref().child(path)
		ref.child("data").set("New Unit Title")
		ref.child("id").set(f_id)
		ref.child("position").set(0)
		ref.child("type").set("title")	
}
export const createShortField = (p_id, u_id, f_id) => {

	//create another field id
	var f_id = f_id + 1

	//create a short text field for the next field
	//perhaps this should be checkfields in the future
	var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id +"/"
	var ref = firebase.database().ref().child(path)
		ref.child("data").set("First field")
		ref.child("id").set(f_id)
		ref.child("position").set(0)
		ref.child("type").set("short")
		ref.child("label").set("Give me a name")
}