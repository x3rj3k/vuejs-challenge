import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC1XVGnEOjq776qJvIFfrXIIPrtxByQupA',
  authDomain: "vuejs-challenge.firebaseapp.com",
  projectId: "vuejs-challenge",
  storageBucket: "vuejs-challenge.appspot.com",
  messagingSenderId: "839798378588",
  appId: "1:839798378588:web:be4d096211c79bf77dd699"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App).use(router)

app.mount("#app")
