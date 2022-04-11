import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmiKKdYbVShZpLJO_nOLSLkBhmvSkU-YM",
    authDomain: "buzz-app-d344a.firebaseapp.com",
    projectId: "buzz-app-d344a",
    storageBucket: "buzz-app-d344a.appspot.com",
    messagingSenderId: "322638972399",
    appId: "1:322638972399:web:fbdd5d8a63380de7fee21a"
  };

  const app=initializeApp(firebaseConfig);

 export const auth=getAuth(app);