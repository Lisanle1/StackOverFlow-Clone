import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_kEY, 
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID, 
  appId: process.env.REACT_APP_APP_ID
};      

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp) ;
const db=getFirestore(firebaseApp) 
const provider = new GoogleAuthProvider();

export { db, auth, provider ,firebaseApp};
