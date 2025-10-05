
import {getAuth,GoogleAuthProvider} from "firebase/auth"


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "googaleloginonecart.firebaseapp.com",
  projectId: "googaleloginonecart",
  storageBucket: "googaleloginonecart.firebasestorage.app",
  messagingSenderId: "1090397620547",
  appId: "1:1090397620547:web:5442137e21ee99779ac7f6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}