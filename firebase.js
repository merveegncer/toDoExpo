import{initializeApp} from "firebase/app"
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDjP1FVT9GCwkdUUZOhiJmXnkposbeHZl0",
  authDomain: "my-app-7942a.firebaseapp.com",
  projectId: "my-app-7942a",
  storageBucket: "my-app-7942a.appspot.com",
  messagingSenderId: "192684274359",
  appId: "1:192684274359:web:cc6152d2c1f0aa522f9332",
  measurementId: "G-4PNQBMCQ22"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();



  export{
    auth,
    db
  }

