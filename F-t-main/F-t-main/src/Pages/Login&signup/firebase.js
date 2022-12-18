// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYGHzWlTXZU3PC6tl9Xx-fWVTFLrK1RLE",
  authDomain: "seraphic-effect-327818.firebaseapp.com",
  projectId: "seraphic-effect-327818",
  storageBucket: "seraphic-effect-327818.appspot.com",
  messagingSenderId: "1008530344539",
  appId: "1:1008530344539:web:741a052d49718164db0d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);

const provider = new GoogleAuthProvider();

export  const siginInwithGoogle=()=>{
  signInWithPopup(auth,provider).then((res)=>{
console.log(res)
  }).catch((e)=>{
    console.log(e)
  })
}

