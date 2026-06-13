import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD3WBCaMFDJaYSuqBYft6wTdVxcauXq5yw",
  authDomain: "konrad-wendel.firebaseapp.com",
  projectId: "konrad-wendel",
  storageBucket: "konrad-wendel.firebasestorage.app",
  messagingSenderId: "10012456001",
  appId: "1:10012456001:web:37a6aa910942768a2282c0"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)