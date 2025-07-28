
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJ3vzbnTDc76Y_O0BWPVj2Mnl6gzfvugI",
    authDomain: "auth-x-test-eb362.firebaseapp.com",
    projectId: "auth-x-test-eb362",
    storageBucket: "auth-x-test-eb362.firebasestorage.app",
    messagingSenderId: "350778376557",
    appId: "1:350778376557:web:265a81fce4fc2d430b5a64",
    measurementId: "G-JZ6JBLPQBH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
