
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCtjo6GNP01AxprloZddyuYzGIXLeo4g2I",
  authDomain: "classicl.firebaseapp.com",
  projectId: "classicl",
  storageBucket: "classicl.appspot.com",
  messagingSenderId: "928627670801",
  appId: "1:928627670801:web:be9aa527577511e8fe96b0",
  measurementId: "G-15CKGTS8R9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);