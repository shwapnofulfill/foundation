// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize Firebase dynamically
importScriptAndInit();

function importScriptAndInit(){
  const s1 = document.createElement('script');
  s1.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
  s1.onload = () => {
      const s2 = document.createElement('script');
      s2.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js";
      s2.onload = () => {
          const s3 = document.createElement('script');
          s3.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js";
          s3.onload = setupFirebase;
          document.head.appendChild(s3);
      };
      document.head.appendChild(s2);
  };
  document.head.appendChild(s1);
}

function setupFirebase(){
  window.firebaseApp = firebase.initializeApp(firebaseConfig);
  window.auth = firebase.auth();
  window.db = firebase.firestore();
  console.log("Firebase initialized");
}
