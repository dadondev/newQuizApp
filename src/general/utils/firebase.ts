import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB8Y-PAZsnu7RelsKW91YJVP432HHeTGOo",
  authDomain: "quizapp-ea4cc.firebaseapp.com",
  projectId: "quizapp-ea4cc",
  storageBucket: "quizapp-ea4cc.appspot.com",
  messagingSenderId: "396934706743",
  appId: "1:396934706743:web:8ac1723d1b0f16062131b2",
  measurementId: "G-JTD0K3L0VW",
  databaseURL:
    "https://quizapp-ea4cc-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const realDB = getDatabase(app);
const GoogleProvider = new GoogleAuthProvider();
const baseUrl = "https://39224f04915dd470.mokky.dev/";

export { app, auth, realDB, GoogleProvider, baseUrl };
