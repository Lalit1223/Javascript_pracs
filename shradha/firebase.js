import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// Use the global variable
const firebaseConfig = window.firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

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
