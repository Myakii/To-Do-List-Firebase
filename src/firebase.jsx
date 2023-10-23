// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR--FIREBASE",
  authDomain: "to-do-list---luc-lu-web2.firebaseapp.com",
  projectId: "to-do-list---luc-lu-web2",
  storageBucket: "to-do-list---luc-lu-web2.appspot.com",
  messagingSenderId: "447299239157",
  appId: "1:447299239157:web:8be04365478e4bc6fb19bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 
