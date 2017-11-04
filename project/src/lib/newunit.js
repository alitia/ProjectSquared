import firebase from '../firebase.js'

//take the first unit in the project and duplicate it
export const generateNewUnit = (p_id) => {

	var idExists = true
	var new_id = Math.floor(Math.random()*1000)

	//keep generating ids until one that is not a key already is chosen
	var outcome = approveId(new_id)

	//if the generated id already exists, generate another
	if (outcome === true){
		approveId(p_id, new_id)
	}
	//we need an outcome if the key STILL cant be generated

	var path1  = "projects/" + p_id + "/units/"
	var ref1 = firebase.database().ref().child(path1)

	var path2 = "projects/" + p_id + "/units/" + new_id 
	var ref2 = firebase.database().ref().child(path2)

	//take the first unit in the project and save it as a new child under the generated id
	ref1.startAt().limitToFirst(1).once("child_added", function(result){
		ref2.set(result.val())
		updateId(p_id, new_id)
		}, function(error){
		console.log("The read failed: " + error)
	})

	return new_id
}
//update the id of the duplicated child to its new id and name
export const updateId = (p_id, new_id) => {

	var clearFields = []
	//update the id of the new unit
	var path = "projects/" + p_id + "/units/" + new_id + "/"
    var ref = firebase.database().ref().child(path)
        setProjectId(new_id, p_id)
        resetPercentage(p_id, new_id)
        clearFields = wipeFields(p_id, new_id)
        resetFields(clearFields, p_id, new_id)
        resetProjectName(p_id, new_id)
}
export const approveId = (p_id, new_id) => {

	var idExists = true
	var new_id = Math.floor(Math.random()*1000)
		//check if the key already exists on the user account hasChild
		var path = "projects" + p_id + "/units"
		var ref = firebase.database().ref(path);
		ref.once("value")
		  .then(function(snapshot) {
		    var idExists = snapshot.hasChild(new_id.toString()); 
		    //console.log("The id exists already: " + idExists)
		  });
	return idExists
}
export const setProjectId = (new_id, p_id) => {

	var path = "projects/" + p_id + "/units/" + new_id + "/"
    var ref = firebase.database().ref().child(path)
	ref.child("id").set(new_id, function(error){
            if(error){
                console.log("ProjectId Change: " + error)
            }
            else{
            	console.log("ProjectId Change Accepted")
            }
        })
}
export const resetPercentage = (p_id, new_id) => {

	var path = "projects/" + p_id + "/units/" + new_id + "/"
    var ref = firebase.database().ref().child(path)
	ref.child("percentageComplete").set("0", function(error){
            if(error){
                console.log("ProjectPercentage Change: " + error)
            }
            else{
            	console.log("Project Percentage Change Accepted")
            }
        })
}
export const resetProjectName = (p_id, new_id) => {

	var path = "projects/" + p_id + "/units/" + new_id + "/"
    var ref = firebase.database().ref().child(path)
	ref.child("projectName").set("New Unit", function(error){
            if(error){
                console.log("ProjectName Change: " + error)
            }
            else{
            	console.log("Project Name Change Accepted")
            }
        })
}
export const wipeFields = (p_id, new_id) => {

	var path = "projects/" + p_id + "/units/" + new_id + "/"
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
export const resetFields = (arr, p_id, new_id) => {

	var path = "projects/" + p_id + "/units/" + new_id + "/"
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

