import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// Use the global variable for Firebase config
const firebaseConfig = window.firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth if needed elsewhere
export { auth };

// Signup Function
function Signup() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  // Basic validation
  if (!email || !pass) {
    displayError("Please fill in both email and password!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      alert("Signup successful! Welcome, " + userCredential.user.email);
      clearInputs();
    })
    .catch((error) => {
      displayError(error.message);
    });
}

// Login Function
function Login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    displayError("Please fill in both email and password!");
    return;
  }

  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      alert("Login successful! Welcome back, " + userCredential.user.email);
      clearInputs();
    })
    .catch((error) => {
      displayError(error.message);
    });
}

// Logout Function
function Signout() {
  signOut(auth)
    .then(() => {
      alert("Signout successful! See you soon.");
    })
    .catch((error) => {
      displayError(error.message);
    });
}

// Authentication State Listener
// Authentication State Listener
onAuthStateChanged(auth, (user) => {
  const errorDiv = document.getElementById("error-message");
  if (user) {
    // Option 1: Log user details instead of showing an alert
    console.log("Active user:", user.email);

    // Option 2: Dynamically display user info on the page (if needed)
    if (errorDiv) {
      errorDiv.textContent = "Welcome back, " + user.email + "!";
      errorDiv.style.color = "green";
    }
  } else {
    console.log("No active user");
    if (errorDiv) {
      errorDiv.textContent = "No user is currently logged in.";
      errorDiv.style.color = "red";
    }
  }
});

// Utility Functions

// Display error messages in the UI
function displayError(message) {
  const errorDiv = document.getElementById("error-message");
  if (errorDiv) {
    errorDiv.textContent = message;
  } else {
    alert(message); // Fallback for when error message element is missing
  }
}

// Clear input fields
function clearInputs() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

// Attach functions to the `window` object for HTML to access
window.Signup = Signup;
window.Login = Login;
window.Signout = Signout;
