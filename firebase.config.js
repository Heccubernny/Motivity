// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU4fThVkcWQn0QC75OjfUNSAiOCQmLpNY",
  authDomain: "motivity-dc63e.firebaseapp.com",
  projectId: "motivity-dc63e",
  storageBucket: "motivity-dc63e.appspot.com",
  messagingSenderId: "164474415557",
  appId: "1:164474415557:web:91eb097bc888a2214a03ac",
  measurementId: "G-MBFZC1S9XF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
