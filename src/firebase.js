// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAA6XljvjarOgy5HcYoqqM2xXFQ4QCYwdo",
    authDomain: "disney-clone-a509a.firebaseapp.com",
    projectId: "disney-clone-a509a",
    storageBucket: "disney-clone-a509a.appspot.com",
    messagingSenderId: "567071374359",
    appId: "1:567071374359:web:4301fc861b64e997397052"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const storage = getStorage(FirebaseApp);


export { auth, provider, storage };
export default db;