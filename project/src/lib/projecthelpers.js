export const addProject = (list, item) => [...list, item]
export const addUnit = (list, item) => [...list, item]
export const generateId = () => Math.floor(Math.random()*100)
export const findById = (id, list) => list.find(item => item.id === id)
