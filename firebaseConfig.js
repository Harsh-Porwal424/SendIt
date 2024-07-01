// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnRTnaXIh_DJNXgaRHD64Kf6NTd4LiiA8",
  authDomain: "shikshasamvad-7f230.firebaseapp.com",
  projectId: "shikshasamvad-7f230",
  storageBucket: "shikshasamvad-7f230.appspot.com",
  messagingSenderId: "386462986116",
  appId: "1:386462986116:web:65d738ff04d605264677d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };