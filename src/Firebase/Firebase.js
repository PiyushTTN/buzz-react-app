// new v9
// import { firebase } from "@firebase/app";
// old method
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj_gL5O1FkiZafneVSCV4HnHXgeDdLoAc",
  authDomain: "buzz-app-16976.firebaseapp.com",
  projectId: "buzz-app-16976",
  storageBucket: "buzz-app-16976.appspot.com",
  messagingSenderId: "538068798104",
  appId: "1:538068798104:web:068fada22546d707b65eed",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

// export { Firebase };
export const authentication = getAuth(Firebase);
