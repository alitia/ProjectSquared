import React, { Component } from 'react';
import firebase from '../firebase.js';

// checks if the first project returned from the database 
// contains a project that at least looks like a project
test('get list of a users projects from database', () => {

	const data = ['id', 'percentageComplete', 'projectName', 'projectsInside', 'units'].sort()
	const ref = firebase.database().ref("projects")
	//gets stuck at .once
    return ref.once('value').then(res => {
    	const list = (Object.keys(res['104']).sort())
    	expect(list).toEqual(data)
    })
})