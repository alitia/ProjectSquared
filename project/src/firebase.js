// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAaPyxn2aaA_bjPlGJ0NxNSsSLGuHohy8E",
    authDomain: "projectsquared-a89e8.firebaseapp.com",
    databaseURL: "https://projectsquared-a89e8.firebaseio.com",
    projectId: "projectsquared-a89e8",
    storageBucket: "projectsquared-a89e8.appspot.com",
    messagingSenderId: "54546234875"
};
firebase.initializeApp(config);
export default firebase;