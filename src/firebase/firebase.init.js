// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo5i8ShLSY3JNPFF6rBHKpoWVwzaQ-s98",
  authDomain: "my-football-team-b17e4.firebaseapp.com",
  projectId: "my-football-team-b17e4",
  storageBucket: "my-football-team-b17e4.firebasestorage.app",
  messagingSenderId: "439307130403",
  appId: "1:439307130403:web:78b25666dd069b3b88c396"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);