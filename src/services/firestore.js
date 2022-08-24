// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDD42YZbo1lr55IGRBPPoKKlkFJd4Ta6zs",
  authDomain: "coderhouse-reactjs-16559.firebaseapp.com",
  projectId: "coderhouse-reactjs-16559",
  storageBucket: "coderhouse-reactjs-16559.appspot.com",
  messagingSenderId: "691198418729",
  appId: "1:691198418729:web:a3d1a12acddb8c9ba0a138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);


export default firestoreDB;