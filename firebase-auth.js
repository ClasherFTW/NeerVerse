// firebase-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, 
         createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         GoogleAuthProvider, 
         signInWithPopup, 
         signOut as firebaseSignOut,
         onAuthStateChanged,
         updateProfile } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjGJqvd0u4utDWNp38EQeQMjSibljV0ng",
  authDomain: "neerverse.firebaseapp.com",
  projectId: "neerverse",
  storageBucket: "neerverse.firebasestorage.app",
  messagingSenderId: "858343576790",
  appId: "1:858343576790:web:a881e766a05f44e0c3a577",
  measurementId: "G-V4D9NTCQKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Utility functions for messages
function showError(message) {
  alert(message); // you can replace with a styled UI element
}

function showSuccess(message) {
  alert(message);
}

function setButtonLoading(btn, isLoading, originalText) {
  if (!btn) return;
  if (isLoading) {
    btn.disabled = true;
    btn.textContent = "Loading...";
  } else {
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

// Save user in localStorage for UI update in index.html
function storeUser(user) {
  if (user) {
    localStorage.setItem("neerverseUser", JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }));
  } else {
    localStorage.removeItem("neerverseUser");
  }
}

function getStoredUser() {
  const data = localStorage.getItem("neerverseUser");
  return data ? JSON.parse(data) : null;
}

// Auth functions
async function signUpWithEmail(email, password, fullName) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (fullName) {
      await updateProfile(userCredential.user, { displayName: fullName });
    }
    storeUser(userCredential.user);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function signInWithEmail(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    storeUser(userCredential.user);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    storeUser(result.user);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function signOut() {
  try {
    await firebaseSignOut(auth);
    storeUser(null);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  storeUser(user);
});

// Expose globally for login.html and index.html
window.firebaseAuth = {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  showError,
  showSuccess,
  setButtonLoading,
  getStoredUser
};
