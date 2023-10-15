import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDBmcGjuW95Is0Qhu4B0iCKLHPEJvItB24",
    authDomain: "todo-c472a.firebaseapp.com",
    projectId: "todo-c472a",
    storageBucket: "todo-c472a.appspot.com",
    messagingSenderId: "1074143921481",
    appId: "1:1074143921481:web:48b99e394b4ba7df6d0698",
    measurementId: "G-HZZ0ZGZT6S"
};

export const firebase = firebase.initializeApp(firebaseConfig)
