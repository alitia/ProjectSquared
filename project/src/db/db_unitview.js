import firebase from '../firebase.js'

//ACTION: gets the list of fields in the selected unit
export const uv_getfieldslist = (project_id, unit_id) => {

	var path = "projects/" + project_id + "/units/" + unit_id + "/"          
    var ref = firebase.database().ref().child(path)
    return ref.once("value")
}

//ACTION: converts the list of fields into an array
export const uv_convertfieldslist = (res) => {

	var arr = []
    var count = 0

    for (var item in res.fields){
        arr[count] = res.fields[item]
        count++
    }
    return arr
}

//ABOUT: Updates the changes to the title field
export const uv_savefieldchange = (p_id, u_id, f_id, data) => {

    if(p_id === "" || u_id === "" || f_id === "" || data === ""){

        console.log("unable to write data without directory path")
        return
    }
    var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/" 
        var ref = firebase.database().ref().child(path)
        ref.child("data").set(data.toString(), function(error){
            if(error){
                console.log("FieldData Change: " + error)
            }
        })
}

//ACTION: update the title changed in the title field to apply to the whole unit
export const uv_savetitlechange = (p_id, u_id, f_id, data) => {

    var path = "projects/" + p_id + "/units/" + u_id + "/" 
        var ref = firebase.database().ref().child(path)
        ref.child("projectName").set(data.toString(), function(error){
            if(error){
                console.log("ProjectName Change: " + error)
            }
        })
}

//ACTION: converts the list of checkfields into an array
export const uv_convertchecklist = (res) => {

    var arr = []
    var count = 0

    for (var item in res){
        arr[count] = res[item]
        count++
    }
    return arr
}

//ACTION: save the adjusted bool to the db
export const uv_savecheckchange = (p_id, u_id, f_id, b_id, data) => {

    var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/data/" + b_id + "/bool"
    var ref = firebase.database().ref().child(path)
        ref.set(data)
}

//ACTION: count all progress in the current unit and update progress on the db
export const uv_calcprogress = (p_id, u_id) => {

    //find all fields in the current unit that are check fields
    var path = "projects/" + p_id + "/units/" + u_id + "/fields/"
    var ref = firebase.database().ref().child(path)
        ref.orderByChild("fields").on("value", function(result){

            var arr_1 = []
            var arr_2 = []            
            var count = 0
            var truefields = 0
            var allfields = 0

            //get any fields that contain checkboxes and add them to an array
            arr_1 = result.val()
            for(var item in arr_1){
                if(arr_1[item].type ==="checkboxes"){
                    for(var box in arr_1[item].data){
                        arr_2[count] = arr_1[item].data[box].bool
                        count++
                    }          
                }                
            }
            //search the array for any true checkboxes
            for(var val in arr_2){
                if(arr_2[val] === "true"){
                    truefields++
                }
                allfields++
            }
            //calculate the percentage change and update that to the db
            var percentChange = Math.floor((truefields / allfields).toFixed(2) * 100) 
            var path = "projects/" + p_id + "/units/" + u_id + "/" 
            var ref = firebase.database().ref().child(path)
                ref.child("percentageComplete").set(percentChange, function(error){
                    if(error){
                        //console.log("UnitPercentComplete Change Declined: " + error)
                    }
                })
            return percentChange
    })
}
//ACTION: gets the list of fields in the selected unit
export const uv_getunittitle = (project_id, unit_id) => {

    var path = "projects/" + project_id + "/units/" + unit_id + "/"          
    var ref = firebase.database().ref(path).child("projectName")
    return ref.once("value")
}
