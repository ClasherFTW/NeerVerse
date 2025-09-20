// Firebase Authentication Module
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjGJqvd0u4utDWNp38EQeQMjSibljV0ng",
  authDomain: "neerverse.firebaseapp.com",
  projectId: "neerverse",
  storageBucket: "neerverse.firebasestorage.app",
  messagingSenderId: "858343576790",
  appId: "1:858343576790:web:a881e766a05f44e0c3a577",
  measurementId: "G-V4D9NTCQKP",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

// Firebase Auth Class
class FirebaseAuthManager {
  constructor() {
    this.currentUser = null
    this.init()
  }

  init() {
    // Listen for authentication state changes
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user
      this.handleAuthStateChange(user)
    })
  }

  handleAuthStateChange(user) {
    if (user) {
      console.log("User signed in:", user.email)
      // User is signed in
      this.onUserSignedIn(user)
    } else {
      console.log("User signed out")
      // User is signed out
      this.onUserSignedOut()
    }
  }

  onUserSignedIn(user) {
    // Store user info in localStorage for easy access
    localStorage.setItem(
      "neerverse_user",
      JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }),
    )

    // Redirect to main dashboard/app
    if (window.location.pathname.includes("login")) {
      window.location.href = "index.html"
    }

    // Update UI elements if on main page
    this.updateUIForSignedInUser(user)
  }

  onUserSignedOut() {
    // Clear user info from localStorage
    localStorage.removeItem("neerverse_user")

    // Update UI elements
    this.updateUIForSignedOutUser()
  }

  updateUIForSignedInUser(user) {
    // Update header auth buttons if they exist
    const signInBtn = document.querySelector(".btn-text")
    const getStartedBtn = document.querySelector(".btn-primary")

    if (signInBtn && getStartedBtn) {
      signInBtn.textContent = user.displayName || user.email
      signInBtn.href = "#profile"

      getStartedBtn.textContent = "Dashboard"
      getStartedBtn.href = "#dashboard"
    }
  }

  updateUIForSignedOutUser() {
    // Reset header auth buttons if they exist
    const signInBtn = document.querySelector(".btn-text")
    const getStartedBtn = document.querySelector(".btn-primary")

    if (signInBtn && getStartedBtn) {
      signInBtn.textContent = "Sign in"
      signInBtn.href = "neerverse_login.html"

      getStartedBtn.textContent = "Get started"
      getStartedBtn.href = "#getstarted"
    }
  }

  // Sign in with email and password
  async signInWithEmail(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return { success: true, user: userCredential.user }
    } catch (error) {
      console.error("Sign in error:", error)
      return { success: false, error: this.getErrorMessage(error.code) }
    }
  }

  // Sign up with email and password
  async signUpWithEmail(email, password, fullName) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      // Update user profile with display name
      if (fullName) {
        await updateProfile(userCredential.user, {
          displayName: fullName,
        })
      }

      return { success: true, user: userCredential.user }
    } catch (error) {
      console.error("Sign up error:", error)
      return { success: false, error: this.getErrorMessage(error.code) }
    }
  }

  // Sign in with Google
  async signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      return { success: true, user: result.user }
    } catch (error) {
      console.error("Google sign in error:", error)
      return { success: false, error: this.getErrorMessage(error.code) }
    }
  }

  // Sign out
  async signOut() {
    try {
      await signOut(auth)
      return { success: true }
    } catch (error) {
      console.error("Sign out error:", error)
      return { success: false, error: this.getErrorMessage(error.code) }
    }
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser
  }

  // Check if user is signed in
  isSignedIn() {
    return this.currentUser !== null
  }

  // Get user from localStorage (for immediate access)
  getStoredUser() {
    const storedUser = localStorage.getItem("neerverse_user")
    return storedUser ? JSON.parse(storedUser) : null
  }

  // Convert Firebase error codes to user-friendly messages
  getErrorMessage(errorCode) {
    const errorMessages = {
      "auth/user-not-found": "No account found with this email address.",
      "auth/wrong-password": "Incorrect password. Please try again.",
      "auth/email-already-in-use": "An account with this email already exists.",
      "auth/weak-password": "Password should be at least 6 characters long.",
      "auth/invalid-email": "Please enter a valid email address.",
      "auth/too-many-requests": "Too many failed attempts. Please try again later.",
      "auth/network-request-failed": "Network error. Please check your connection.",
      "auth/popup-closed-by-user": "Sign-in popup was closed before completion.",
      "auth/cancelled-popup-request": "Sign-in was cancelled.",
      "auth/popup-blocked": "Sign-in popup was blocked by the browser.",
    }

    return errorMessages[errorCode] || "An unexpected error occurred. Please try again."
  }

  // Show loading state on button
  setButtonLoading(button, isLoading, originalText) {
    if (isLoading) {
      button.disabled = true
      button.style.opacity = "0.7"
      button.textContent = "Loading..."
    } else {
      button.disabled = false
      button.style.opacity = "1"
      button.textContent = originalText
    }
  }

  // Show error message
  showError(message, containerId = "error-container") {
    let errorContainer = document.getElementById(containerId)

    if (!errorContainer) {
      errorContainer = document.createElement("div")
      errorContainer.id = containerId
      errorContainer.style.cssText = `
                background: #ff4444;
                color: white;
                padding: 12px 16px;
                border-radius: 8px;
                margin-bottom: 20px;
                font-size: 14px;
                display: none;
            `

      // Insert at the top of the form
      const form = document.querySelector(".auth-form.active form") || document.querySelector("form")
      if (form) {
        form.insertBefore(errorContainer, form.firstChild)
      }
    }

    errorContainer.textContent = message
    errorContainer.style.display = "block"

    // Auto-hide after 5 seconds
    setTimeout(() => {
      errorContainer.style.display = "none"
    }, 5000)
  }

  // Show success message
  showSuccess(message, containerId = "success-container") {
    let successContainer = document.getElementById(containerId)

    if (!successContainer) {
      successContainer = document.createElement("div")
      successContainer.id = containerId
      successContainer.style.cssText = `
                background: #00aa44;
                color: white;
                padding: 12px 16px;
                border-radius: 8px;
                margin-bottom: 20px;
                font-size: 14px;
                display: none;
            `

      // Insert at the top of the form
      const form = document.querySelector(".auth-form.active form") || document.querySelector("form")
      if (form) {
        form.insertBefore(successContainer, form.firstChild)
      }
    }

    successContainer.textContent = message
    successContainer.style.display = "block"

    // Auto-hide after 3 seconds
    setTimeout(() => {
      successContainer.style.display = "none"
    }, 3000)
  }
}

// Create global instance
window.firebaseAuth = new FirebaseAuthManager()

// Export for use in other scripts
export default window.firebaseAuth
