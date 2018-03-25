import firebase from '../firebase.js'

//ACTION: gets the list of projects from the db for that user
export const puv_getunitslist = (project_id) => {

	var ref = firebase.database().ref("projects/" + project_id + "/")
    return ref.once('value')
}

//ACTION: converts result from db into unit list
export const puv_convertunitslist = (res) => {

    var arr = []
    var count = 0
    for (var item in res.units){
        arr[count] = res.units[item]
        count++
    }
    return arr
}

//ACTION: get the new unit list
export const puv_viewnewunit = (project_id) => {

    var path = "projects/" + project_id + "/"
    var ref = firebase.database().ref().child(path)
    return ref.once('value')        
}

//ACTION: copy for users first unit and copy it
//generate a new unit id
//updateId: update the id of the new unit to its new id and name
export const puv_createnewunit = (project_id) => {

                var new_unit_id = Math.floor(Math.random()*1000)

                //keep generating ids until one that is not a key already is chosen
                var outcome = approveId(new_unit_id)

                //if the generated id already exists, generate another
                if (outcome === true){
                    approveId(project_id, new_unit_id)
                }
                //we need an outcome if the key STILL cant be generated

    //Locate the original project
    var original_path  = "projects/" + project_id + "/units/"
    var original_ref = firebase.database().ref().child(original_path)

    var new_path = "projects/" + project_id + "/units/" + new_unit_id 
    var new_ref = firebase.database().ref().child(new_path)

    //take the first unit in the project and save it as a new child under the generated id
    original_ref.startAt().limitToFirst(1).once("child_added", 
        function(result){
            new_ref.set(result.val())
            updateId(project_id, new_unit_id)
        }, 
        function(error){
            console.log("The read failed: " + error)
        })

    //return new_unit_id
}

//ACTION: update the id of the duplicated child to its new id and name
//setUnitId: updates the db id of the new unit to the new unit id
//resetPercentage: updates the db percentageComplete of the new unit to 0
//clearFields: updates the new unit name to 'New Unit' in the db
//resetFields: Get all current fields  with checks or titles and wipe them then copy them into another array
//resetUnitName: Set the fields of the new unit to be the clear fields created in the array
export const updateId = (project_id, new_unit_id) => {
    var clearFields = []
    // //update the id of the new unit
    // var path = "projects/" + project_id + "/units/" + new_unit_id + "/"
    // var ref = firebase.database().ref().child(path)
    setUnitId(new_unit_id, project_id)
    resetPercentage(project_id, new_unit_id)
    clearFields = wipeFields(project_id, new_unit_id)
    resetFields(clearFields, project_id, new_unit_id)
    resetUnitName(project_id, new_unit_id) 
}

//ACTION: Check if the unit id already exists
//TODO: Fix up generate unit id process
export const approveId = (project_id, new_unit_id) => {

    var idExists = ''
    //check if the key already exists on the user account hasChild
    var path = "projects" + project_id + "/units"
    var ref = firebase.database().ref(path);
    ref.once("value")
    .then(function(snapshot) {
        idExists = snapshot.hasChild(new_unit_id.toString()); 
        //console.log("The id exists already: " + idExists)
    });
    return idExists
}

//ACTION: updates the db id of the new unit to the new unit id
export const setUnitId = (new_unit_id, project_id) => {

    var path = "projects/" + project_id + "/units/" + new_unit_id + "/"
    var ref = firebase.database().ref().child(path)
    ref.child("id").set(new_unit_id, function(error){
        if(error){
            //console.log("Unit ID Change Declined: " + error)
        }
        else{
            //console.log("Unit ID Change Accepted")
        }
    })
}

//ACTION: updates the db percentageComplete of the new unit to 0
export const resetPercentage = (project_id, new_unit_id) => {

    var path = "projects/" + project_id + "/units/" + new_unit_id + "/"
    var ref = firebase.database().ref().child(path)
    ref.child("percentageComplete").set("0", function(error){
        if(error){
            console.log("Project Percentage Change Declined: " + error)
        }
        else{
            console.log("Project Percentage Change Accepted")
        }
    })
}

//ACTION: updates the new unit name to 'New Unit' in the db
export const resetUnitName = (project_id, new_unit_id) => {

    var path = "projects/" + project_id + "/units/" + new_unit_id + "/"
    var ref = firebase.database().ref().child(path)
    ref.child("projectName").set("New Unit", function(error){
        if(error){
            //console.log("ProjectName Change Declined: " + error)
        }
        else{
            //console.log("Project Name Change Accepted")
        }
    })
}

//ACTION: Get all current fields  with checks or titles and wipe them then copy them into another array
export const wipeFields = (project_id, new_unit_id) => {

    var path = "projects/" + project_id + "/units/" + new_unit_id + "/"
    var ref = firebase.database().ref().child(path)

    var arr = []
    var count = 0

    ref.child("fields").on("value", function(result){
    for (var item in result.val()){
        arr[count] = result.val()[item]
            if(arr[count].type === "checkboxes"){

            var fields = []
            var count_fields = 0
            arr[count].id = count

                for (var field in arr[count].data){
                    fields[count_fields] = arr[count].data[field]
                    fields[count_fields].bool = false
                    count_fields++                  
                    }
            }
            else if(arr[count].type === "title"){

                arr[count].data = "New Unit"
                arr[count].id = count
            }
            else{
                arr[count].data = ""
                arr[count].id = count
            }
            count++
        }
    })   

    return arr  
}

//ACTION: Set the fields of the new unit to be the clear fields created in the array
export const resetFields = (arr, project_id, new_unit_id) => {

    var path = "projects/" + project_id + "/units/" + new_unit_id + "/"
    var ref = firebase.database().ref().child(path)
    ref.child("fields").set(arr, function(error){
        if(error){
            console.log("Error adding fields to new unit creator: " + error)
        }
        else{
            console.log("Field wipe accepted")
        }               
    })  
}

//ACTION: gets the count of projects inside from the project we have added a unit to
export const puv_getprojectsunitcount = (project_id) => {
    
    var path = "projects/" + project_id + "/"
    var ref = firebase.database().ref(path).child('projectsInside')
    return ref.once('value')
}

//ACTION: increases the projects inside count for the project we just added a unit to
export const puv_setprojectsunitcount = (project_id, count) => {

    var path = "projects/" + project_id + "/"
    var ref = firebase.database().ref().child(path)
    ref.child("projectsInside").set(count, function(error){
        if(error){
            //console.log("Error increasing projects inside count: " + error)
        }
        else{
            //console.log("Projects inside count increase approved")
        }               
    }) 
}