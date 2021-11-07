import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { seedDatabase } from '../seed'

const config = {
  apiKey: "AIzaSyCq2l3v1rlLEhakIR_1KB5cjBwgRdMCtD8",
  authDomain: "techbook-karthik.firebaseapp.com",
  projectId: "techbook-karthik",
  storageBucket: "techbook-karthik.appspot.com",
  messagingSenderId: "914295971995",
  appId: "1:914295971995:web:72ad3c33646ae72619a63e",
  measurementId: "G-Q4SLRRJL69"
}

const Firebase = firebase.initializeApp(config)
const { FieldValue } = firebase.firestore

// seedDatabase(firebase)

export { Firebase, FieldValue }