import firebase from '../firebase.js'

export const saveFieldChange = (p_id, u_id, f_id, data) => {

	var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/" 
        var ref = firebase.database().ref().child(path)
        ref.child("data").set(data, function(error){
            if(error){
                console.log("FieldData Change: " + error)
            }
        })
}
//update the title changed in the field to apply to the whole unit
export const saveTitleChange = (p_id, u_id, f_id, data) => {

	var path = "projects/" + p_id + "/units/" + u_id + "/" 
        var ref = firebase.database().ref().child(path)
        ref.child("projectName").set(data, function(error){
            if(error){
                console.log("ProjectName Change: " + error)
            }
        })
}

//update the title changed in the field to apply to the whole unit
export const saveCheckChange = (p_id, u_id, f_id, b_id, data) => {

	var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/data/" + b_id + "/"
        var ref = firebase.database().ref().child(path)
        ref.child("bool").set(data, function(error){
            if(error){
                console.log("CheckBox Change: " + error)
            }
        })
}