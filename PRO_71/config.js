import firebase from "firebase";
require("@firebase/firestore");

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_H33fvzSL1xKhgkYA_HMEhBo2SFVqLH4",
  authDomain: "cycle-ride-6f090.firebaseapp.com",
  projectId: "cycle-ride-6f090",
  storageBucket: "cycle-ride-6f090.appspot.com",
  messagingSenderId: "886803873644",
  appId: "1:886803873644:web:20ab7f93e8b6d8a3547d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
