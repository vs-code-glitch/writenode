import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnfpVLRLJU_Pq0MAKaS_2Ixbb4wN1NMBE",
  authDomain: "writenode-f09d8.firebaseapp.com",
  projectId: "writenode-f09d8",
  storageBucket: "writenode-f09d8.appspot.com",
  messagingSenderId: "741535795802",
  appId: "1:741535795802:web:a316b88f1d2b781d61e663",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
