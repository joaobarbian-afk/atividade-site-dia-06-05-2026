// FirebaseConfig.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDQK3w61BG0NjtExRyO2Hq1EYzsVBcMuEA",
    authDomain: "temperatura-6880c.firebaseapp.com",
    databaseURL: "https://temperatura-6880c-default-rtdb.firebaseio.com",
    projectId: "temperatura-6880c",
    storageBucket: "temperatura-6880c.firebasestorage.app",
    messagingSenderId: "911884950088",
    appId: "1:911884950088:web:5250d99bf4d259cdc7167d"
};

const app = initializeApp(firebaseConfig);

// 🔥 exporta o banco
export const db = getDatabase(app);