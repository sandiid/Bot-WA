const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDHllm5mHiQd7XQL5IM2ppYgd3PBLT-HQk",
  authDomain: "tokoonlen-2b2ca.firebaseapp.com",
  databaseURL: "https://tokoonlen-2b2ca.firebaseio.com",
  projectId: "tokoonlen-2b2ca",
  storageBucket: "tokoonlen-2b2ca.appspot.com",
  messagingSenderId: "944120320286",
  appId: "1:944120320286:web:b9f110ce3a3b4d9e27f90f",
  measurementId: "G-LKRTFPL0VV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };
