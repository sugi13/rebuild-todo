import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDvkrWBTl9j7ArAbM1FqHGDILVgSHhWubA",
  authDomain: "todo-348bd.firebaseapp.com",
  projectId: "todo-348bd",
  storageBucket: "todo-348bd.appspot.com",
  messagingSenderId: "354583074091",
  appId: "1:354583074091:web:bbf422a037d0fe48b3616e",
  measurementId: "G-WQMHRNZWGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const TodoDb = getFirestore(app);