import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAVA9Q9Aby3P81ddjOMFxZQURy8p1BaLtY",
  authDomain: "notes-app-6f20c.firebaseapp.com",
  projectId: "notes-app-6f20c",
  storageBucket: "notes-app-6f20c.appspot.com",
  messagingSenderId: "433047887520",
  appId: "1:433047887520:web:23ffe85f98f0b5e755b3c5",
  measurementId: "G-2L997NQYDN"
})

export const auth = app.auth()
export default app