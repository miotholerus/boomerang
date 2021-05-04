import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIDjvSHYWukWoMrV2qPUGgKMvp8TE3u3E",
  authDomain: "boomerang-1c8c9.firebaseapp.com",
  projectId: "boomerang-1c8c9",
  storageBucket: "boomerang-1c8c9.appspot.com",
  messagingSenderId: "118989719212",
  appId: "1:118989719212:web:a41001a958f934c9fb4109",
  measurementId: "G-BCWTCSDF0N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;