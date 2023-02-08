import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { saveUser } from './saveUser';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASURUMENT_ID,
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  saveUser,
};
