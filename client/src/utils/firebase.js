
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "ai-interview-agent-ad1a9.firebaseapp.com",
  projectId: "ai-interview-agent-ad1a9",
  storageBucket: "ai-interview-agent-ad1a9.firebasestorage.app",
  messagingSenderId: "857705432047",
  appId: "1:857705432047:web:293822c66df677dcfd6c1a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}