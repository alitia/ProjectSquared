const baseUrl = 'http://localhost:8080/projects'

export const saveData = (project, unit, field, data) => {
	return fetch(`${baseUrl}/id:${project}/id:${unit}/id:${field}`, {

	}).then(res => res.json())

}