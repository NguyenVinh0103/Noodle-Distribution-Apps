// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0J0jeLiCb5HLBMHWXSHjvDK6FVv2Tokk",
  authDomain: "nodle-app.firebaseapp.com",
  projectId: "nodle-app",
  storageBucket: "nodle-app.appspot.com",
  messagingSenderId: "1081710729850",
  appId: "1:1081710729850:web:f8cdb7c19c384d9410f9c3",
  measurementId: "G-15V4MJET9K"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);