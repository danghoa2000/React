// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk7Of0_RLShGvaDOVfj9SL3bMa6ygdshM",
  authDomain: "reactapp-c6343.firebaseapp.com",
  databaseURL: "https://reactapp-c6343-default-rtdb.firebaseio.com",
  projectId: "reactapp-c6343",
  storageBucket: "reactapp-c6343.appspot.com",
  messagingSenderId: "941208912752",
  appId: "1:941208912752:web:1ac9d6e7f29b88e94c85b5",
  measurementId: "G-6YB5F8HY25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireStore = getFirestore(app);
const storage = getStorage(app)

export { app, fireStore, storage}