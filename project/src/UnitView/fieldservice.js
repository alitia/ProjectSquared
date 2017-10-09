const baseUrl = 'http://localhost:8080/projects'

export const saveData = (project, unit, field, obj) => {
	
	return fetch(`${baseUrl}/${project}`, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	}).then(res => res.json())
	// .then(function(data){

	// 		var i = 0;			
	// 		var project_data = [];			
	// 		var unit_data = [];
	// 		var field_data = [];

	// 		//find the project
	// 		for(i = 0; i <data.length; i++){
	// 			if(data[i].id == project){
	// 				project_data = data[i].units
	// 			}
	// 		}
	// 		//search for the unit
	// 		for(i = 0; i < project_data.length; i++){
	// 			if(project_data[i].id == unit){
	// 				//return the units fields
	// 				unit_data = project_data[i]				
	// 			}
	// 		}
	// 		//search for the field
	// 		for(i = 0; i < unit_data.length; i++){
	// 			if(unit_data[i].id == field){
	// 				//return the units fields
	// 				field_data = unit_data[i]				
	// 			}
	// 		}
	// 	})
	}