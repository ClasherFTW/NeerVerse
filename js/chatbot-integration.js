// Integration script to connect chatbot with existing NeerVerse features
class ChatbotIntegration {
  constructor() {
    this.init()
  }

  init() {
    // Wait for both chatbot and main app to be ready
    this.waitForDependencies(() => {
      this.setupHazardReportingIntegration()
      this.setupWeatherAlertIntegration()
      this.setupToolsPanelIntegration()
      this.setupTranslationIntegration()
      this.setupEmergencyIntegration()
    })
  }

  waitForDependencies(callback) {
    const checkDependencies = () => {
      if (window.neerverseChatbot && window.translationManager) {
        callback()
      } else {
        setTimeout(checkDependencies, 100)
      }
    }
    checkDependencies()
  }

  // Integrate with hazard reporting system
  setupHazardReportingIntegration() {
    // Listen for hazard reporting button clicks
    const startReportingBtn = document.getElementById("startReportingBtn")
    if (startReportingBtn) {
      startReportingBtn.addEventListener("click", () => {
        // Open chatbot with hazard reporting guidance
        window.neerverseChatbot.openWithMessage("How do I report a hazard?")
      })
    }

    // Listen for media buttons in report interface
    document.querySelectorAll(".media-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mediaType = btn.textContent.includes("Photo")
          ? "photo"
          : btn.textContent.includes("Video")
            ? "video"
            : "location"

        let message = ""
        switch (mediaType) {
          case "photo":
            message = "What should I include when taking photos for hazard reports?"
            break
          case "video":
            message = "How do I record effective videos for disaster reporting?"
            break
          case "location":
            message = "Why is location important for hazard reporting?"
            break
        }

        if (!window.neerverseChatbot.isOpen) {
          window.neerverseChatbot.openWithMessage(message)
        }
      })
    })
  }

  // Integrate with weather alerts
  setupWeatherAlertIntegration() {
    // Monitor for weather-related interactions
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        const cardTitle = card.querySelector(".card-title")?.textContent || ""

        if (cardTitle.includes("Precipitation") || cardTitle.includes("Rainfall")) {
          this.triggerWeatherSafetyTip("flood")
        } else if (cardTitle.includes("Temperature")) {
          this.triggerWeatherSafetyTip("heat")
        }
      })
    })
  }

  triggerWeatherSafetyTip(weatherType) {
    // Only show if user hasn't interacted with chatbot recently
    const lastInteraction = localStorage.getItem("neerverse-chatbot-last-interaction")
    const now = Date.now()

    if (!lastInteraction || now - Number.parseInt(lastInteraction) > 300000) {
      // 5 minutes
      setTimeout(() => {
        let message = ""
        switch (weatherType) {
          case "flood":
            message = "I noticed you're checking precipitation data. Would you like flood safety tips?"
            break
          case "heat":
            message = "Checking temperature data? I can provide extreme weather safety information."
            break
          default:
            message = "Need weather safety information?"
        }

        window.neerverseChatbot.sendCustomMessage(message, "bot")
        if (!window.neerverseChatbot.isOpen) {
          window.neerverseChatbot.showNotificationBadge()
        }
      }, 3000)

      localStorage.setItem("neerverse-chatbot-last-interaction", now.toString())
    }
  }

  // Integrate with tools panel
  setupToolsPanelIntegration() {
    document.querySelectorAll(".tool-button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const title = btn.getAttribute("title") || btn.getAttribute("aria-label") || ""

        if (title.includes("Support Chat") || title.includes("Chat")) {
          // Open chatbot when support chat tool is clicked
          window.neerverseChatbot.openChatbot()
        } else if (title.includes("Fire")) {
          window.neerverseChatbot.openWithMessage("fire safety tips")
        }
      })
    })
  }

  // Integrate with translation system
  setupTranslationIntegration() {
    // Listen for language changes and update chatbot
    window.addEventListener("languageChanged", (e) => {
      const newLanguage = e.detail.language

      // Update chatbot header based on language
      this.updateChatbotLanguage(newLanguage)

      // Send language change notification
      if (window.neerverseChatbot.messages.length > 0) {
        const langName = window.translationManager.supportedLanguages[newLanguage]?.name || "English"
        window.neerverseChatbot.sendCustomMessage(
          `Language changed to ${langName}. I can continue helping you with disaster safety information.`,
          "bot",
        )
      }
    })
  }

  updateChatbotLanguage(language) {
    // Update chatbot UI text based on selected language
    const chatbotHeader = document.querySelector(".chatbot-info h3")
    const chatbotSubtitle = document.querySelector(".chatbot-info p")
    const chatInput = document.querySelector("#chat-input")
    const statusText = document.querySelector(".chatbot-status span")

    if (chatbotHeader && window.translationManager) {
      // These would need to be added to the translation files
      chatbotHeader.textContent = window.translationManager.translate("chatbot.title") || "NeerVerse Safety Assistant"
      chatbotSubtitle.textContent =
        window.translationManager.translate("chatbot.subtitle") || "Disaster safety information & guidance"
      statusText.textContent = window.translationManager.translate("chatbot.online") || "Online"

      // Update placeholder based on language
      const placeholders = {
        en: "Ask about flood, tsunami, earthquake safety...",
        hi: "बाढ़, सुनामी, भूकंप सुरक्षा के बारे में पूछें...",
        mr: "पूर, त्सुनामी, भूकंप सुरक्षेबद्दल विचारा...",
        pa: "ਹੜ੍ਹ, ਸੁਨਾਮੀ, ਭੂਚਾਲ ਸੁਰੱਖਿਆ ਬਾਰੇ ਪੁੱਛੋ...",
        or: "ବନ୍ୟା, ସୁନାମି, ଭୂମିକମ୍ପ ସୁରକ୍ଷା ବିଷୟରେ ପଚାରନ୍ତୁ...",
        kn: "ಪ್ರವಾಹ, ಸುನಾಮಿ, ಭೂಕಂಪ ಸುರಕ್ಷತೆಯ ಬಗ್ಗೆ ಕೇಳಿ...",
      }

      if (chatInput) {
        chatInput.placeholder = placeholders[language] || placeholders.en
      }
    }
  }

  // Setup emergency integration
  setupEmergencyIntegration() {
    // Listen for emergency keywords in the main site
    document.addEventListener("keydown", (e) => {
      // Emergency hotkey: Ctrl/Cmd + Shift + H (Help)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "H") {
        e.preventDefault()
        window.neerverseChatbot.openWithMessage("emergency help")
      }
    })

    // Monitor for emergency-related clicks
    document.addEventListener("click", (e) => {
      const element = e.target
      const text = element.textContent?.toLowerCase() || ""

      // If user clicks on emergency-related content
      if (text.includes("emergency") || text.includes("alert") || text.includes("urgent")) {
        // Subtle notification that help is available
        setTimeout(() => {
          if (!window.neerverseChatbot.isOpen) {
            window.neerverseChatbot.sendCustomMessage(
              "🆘 I noticed you're looking at emergency information. I can provide detailed safety guidance - just ask!",
              "bot",
            )
            window.neerverseChatbot.showNotificationBadge()
          }
        }, 2000)
      }
    })
  }

  // Setup contextual help based on page content
  setupContextualHelp() {
    // Analyze current page and provide relevant suggestions
    const currentPage = window.location.pathname

    if (currentPage.includes("weather")) {
      // On weather page, suggest weather safety
      setTimeout(() => {
        window.neerverseChatbot.sendCustomMessage(
          "🌦️ You're viewing weather data. I can provide severe weather safety tips if needed!",
          "bot",
        )
      }, 5000)
    }
  }
}

// Initialize integration
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    new ChatbotIntegration()
  }, 1000)
})

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = ChatbotIntegration
}
