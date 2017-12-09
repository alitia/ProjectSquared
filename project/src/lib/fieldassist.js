import firebase from '../firebase.js'

export const saveFieldChange = (p_id, u_id, f_id, data) => {

    if(data === ""){
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
//----isnt working unless the browser is refreshed right now
//update the title changed in the field to apply to the whole unit
export const saveTitleChange = (p_id, u_id, f_id, data) => {

	var path = "projects/" + p_id + "/units/" + u_id + "/" 
        var ref = firebase.database().ref().child(path)
        ref.child("projectName").set(data.toString(), function(error){
            if(error){
                console.log("ProjectName Change: " + error)
            }
        })
}

//update the title changed in the field to apply to the whole unit
export const saveCheckChange = (p_id, u_id, f_id, b_id, data) => {

	var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/data/" + b_id + "/" + "bool"
        var ref = firebase.database().ref().child(path)
        ref.set(data)
}
//count all progress in the current unit and recalculate the progress
export const calcProgress = (p_id,u_id) => {

    var checkfields = 0;
    var truefields = 0;
    //find all fields in the current unit that are check fields.
    var path = "projects/" + p_id + "/units/" + u_id + "/fields/"
        var ref = firebase.database().ref().child(path)
        ref.orderByChild("fields").on("child_added", function(result){
            console.log(result.val())

            var arr = []
            var count = 0
            var arrgain = []

            arr = result.val().data

            for(var item in arr){

                arrgain[count] = arr[item]
                
                if(arrgain[count].bool === "true"){
                    truefields++
                }
                checkfields++
                count++
            }

            //console.log("fields total: " + checkfields + " true fields: " + truefields + "percentage: " + truefields/checkfields * 100 + "%")
            
            console.log(Math.floor((truefields / checkfields).toFixed(2) * 100) + "%")
            var percentChange = Math.floor((truefields / checkfields).toFixed(2) * 100) 

            var path = "projects/" + p_id + "/units/" + u_id + "/" 
            var ref = firebase.database().ref().child(path)
                ref.child("percentageComplete").set(percentChange, function(error){
                    if(error){
                        console.log("UnitPercentComplete Change: " + error)
                    }
                })

            return percentChange
        })

    

    //count how many are currently true out of total
    //send back percentage

    //update percentage complete for project base on unit percentages complete
}
//update the field type in the edit changes
export const saveFieldTypeChange = (p_id, u_id, f_id, type) => {

    var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/" 
        var ref = firebase.database().ref().child(path)
        ref.child("type").set(type, function(error){
            if(error){
                console.log("Field type Change: " + error)
            }
        })
}
//update the label in the edit changes
export const saveFieldLabelChange = (p_id, u_id, f_id, label, type) => {

    var path = "projects/" + p_id + "/units/" + u_id + "/fields/" + f_id + "/" 
        var ref = firebase.database().ref().child(path)
        ref.child("label").set(label, function(error){
            if(error){
                console.log("Field label Change: in unit title" + error)
            }
        })
        if(type === "title"){
            var path = "projects/" + p_id + "/"
            var ref = firebase.database().ref().child(path)
            ref.child("projectName").set(label, function(error){
                if(error){
                    console.log("Field label Change in Project Name: " + error)
                }
            })
        }
    
}