
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "googaleloginonecart.firebaseapp.com",
  projectId: "googaleloginonecart",
  storageBucket: "googaleloginonecart.firebasestorage.app",
  messagingSenderId: "1090397620547",
  appId: "1:1090397620547:web:443e136a85540cf99ac7f6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth,provider}

// ..........................................................................................

// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "abcd-f882a.firebaseapp.com",
//   projectId: "abcd-f882a",
//   storageBucket: "abcd-f882a.firebasestorage.app",
//   messagingSenderId: "71056854212",
//   appId: "1:71056854212:web:a56e8bd592d5f335810d91"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const provider  = new GoogleAuthProvider()


// export {auth,provider}