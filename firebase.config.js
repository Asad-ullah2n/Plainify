// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// import {getFireStore} from 'firebase/firestore';
import {getFirestore} from 'firebase/firestore';
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD0-suGd9587yrY1fc-FRZkgWvyzWtXgGw',
  authDomain: 'plainify.firebaseapp.com',
  projectId: 'plainify',
  storageBucket: 'plainify.appspot.com',
  messagingSenderId: '255080614188',
  appId: '1:255080614188:web:38432a05e07966b665c489',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const auth = getAuth(app);
export const db = getFirestore(app);
