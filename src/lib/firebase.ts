import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAbU4l2SG5EVkxEkwoLLwM_UuvzL6sI1Cc",
  authDomain: "getflexai-db.firebaseapp.com",
  projectId: "getflexai-db",
  storageBucket: "getflexai-db.firebasestorage.app",
  messagingSenderId: "766613178533",
  appId: "1:766613178533:web:d7d1b0494d1bc61b64254c",
  measurementId: "G-FJ3LLNZZTT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);