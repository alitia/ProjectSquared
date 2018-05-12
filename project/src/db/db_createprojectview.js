import firebase from '../firebase.js'

//ACTION: update the field type in db if it isnt a checkbox
export const pcv_savefieldtypechange = (p_id, u_id, f_id, type) => {    

    if(p_id === "" || u_id === "" || f_id === "" || type === ""){

        console.log("unable to write data without directory path")
        return
    }
    var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/" 
    var ref = firebase.database().ref().child(path)
        ref.child("type").set(type, function(error){
            if(error){
                //console.log("Field type Change: " + error)
            }
        })
        ref.child("data").set("", function(error){
            if(error){
                //console.log("Field type Change: " + error)
            }
        })
}

//ACTION: change an edit field type to check box and add an initial box id and label
export const pcv_savecheckfieldtypechange = (p_id, u_id, f_id, b_id, type) => {

    var str = "Enter the check option label"
    if(p_id === "" || u_id === "" || f_id === "" || type === "" || b_id ===""){

        console.log("unable to write data without directory path")
        return
    }
    var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/data/" + b_id + "/data"
    var ref = firebase.database().ref().child(path)
        ref.child("data").set(str, function(error){
            if(error){
                //console.log("Check field data Change: " + error)
            }
        })
        ref = firebase.database().ref().child(path)
        ref.child("id").set(b_id, function(error){
            if(error){
                //console.log("Check field box id Change: " + error)
            }
        })
        ref = firebase.database().ref().child(path)
        ref.child("bool").set(false, function(error){
            if(error){
                //console.log("Check field bool Change: " + error)
            }
        })
    var path_2 = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/"
    ref = firebase.database().ref().child(path_2)
        ref.child("type").set(type, function(error){
            if(error){
                //console.log("Check field type Change: " + error)
            }
        })
}

//ACTION: update the label in the db
export const pcv_savefieldlabelchange = (p_id, u_id, f_id, label, type) => {

    if(type === "title"){
        var path = "projects/" + p_id + "/"
        var ref = firebase.database().ref().child(path)
        ref.child("projectName").set(label, function(error){
            if(error){
                //console.log("Field label Change in Project Name: " + error)
            }
        })
    }
    else{
        var path_2 = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/" 
        var ref_2 = firebase.database().ref().child(path_2)
        ref_2.child("label").set(label, function(error){
            if(error){
                //console.log("Field label Change: in unit title" + error)
            }
        })
        ref_2.child("data").set("...", function(error){
            if(error){
                //console.log("Field label Change: in unit title" + error)
            }
        })
    }   
}

//ACTION: update the checkfield box label in the db
export const pcv_savecheckfieldlabelchange = (p_id, u_id, f_id, b_id, label, type) => {

    var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/data/" + b_id + "/data"
        var ref = firebase.database().ref().child(path)
        //need to find the box id
        ref.child("data").set(label, function(error){
            if(error){
                //console.log("Checkfield Label Change: in checkfield title" + error)
            }
        })  
}

//ACTION: check if a project already exists on the data base in the same ID
export const pcv_checkifprojectexistsalready = (p_id) => {

    var path = "projects/"
    var ref = firebase.database().ref(path)
        ref.child(p_id).once("value").then(function(snapshot){
            //console.log("The project id existed")
            return true
        }, function(error){
            //console.log("The project id did not exist")
            return false
        }
    )
}

//ACTION: create a new project in the db and set the id, 
//percentageComplete, projectName and projectsInside
export const pcv_createproject = (p_id) => {

    var path = "projects/" + p_id + "/"
    var ref = firebase.database().ref().child(path)
        ref.child("id").set(p_id)
        ref.child("percentageComplete").set(0)
        ref.child("projectName").set('Project ' + p_id)
        ref.child("projectsInside").set(1)
}

//ACTION: create a new unit in the db and set the id, 
//percentageComplete and projectName
export const pcv_createunit = (p_id, u_id) => {

    var path = "projects/" + p_id + "/units/" + u_id + "/"
    var ref = firebase.database().ref().child(path)
        ref.child("id").set(u_id)
        ref.child("percentageComplete").set(0)
        ref.child("projectName").set("Project " + p_id + " Unit")
}

//ACTION: create an edit field for the new project in the db
export const pcv_createeditfield = (p_id, u_id, f_id) => {

    var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id +"/"
    var ref = firebase.database().ref().child(path)
        ref.child("data").set("")
        ref.child("id").set(f_id)
        ref.child("position").set(0)
        ref.child("type").set("Select the field type")
        ref.child("label").set("Add the title of this field")
}
