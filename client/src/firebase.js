
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBs4Ku84NupNF4q5bdohm5DF22vETSkiyI",
  authDomain: "ocupop-sandbox.firebaseapp.com",
  databaseURL: "https://ocupop-sandbox.firebaseio.com",
  projectId: "ocupop-sandbox",
  storageBucket: "ocupop-sandbox.appspot.com",
  messagingSenderId: "333542743522",
  appId: "1:333542743522:web:07454dc6687dc30469adbb",
  measurementId: "G-Y2F98F4FPF"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();
export const auth = firebase.auth();