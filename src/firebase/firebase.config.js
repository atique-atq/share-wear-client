// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpph0Q5nj_nrId2IUHzboEBryKS5XhfCc",
  authDomain: "sharewearbd.firebaseapp.com",
  projectId: "sharewearbd",
  storageBucket: "sharewearbd.appspot.com",
  messagingSenderId: "483233469475",
  appId: "1:483233469475:web:dfd10dcb67df319d40cd96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;