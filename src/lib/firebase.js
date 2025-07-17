// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBySopxxWConJ44hmffQV1fLz1gzLy_5eo",
  authDomain: "hurdahub.firebaseapp.com",
  projectId: "hurdahub",
  storageBucket: "hurdahub.firebasestorage.app",
  messagingSenderId: "643018652662",
  appId: "1:643018652662:web:f18aff23120955cd2a65d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app; 