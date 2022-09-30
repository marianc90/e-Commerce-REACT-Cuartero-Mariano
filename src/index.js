import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgM0KxlGebq17A9FptOHwNd0I_NpVKf0g",
  authDomain: "ecommerce-cuartero-mariano.firebaseapp.com",
  projectId: "ecommerce-cuartero-mariano",
  storageBucket: "ecommerce-cuartero-mariano.appspot.com",
  messagingSenderId: "579541135166",
  appId: "1:579541135166:web:57d89fe2188d1abf43066f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
