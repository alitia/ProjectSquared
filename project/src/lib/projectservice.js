const baseUrl = 'http://localhost:8080/projects'

export const loadProjects = () => {
	return fetch(baseUrl)
		.then(res => res.json())
}
export const createProject = (todo) => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'

		},

		body: JSON.stringify(todo)
	}).then(res => res.json())

}
export const saveProject = (todo) => {
	return fetch(`${baseUrl}/${todo.id}`, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'

		},

		body: JSON.stringify(todo)
	}).then(res => res.json())

}

export const destroyProject = (id) => {
	return fetch(`${baseUrl}/${id}`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'

		}

	})
}