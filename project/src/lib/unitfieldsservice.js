const baseUrl = 'http://localhost:8080/projects/'

//looks up a project, then a unit, then returns the fields
export const loadUnitsFields = (valx, valy) => {
	return fetch(baseUrl)
		.then(res => res.json())
		.then(function(data){

			var i = 0;			
			var y = [];

			//find the project
			for(i = 0; i <data.length; i++){
				if(data[i].id == valy){
					y = data[i].units
				}
			}
			var z = [];
			//search for the unit
			for(i = 0; i < y.length; i++){
				if(y[i].id == valx){
					//return the units fields
					z = y[i]				
				}
			}

			return z
			
		})
}