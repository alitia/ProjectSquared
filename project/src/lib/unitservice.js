const baseUrl = 'http://localhost:8080/projects/'

export const loadUnits = (val) => {
	return fetch(baseUrl)
		.then(res => res.json())
		.then(function(data){
			var i = 0;
			var y = [];
			var z = [];

			for(i = 0; i < data.length; i++){
				if(data[i].id == val){
					y = data[i]					
				}
			}

			return y
			
		})
}