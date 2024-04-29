import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js'
import {  getFirestore } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyD199X8QjasLbd634gC1jiqLMBquxNiYVI",
  authDomain: "writing-app-d80c6.firebaseapp.com",
  databaseURL: "https://writing-app-d80c6-default-rtdb.firebaseio.com",
  projectId: "writing-app-d80c6",
  storageBucket: "writing-app-d80c6.appspot.com",
  messagingSenderId: "658884767625",
  appId: "1:658884767625:web:081fb9e82e1783e7e13b58",
  measurementId: "G-J4K08VGTZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  db,
  auth
}