import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjYpuzU0OaJaSbPPdLTxjbNp7jX_MKTLc",
  authDomain: "my-app-64da7.firebaseapp.com",
  projectId: "my-app-64da7",
  storageBucket: "my-app-64da7.appspot.com",
  messagingSenderId: "66375860325",
  appId: "1:66375860325:web:8987228c3dae2fe94d068c",
  measurementId: "G-PKZRXP2M9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Function
function Signup() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      alert("SIGNUP SUCCESS!");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Login Function
function Login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      alert("LOGIN SUCCESS!");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Logout Function
function Signout() {
  signOut(auth)
    .then(() => {
      alert("SIGNOUT SUCCESS!");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Attach functions to `window` object
window.Signup = Signup;
window.Login = Login;
window.Signout = Signout;

// Authentication State Listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    alert("Active user: " + user.email);
  } else {
    alert("No user found!");
  }
});
