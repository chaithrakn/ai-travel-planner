// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore as getFireStore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkUWnJYgn3XsYLdF7zt7LCoCOX2NWAXIA",
  authDomain: "ai-trip-planner-e3b90.firebaseapp.com",
  projectId: "ai-trip-planner-e3b90",
  storageBucket: "ai-trip-planner-e3b90.firebasestorage.app",
  messagingSenderId: "813384810557",
  appId: "1:813384810557:web:8501d43b52ea31f7ceea54",
  measurementId: "G-60LPYHZK5P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);

//const analytics = getAnalytics(app);