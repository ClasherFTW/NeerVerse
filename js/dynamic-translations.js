// Dynamic content translation system for NeerVerse
// Handles real-time content, user-generated content, and dynamic elements

class DynamicTranslationManager {
  constructor(translationManager) {
    this.translationManager = translationManager
    this.dynamicContent = new Map()
    this.observers = new Map()
    this.init()
  }

  init() {
    this.setupMutationObserver()
    this.setupDynamicContentHandlers()
    this.translateExistingDynamicContent()
  }

  // Set up mutation observer to detect new dynamic content
  setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.translateNewElement(node)
            }
          })
        }
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    this.observers.set("mutation", observer)
  }

  // Translate newly added elements
  translateNewElement(element) {
    // Find all elements with translation attributes
    const translatableElements = element.querySelectorAll("[data-translate]")
    translatableElements.forEach((el) => {
      const key = el.getAttribute("data-translate")
      const translation = this.translationManager.translate(key)

      if (el.tagName === "INPUT" && (el.type === "text" || el.type === "email" || el.type === "tel")) {
        el.placeholder = translation
      } else if (el.hasAttribute("title")) {
        el.title = translation
      } else if (el.hasAttribute("aria-label")) {
        el.setAttribute("aria-label", translation)
      } else {
        el.textContent = translation
      }
    })

    // Handle the element itself if it has translation attribute
    if (element.hasAttribute && element.hasAttribute("data-translate")) {
      const key = element.getAttribute("data-translate")
      const translation = this.translationManager.translate(key)

      if (
        element.tagName === "INPUT" &&
        (element.type === "text" || element.type === "email" || element.type === "tel")
      ) {
        element.placeholder = translation
      } else if (element.hasAttribute("title")) {
        element.title = translation
      } else if (element.hasAttribute("aria-label")) {
        element.setAttribute("aria-label", translation)
      } else {
        element.textContent = translation
      }
    }
  }

  // Set up handlers for dynamic content areas
  setupDynamicContentHandlers() {
    // Handle community feed posts
    this.setupFeedTranslations()

    // Handle notification messages
    this.setupNotificationTranslations()

    // Handle form validation messages
    this.setupFormValidationTranslations()

    // Handle loading states
    this.setupLoadingStateTranslations()
  }

  // Translate existing dynamic content on page load
  translateExistingDynamicContent() {
    // Translate time-based content
    this.translateTimeElements()

    // Translate status indicators
    this.translateStatusElements()

    // Translate interactive elements
    this.translateInteractiveElements()
  }

  // Handle community feed translations
  setupFeedTranslations() {
    const feedContainer = document.getElementById("tweetsContainer") || document.querySelector(".tweets-container")
    if (!feedContainer) return

    // Store original post templates for translation
    this.dynamicContent.set("feedPosts", {
      timeAgo: {
        "just now": "common.justnow",
        "minutes ago": "common.minutesago",
        "hours ago": "common.hoursago",
        "days ago": "common.daysago",
      },
      actions: {
        like: "common.like",
        comment: "common.comment",
        share: "common.share",
      },
    })

    // Override the displayTweets function if it exists
    if (window.displayTweets) {
      const originalDisplayTweets = window.displayTweets
      window.displayTweets = (tweets) => {
        const result = originalDisplayTweets(tweets)
        this.translateFeedContent()
        return result
      }
    }
  }

  // Translate feed content after it's loaded
  translateFeedContent() {
    const feedContainer = document.getElementById("tweetsContainer") || document.querySelector(".tweets-container")
    if (!feedContainer) return

    // Translate time indicators
    feedContainer.querySelectorAll(".tweet-time").forEach((timeEl) => {
      const text = timeEl.textContent
      if (text.includes("minutes ago")) {
        const minutes = text.match(/(\d+)/)?.[1] || ""
        timeEl.textContent = `${minutes} ${this.translationManager.translate("common.minutes")} ${this.translationManager.translate("common.ago")}`
      } else if (text.includes("hours ago")) {
        const hours = text.match(/(\d+)/)?.[1] || ""
        timeEl.textContent = `${hours} ${this.translationManager.translate("common.hours")} ${this.translationManager.translate("common.ago")}`
      } else if (text.includes("days ago")) {
        const days = text.match(/(\d+)/)?.[1] || ""
        timeEl.textContent = `${days} ${this.translationManager.translate("common.days")} ${this.translationManager.translate("common.ago")}`
      } else if (text.includes("Just now")) {
        timeEl.textContent = this.translationManager.translate("common.justnow") || "Just now"
      }
    })

    // Translate hashtags context (keep hashtags but translate surrounding text)
    feedContainer.querySelectorAll(".tweet-content").forEach((contentEl) => {
      // This is where you could implement more sophisticated content translation
      // For now, we keep user-generated content as-is but could add translation service integration
    })
  }

  // Handle notification translations
  setupNotificationTranslations() {
    // Override showNotification function if it exists
    if (window.showNotification) {
      const originalShowNotification = window.showNotification
      window.showNotification = (message, type) => {
        const translatedMessage = this.translateNotificationMessage(message)
        return originalShowNotification(translatedMessage, type)
      }
    }
  }

  // Translate notification messages
  translateNotificationMessage(message) {
    const notificationTranslations = {
      "Auto-refresh enabled": "notifications.autorefresh.enabled",
      "Auto-refresh disabled": "notifications.autorefresh.disabled",
      "Connection failed - showing offline data": "notifications.connection.failed",
      Fetched: "notifications.fetched",
      alerts: "notifications.alerts",
      "Sign in successful! Redirecting...": "notifications.signin.success",
      "Google sign in successful! Redirecting...": "notifications.google.success",
      "Account created successfully! Welcome to Neerverse!": "notifications.signup.success",
    }

    // Check for exact matches first
    for (const [original, key] of Object.entries(notificationTranslations)) {
      if (message.includes(original)) {
        const translation = this.translationManager.translate(key)
        if (translation !== key) {
          return message.replace(original, translation)
        }
      }
    }

    // Handle dynamic messages with numbers
    if (message.match(/Fetched \d+ alerts/)) {
      const number = message.match(/\d+/)[0]
      const fetchedText = this.translationManager.translate("notifications.fetched") || "Fetched"
      const alertsText = this.translationManager.translate("notifications.alerts") || "alerts"
      return `${fetchedText} ${number} ${alertsText}`
    }

    return message
  }

  // Handle form validation translations
  setupFormValidationTranslations() {
    // Add validation message translations
    this.dynamicContent.set("validation", {
      required: "validation.required",
      "invalid email": "validation.email.invalid",
      "password too short": "validation.password.short",
      "passwords do not match": "validation.password.mismatch",
    })

    // Override form validation if needed
    document.addEventListener("invalid", (e) => {
      const input = e.target
      if (input.validity.valueMissing) {
        const fieldName = input.getAttribute("data-field-name") || input.name || "field"
        const message = this.translationManager.translate("validation.required") || "This field is required"
        input.setCustomValidity(`${fieldName} ${message}`)
      }
    })
  }

  // Handle loading state translations
  setupLoadingStateTranslations() {
    // Translate loading text dynamically
    const loadingElements = document.querySelectorAll(".loading-text, .loading p")
    loadingElements.forEach((el) => {
      if (el.textContent.includes("Loading") || el.textContent.includes("Fetching")) {
        el.setAttribute("data-translate", "common.loading")
      }
    })
  }

  // Translate time-based elements
  translateTimeElements() {
    const timeElements = document.querySelectorAll("[data-time]")
    timeElements.forEach((el) => {
      const timestamp = el.getAttribute("data-time")
      const translatedTime = this.formatTranslatedTime(timestamp)
      el.textContent = translatedTime
    })
  }

  // Format time with translations
  formatTranslatedTime(timestamp) {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now - date

    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) {
      return this.translationManager.translate("common.justnow") || "Just now"
    } else if (minutes < 60) {
      const minutesText = this.translationManager.translate("common.minutes") || "minutes"
      const agoText = this.translationManager.translate("common.ago") || "ago"
      return `${minutes} ${minutesText} ${agoText}`
    } else if (hours < 24) {
      const hoursText = this.translationManager.translate("common.hours") || "hours"
      const agoText = this.translationManager.translate("common.ago") || "ago"
      return `${hours} ${hoursText} ${agoText}`
    } else {
      const daysText = this.translationManager.translate("common.days") || "days"
      const agoText = this.translationManager.translate("common.ago") || "ago"
      return `${days} ${daysText} ${agoText}`
    }
  }

  // Translate status elements
  translateStatusElements() {
    const statusElements = document.querySelectorAll(".status, .connection-status")
    statusElements.forEach((el) => {
      if (el.textContent.includes("Online")) {
        el.innerHTML = el.innerHTML.replace("Online", this.translationManager.translate("status.online") || "Online")
      }
      if (el.textContent.includes("Offline")) {
        el.innerHTML = el.innerHTML.replace("Offline", this.translationManager.translate("status.offline") || "Offline")
      }
    })
  }

  // Translate interactive elements
  translateInteractiveElements() {
    // Translate button states
    const buttons = document.querySelectorAll("button[data-loading-text]")
    buttons.forEach((button) => {
      const loadingText = button.getAttribute("data-loading-text")
      const translatedLoadingText = this.translationManager.translate(loadingText) || loadingText
      button.setAttribute("data-loading-text", translatedLoadingText)
    })
  }

  // Handle language change events
  onLanguageChange() {
    // Re-translate all dynamic content
    this.translateExistingDynamicContent()
    this.translateFeedContent()

    // Update any cached translations
    this.updateCachedTranslations()
  }

  // Update cached translations
  updateCachedTranslations() {
    // Update notification translations cache
    if (this.dynamicContent.has("notifications")) {
      // Refresh notification translation cache
      this.dynamicContent.delete("notifications")
    }

    // Update form validation cache
    if (this.dynamicContent.has("validation")) {
      // Refresh validation translation cache
      this.dynamicContent.delete("validation")
    }
  }

  // Add new translation keys for dynamic content
  addDynamicTranslations() {
    // Add missing translation keys to the translation manager
    const additionalTranslations = {
      en: {
        "common.justnow": "Just now",
        "common.minutesago": "minutes ago",
        "common.hoursago": "hours ago",
        "common.daysago": "days ago",
        "status.online": "Online",
        "status.offline": "Offline",
        "notifications.autorefresh.enabled": "Auto-refresh enabled",
        "notifications.autorefresh.disabled": "Auto-refresh disabled",
        "notifications.connection.failed": "Connection failed - showing offline data",
        "notifications.fetched": "Fetched",
        "notifications.alerts": "alerts",
        "notifications.signin.success": "Sign in successful! Redirecting...",
        "notifications.google.success": "Google sign in successful! Redirecting...",
        "notifications.signup.success": "Account created successfully! Welcome to NeerVerse!",
        "validation.required": "This field is required",
        "validation.email.invalid": "Please enter a valid email address",
        "validation.password.short": "Password must be at least 8 characters",
        "validation.password.mismatch": "Passwords do not match",
      },

      hi: {
        "common.justnow": "अभी",
        "common.minutesago": "मिनट पहले",
        "common.hoursago": "घंटे पहले",
        "common.daysago": "दिन पहले",
        "status.online": "ऑनलाइन",
        "status.offline": "ऑफलाइन",
        "notifications.autorefresh.enabled": "ऑटो-रिफ्रेश सक्षम",
        "notifications.autorefresh.disabled": "ऑटो-रिफ्रेश अक्षम",
        "notifications.connection.failed": "कनेक्शन विफल - ऑफ़लाइन डेटा दिखाया जा रहा है",
        "notifications.fetched": "प्राप्त",
        "notifications.alerts": "अलर्ट",
        "notifications.signin.success": "साइन इन सफल! रीडायरेक्ट हो रहा है...",
        "notifications.google.success": "Google साइन इन सफल! रीडायरेक्ट हो रहा है...",
        "notifications.signup.success": "खाता सफलतापूर्वक बनाया गया! नीरवर्स में आपका स्वागत है!",
        "validation.required": "यह फ़ील्ड आवश्यक है",
        "validation.email.invalid": "कृपया एक मान्य ईमेल पता दर्ज करें",
        "validation.password.short": "पासवर्ड कम से कम 8 अक्षरों का होना चाहिए",
        "validation.password.mismatch": "पासवर्ड मेल नहीं खाते",
      },

      mr: {
        "common.justnow": "आत्ताच",
        "common.minutesago": "मिनिटांपूर्वी",
        "common.hoursago": "तासांपूर्वी",
        "common.daysago": "दिवसांपूर्वी",
        "status.online": "ऑनलाईन",
        "status.offline": "ऑफलाईन",
        "notifications.autorefresh.enabled": "ऑटो-रिफ्रेश सक्षम केले",
        "notifications.autorefresh.disabled": "ऑटो-रिफ्रेश अक्षम केले",
        "notifications.connection.failed": "कनेक्शन अयशस्वी - ऑफलाईन डेटा दाखविला जात आहे",
        "notifications.fetched": "आणले",
        "notifications.alerts": "इशारे",
        "notifications.signin.success": "साइन इन यशस्वी! पुनर्निर्देशित करत आहोत...",
        "notifications.google.success": "Google साइन इन यशस्वी! पुनर्निर्देशित करत आहोत...",
        "notifications.signup.success": "खाते यशस्वीरित्या तयार केले! नीरवर्समध्ये आपले स्वागत आहे!",
        "validation.required": "हे क्षेत्र आवश्यक आहे",
        "validation.email.invalid": "कृपया वैध ईमेल पत्ता प्रविष्ट करा",
        "validation.password.short": "पासवर्ड किमान 8 अक्षरे असावा",
        "validation.password.mismatch": "पासवर्ड जुळत नाहीत",
      },

      pa: {
        "common.justnow": "ਹੁਣੇ ਹੀ",
        "common.minutesago": "ਮਿੰਟ ਪਹਿਲਾਂ",
        "common.hoursago": "ਘੰਟੇ ਪਹਿਲਾਂ",
        "common.daysago": "ਦਿਨ ਪਹਿਲਾਂ",
        "status.online": "ਆਨਲਾਈਨ",
        "status.offline": "ਆਫਲਾਈਨ",
        "notifications.autorefresh.enabled": "ਆਟੋ-ਰਿਫਰੈਸ਼ ਚਾਲੂ ਕੀਤਾ",
        "notifications.autorefresh.disabled": "ਆਟੋ-ਰਿਫਰੈਸ਼ ਬੰਦ ਕੀਤਾ",
        "notifications.connection.failed": "ਕਨੈਕਸ਼ਨ ਫੇਲ੍ਹ - ਆਫਲਾਈਨ ਡਾਟਾ ਵਿਖਾਇਆ ਜਾ ਰਿਹਾ ਹੈ",
        "notifications.fetched": "ਲਿਆ ਗਿਆ",
        "notifications.alerts": "ਅਲਰਟਸ",
        "notifications.signin.success": "ਸਾਈਨ ਇਨ ਸਫਲ! ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
        "notifications.google.success": "Google ਸਾਈਨ ਇਨ ਸਫਲ! ਰੀਡਾਇਰੈਕਟ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
        "notifications.signup.success": "ਖਾਤਾ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਇਆ ਗਿਆ! ਨੀਰਵਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ!",
        "validation.required": "ਇਹ ਖੇਤਰ ਲਾਜ਼ਮੀ ਹੈ",
        "validation.email.invalid": "ਕਿਰਪਾ ਕਰਕੇ ਵੈਧ ਈਮੇਲ ਪਤਾ ਦਿਓ",
        "validation.password.short": "ਪਾਸਵਰਡ ਘੱਟੋ-ਘੱਟ 8 ਅੱਖਰਾਂ ਦਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ",
        "validation.password.mismatch": "ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ",
      },

      or: {
        "common.justnow": "ଏବେ",
        "common.minutesago": "ମିନିଟ ପୂର୍ବରୁ",
        "common.hoursago": "ଘଣ୍ଟା ପୂର୍ବରୁ",
        "common.daysago": "ଦିନ ପୂର୍ବରୁ",
        "status.online": "ଅନଲାଇନ୍",
        "status.offline": "ଅଫଲାଇନ୍",
        "notifications.autorefresh.enabled": "ସ୍ୱୟଂଚାଳିତ-ରିଫ୍ରେଶ ସକ୍ରିୟ",
        "notifications.autorefresh.disabled": "ସ୍ୱୟଂଚାଳିତ-ରିଫ୍ରେଶ ଅସକ୍ରିୟ",
        "notifications.connection.failed": "ସଂଯୋଗ ବିଫଳ - ଅଫଲାଇନ୍ ଡାଟା ଦେଖାଯାଉଛି",
        "notifications.fetched": "ଆଣାଗଲା",
        "notifications.alerts": "ସଚେତନତା",
        "notifications.signin.success": "ସାଇନ୍-ଇନ୍ ସଫଳ! ପୁନଃନିର୍ଦ୍ଦେଶିତ କରାଯାଉଛି...",
        "notifications.google.success": "Google ସାଇନ୍-ଇନ୍ ସଫଳ! ପୁନଃନିର୍ଦ୍ଦେଶିତ କରାଯାଉଛି...",
        "notifications.signup.success": "ଆକାଉଣ୍ଟ ସଫଳତାର ସହିତ ସୃଷ୍ଟି ହେଲା! NeerVerse କୁ ସ୍ୱାଗତ!",
        "validation.required": "ଏହି କ୍ଷେତ୍ର ଆବଶ୍ୟକ",
        "validation.email.invalid": "ଦୟାକରି ବ validଧ ଇମେଲ୍ ଠିକଣା ପ୍ରବେଶ କରନ୍ତୁ",
        "validation.password.short": "ପାସୱାର୍ଡ କମ୍-ରୁ-କମ୍ 8ଟି ଅକ୍ଷରର ହେବା ଉଚିତ",
        "validation.password.mismatch": "ପାସୱାର୍ଡ ମେଳାନି",
      },

      kn: {
        "common.justnow": "ಈಗ",
        "common.minutesago": "ನಿಮಿಷಗಳ ಹಿಂದೆ",
        "common.hoursago": "ಗಂಟೆಗಳ ಹಿಂದೆ",
        "common.daysago": "ದಿನಗಳ ಹಿಂದೆ",
        "status.online": "ಆನ್ಲೈನ್",
        "status.offline": "ಆಫ್ಲೈನ್",
        "notifications.autorefresh.enabled": "ಸ್ವಯಂ-ರಿಫ್ರೆಶ್ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
        "notifications.autorefresh.disabled": "ಸ್ವಯಂ-ರಿಫ್ರೆಶ್ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
        "notifications.connection.failed": "ಸಂಪರ್ಕ ವಿಫಲವಾಗಿದೆ - ಆಫ್ಲೈನ್ ಡೇಟಾ ತೋರಿಸಲಾಗುತ್ತಿದೆ",
        "notifications.fetched": "ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ",
        "notifications.alerts": "ಎಚ್ಚರಿಕೆಗಳು",
        "notifications.signin.success": "ಸೈನ್ ಇನ್ ಯಶಸ್ವಿಯಾಗಿದೆ! ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
        "notifications.google.success": "Google ಸೈನ್ ಇನ್ ಯಶಸ್ವಿಯಾಗಿದೆ! ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
        "notifications.signup.success": "ಖಾತೆ ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ! ನೀರ್ವರ್ಸ್‌ಗೆ ಸ್ವಾಗತ!",
        "validation.required": "ಈ ಕ್ಷೇತ್ರ ಅಗತ್ಯವಿದೆ",
        "validation.email.invalid": "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ",
        "validation.password.short": "ಪಾಸ್ವರ್ಡ್ ಕನಿಷ್ಠ 8 ಅಕ್ಷರಗಳಿರಬೇಕು",
        "validation.password.mismatch": "ಪಾಸ್ವರ್ಡ್ ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ",
      },
    }

    // Extend existing translations
    Object.keys(additionalTranslations).forEach((lang) => {
      if (this.translationManager.translations[lang]) {
        Object.assign(this.translationManager.translations[lang], additionalTranslations[lang])
      }
    })
  }

  // Clean up observers
  destroy() {
    this.observers.forEach((observer) => {
      if (observer.disconnect) {
        observer.disconnect()
      }
    })
    this.observers.clear()
    this.dynamicContent.clear()
  }
}

// Initialize dynamic translation manager when translation manager is ready
let dynamicTranslationManager

document.addEventListener("DOMContentLoaded", () => {
  // Wait for translation manager to be available
  const initDynamic = () => {
    if (window.translationManager) {
      dynamicTranslationManager = new DynamicTranslationManager(window.translationManager)
      dynamicTranslationManager.addDynamicTranslations()

      // Listen for language changes
      window.addEventListener("languageChanged", () => {
        dynamicTranslationManager.onLanguageChange()
      })

      // Make it globally available
      window.dynamicTranslationManager = dynamicTranslationManager
    } else {
      // Retry after a short delay
      setTimeout(initDynamic, 100)
    }
  }

  initDynamic()
})

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = DynamicTranslationManager
}
