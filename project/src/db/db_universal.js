import firebase from '../firebase.js'

//ACTION: delete the field
export const uni_deletefield = (p_id, u_id, f_id) => {    

    if(p_id === "" || u_id === "" || f_id === ""){

        console.log("unable to write data without directory path")
        return
    }
    var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/" 
    var ref = firebase.database().ref().child(path)
        ref.remove()
}