import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js'


 
// Firebase 設定
const firebaseConfig = {
  // 設定憑證
  apiKey: "AIzaSyD199X8QjasLbd634gC1jiqLMBquxNiYVI",
  authDomain: "writing-app-d80c6.firebaseapp.com",
  databaseURL: "https://writing-app-d80c6-default-rtdb.firebaseio.com",
  projectId: "writing-app-d80c6",
  storageBucket: "writing-app-d80c6.appspot.com",
  messagingSenderId: "658884767625",
  appId: "1:658884767625:web:081fb9e82e1783e7e13b58",
  measurementId: "G-J4K08VGTZZ"
};
 
// 初始化 Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
 
// 監聽表單提交事件
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault(); // 防止表單提交
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  signInWithEmailAndPassword(auth, username, password)
    .then(userCredential => {
      // 登入成功
      const user = userCredential.user;
      console.log(`登入成功，使用者 ID：${user.uid}`);
    })
    .catch(error => {
      // 登入失敗
      console.error(`登入失敗，原因：${error.message}`);
    });
});
