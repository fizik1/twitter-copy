// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmhBADz1rnFg2wegXcW44fJHgrxcGV01g",
    authDomain: "twitter-copy-94b93.firebaseapp.com",
    projectId: "twitter-copy-94b93",
    storageBucket: "twitter-copy-94b93.appspot.com",
    messagingSenderId: "527308666974",
    appId: "1:527308666974:web:0093298c97b5b1bced1ccf"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
