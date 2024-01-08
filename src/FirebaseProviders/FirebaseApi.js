import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCSEuxsOIFqKiopHMTJATffLfhRXHMcFFc',
    authDomain: 'pruebatecnica-9999d.firebaseapp.com',
    projectId: 'pruebatecnica-9999d',
    storageBucket: 'pruebatecnica-9999d.appspot.com',
    messagingSenderId: '438064308075',
    appId: '1:438064308075:web:0ca6b8449faae1575bb62e'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);
