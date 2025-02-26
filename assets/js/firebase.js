import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7oSFLZiMWkgwvywrrsqcY6hsv19eJzUA",
  authDomain: "budget-planner-c212b.firebaseapp.com",
  projectId: "budget-planner-c212b",
  storageBucket: "budget-planner-c212b.firebasestorage.app",
  messagingSenderId: "132925079494",
  appId: "1:132925079494:web:53cce13e3cd042e11abcc7",
  measurementId: "G-4V29XK306F",
};

const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export the instances
export { auth, db };
