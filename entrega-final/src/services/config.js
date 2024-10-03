
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "captain-drink.firebaseapp.com",
    projectId: "captain-drink",
    storageBucket: "captain-drink.appspot.com",
    messagingSenderId: "158618011273",
    appId: "1:158618011273:web:6f7ab1e85008ef6361a858"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)