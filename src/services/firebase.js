import firebase from "firebase/compat/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT00u_yTDAHp2qCsLoWCiUy_Y-D-jA7wk",
  authDomain: "resoluteai-f43aa.firebaseapp.com",
  projectId: "resoluteai-f43aa",
  storageBucket: "resoluteai-f43aa.appspot.com",
  messagingSenderId: "1007688291413",
  appId: "1:1007688291413:web:461241e313b17bd051f0dc",
  measurementId: "G-73BG1XYMZ3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = getFirestore(firebase.initializeApp(firebaseConfig));

// add document in firebase
