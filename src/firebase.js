import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgD2rE6ojNW8C7kERJpVZ8eoDhlZY2Eag",
  authDomain: "recesshackcode.firebaseapp.com",
  projectId: "recesshackcode",
  storageBucket: "recesshackcode.firebasestorage.app",
  messagingSenderId: "878403858311",
  appId: "1:878403858311:web:ca7de3d37ffc55774e6d22",
  measurementId: "G-V6Q7QR0CJY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };