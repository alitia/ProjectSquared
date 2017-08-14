import {addProject} from './projecthelpers.js'
import {addUnit} from './projecthelpers.js'

/*-------------------- PROJECT CARD TESTS ---------------------*/
test('add Project should add the passed Project to the list', () => {

	const startProjects =[
		{id: 101, projectsInside: 10, projectName: 'Project Name One', percentageComplete: '55%'},
        {id: 102, projectsInside: 14, projectName: 'Project Name Two', percentageComplete: '66%'}
	]
	const newProject = {id: 103, projectsInside: 17, projectName: 'Project Name Three', percentageComplete: '77%'}
	const expected = [
		{id: 101, projectsInside: 10, projectName: 'Project Name One', percentageComplete: '55%'},
        {id: 102, projectsInside: 14, projectName: 'Project Name Two', percentageComplete: '66%'},
        {id: 103, projectsInside: 17, projectName: 'Project Name Three', percentageComplete: '77%'}
	]

	const result = addProject(startProjects, newProject)

	//our expectation
	expect(result).toEqual(expected)
})

test('addProject should not mutate the existing project array', () => {

	const startProjects =[
		{id: 101, projectsInside: 10, projectName: 'Project Name One', percentageComplete: '55%'},
        {id: 102, projectsInside: 14, projectName: 'Project Name Two', percentageComplete: '66%'}
	]
	const newProject = {id: 103, projectsInside: 17, projectName: 'Project Name Three', percentageComplete: '77%'}
	const expected = [
		{id: 101, projectsInside: 10, projectName: 'Project Name One', percentageComplete: '55%'},
        {id: 102, projectsInside: 14, projectName: 'Project Name Two', percentageComplete: '66%'},
        {id: 103, projectsInside: 17, projectName: 'Project Name Three', percentageComplete: '77%'}
	]

	const result = addProject(startProjects, newProject)

	//our expectation
	expect(result).not.toBe(startProjects)
})

/*-------------------- UNIT CARD TESTS ---------------------*/


test('add Unit should add the passed Unit to the list', () => {

	const startUnits =[
		{id: 201, projectName: 'Unit One', percentageComplete: '22%'},
        {id: 202, projectName: 'Unit Two', percentageComplete: '33%'}
	]
	const newUnit = {id: 203, projectName: 'Unit Three', percentageComplete: '44%'}
	const expected = [
		{id: 201, projectName: 'Unit One', percentageComplete: '22%'},
        {id: 202, projectName: 'Unit Two', percentageComplete: '33%'},
        {id: 203, projectName: 'Unit Three', percentageComplete: '44%'}
	]

	const result = addUnit(startUnits, newUnit)

	//our expectation
	expect(result).toEqual(expected)
})

test('add Unit should not mutate the existing unit array', () => {

	const startUnits =[
		{id: 201, projectName: 'Unit One', percentageComplete: '22%'},
        {id: 202, projectName: 'Unit Two', percentageComplete: '33%'}
	]
	const newUnit = {id: 203, projectName: 'Unit Three', percentageComplete: '44%'}
	const expected = [
		{id: 201, projectName: 'Unit One', percentageComplete: '22%'},
        {id: 202, projectName: 'Unit Two', percentageComplete: '33%'},
        {id: 203, projectName: 'Unit Three', percentageComplete: '44%'}
	]

	const result = addUnit(startUnits, newUnit)

	//our expectation
	expect(result).not.toBe(startUnits)
})