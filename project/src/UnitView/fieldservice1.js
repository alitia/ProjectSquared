const baseUrl = 'http://localhost:8080/projects'

export const saveData = (project, unit, field, obj) => {
	
	return fetch(`${baseUrl}/${project}[4]/`, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
}