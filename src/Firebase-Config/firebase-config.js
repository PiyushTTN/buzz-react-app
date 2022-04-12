// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmiKKdYbVShZpLJO_nOLSLkBhmvSkU-YM",
  authDomain: "buzz-app-d344a.firebaseapp.com",
  projectId: "buzz-app-d344a",
  storageBucket: "buzz-app-d344a.appspot.com",
  messagingSenderId: "322638972399",
  appId: "1:322638972399:web:fbdd5d8a63380de7fee21a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

