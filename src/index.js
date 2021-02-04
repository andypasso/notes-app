import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"

// // const firebase = require('firebase');
// require('firebase/firestore');

//   const firebaseConfig = {
//     apiKey: "AIzaSyAVA9Q9Aby3P81ddjOMFxZQURy8p1BaLtY",
//     authDomain: "notes-app-6f20c.firebaseapp.com",
//     projectId: "notes-app-6f20c",
//     storageBucket: "notes-app-6f20c.appspot.com",
//     messagingSenderId: "433047887520",
//     appId: "1:433047887520:web:23ffe85f98f0b5e755b3c5",
//     measurementId: "G-2L997NQYDN"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('notesapp-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
