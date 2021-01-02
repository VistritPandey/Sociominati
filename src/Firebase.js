import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgAGXZf_qvZ_vOjq1cDxmm-XhAMLCISxw",
  authDomain: "sociominati.firebaseapp.com",
  projectId: "sociominati",
  storageBucket: "sociominati.appspot.com",
  messagingSenderId: "110797338899",
  appId: "1:110797338899:web:c92b5d8eff266a7eabc2e6",
  measurementId: "G-QDPET77XZ0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
