// NeerVerse Disaster Safety Chatbot
class NeerVerseChatbot {
  constructor() {
    this.isOpen = false
    this.knowledgeBase = new window.DisasterKnowledgeBase() // Declare the variable before using it
    this.messages = []
    this.isTyping = false
    this.unreadCount = 0
    this.init()
  }

  init() {
    this.createChatbotHTML()
    this.bindEvents()
    this.showWelcomeMessage()
  }

  createChatbotHTML() {
    const chatbotContainer = document.createElement("div")
    chatbotContainer.className = "neerverse-chatbot"
    chatbotContainer.innerHTML = `
      <!-- Chatbot Toggle Button -->
      <button class="chatbot-toggle" aria-label="Open Safety Assistant" title="NeerVerse Safety Assistant">
        <svg class="chat-icon" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
        <svg class="close-icon" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
        <div class="chatbot-badge" style="display: none;">1</div>
      </button>

      <!-- Chatbot Window -->
      <div class="chatbot-window">
        <!-- Header -->
        <div class="chatbot-header">
          <div class="chatbot-avatar">NS</div>
          <div class="chatbot-info">
            <h3>NeerVerse Safety Assistant</h3>
            <p>Disaster safety information & guidance</p>
          </div>
          <div class="chatbot-status">
            <div class="status-dot"></div>
            <span>Online</span>
          </div>
        </div>

        <!-- Messages Area -->
        <div class="chatbot-messages" id="chatbot-messages">
          <!-- Messages will be dynamically added here -->
        </div>

        <!-- Quick Response Buttons -->
        <div class="quick-responses" id="quick-responses">
          <!-- Quick response buttons will be added here -->
        </div>

        <!-- Input Area -->
        <div class="chatbot-input">
          <textarea 
            class="chat-input" 
            id="chat-input" 
            placeholder="Ask about flood, tsunami, earthquake safety..."
            rows="1"
          ></textarea>
          <button class="send-button" id="send-button" aria-label="Send message">
            <svg viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    `

    document.body.appendChild(chatbotContainer)
    this.chatbotElement = chatbotContainer
  }

  bindEvents() {
    const toggle = this.chatbotElement.querySelector(".chatbot-toggle")
    const sendButton = this.chatbotElement.querySelector("#send-button")
    const chatInput = this.chatbotElement.querySelector("#chat-input")
    const quickResponsesContainer = this.chatbotElement.querySelector("#quick-responses")

    // Toggle chatbot
    toggle.addEventListener("click", () => {
      this.toggleChatbot()
    })

    // Send message
    sendButton.addEventListener("click", () => {
      this.sendMessage()
    })

    // Enter key to send message
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        this.sendMessage()
      }
    })

    // Auto-resize textarea
    chatInput.addEventListener("input", () => {
      this.autoResizeTextarea(chatInput)
    })

    // Quick response buttons
    quickResponsesContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("quick-response-btn")) {
        const query = e.target.getAttribute("data-query")
        this.handleQuickResponse(query)
      }
    })

    // Close chatbot when clicking outside
    document.addEventListener("click", (e) => {
      if (this.isOpen && !this.chatbotElement.contains(e.target)) {
        this.closeChatbot()
      }
    })

    // Keyboard accessibility
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeChatbot()
      }
    })
  }

  toggleChatbot() {
    if (this.isOpen) {
      this.closeChatbot()
    } else {
      this.openChatbot()
    }
  }

  openChatbot() {
    const window = this.chatbotElement.querySelector(".chatbot-window")
    const toggle = this.chatbotElement.querySelector(".chatbot-toggle")

    window.classList.add("active")
    toggle.classList.add("active")
    this.isOpen = true

    // Clear unread count
    this.clearUnreadCount()

    // Focus on input
    setTimeout(() => {
      this.chatbotElement.querySelector("#chat-input").focus()
    }, 300)

    // Add quick responses if messages are empty
    if (this.messages.length <= 1) {
      this.showQuickResponses()
    }
  }

  closeChatbot() {
    const window = this.chatbotElement.querySelector(".chatbot-window")
    const toggle = this.chatbotElement.querySelector(".chatbot-toggle")

    window.classList.remove("active")
    toggle.classList.remove("active")
    this.isOpen = false
  }

  sendMessage() {
    const input = this.chatbotElement.querySelector("#chat-input")
    const message = input.value.trim()

    if (!message) return

    // Add user message
    this.addMessage(message, "user")
    input.value = ""
    this.autoResizeTextarea(input)

    // Show typing indicator
    this.showTypingIndicator()

    // Simulate processing delay and respond
    setTimeout(
      () => {
        this.hideTypingIndicator()
        this.respondToMessage(message)
      },
      1000 + Math.random() * 1000,
    ) // 1-2 second delay
  }

  addMessage(content, sender = "bot", type = "normal") {
    const messagesContainer = this.chatbotElement.querySelector("#chatbot-messages")
    const messageElement = document.createElement("div")
    messageElement.className = `message ${sender} ${type === "emergency" ? "message-emergency" : ""}`

    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    messageElement.innerHTML = `
      <div class="message-avatar">${sender === "bot" ? "NS" : "U"}</div>
      <div class="message-content">
        ${this.formatMessageContent(content)}
        <div class="message-time">${timestamp}</div>
      </div>
    `

    messagesContainer.appendChild(messageElement)
    this.scrollToBottom()

    // Store message
    this.messages.push({
      content,
      sender,
      timestamp: new Date(),
      type,
    })

    // Update unread count if chatbot is closed
    if (!this.isOpen && sender === "bot") {
      this.incrementUnreadCount()
    }
  }

  formatMessageContent(content) {
    // Convert markdown-like formatting to HTML
    return content
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
      .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic
      .replace(/^• (.+)$/gm, "<li>$1</li>") // List items
      .replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>") // Wrap lists
      .replace(/\n/g, "<br>") // Line breaks
  }

  respondToMessage(userMessage) {
    const response = this.knowledgeBase.getResponse(userMessage)

    // Determine if this is an emergency-related query
    const emergencyKeywords = ["emergency", "urgent", "help now", "immediate", "danger", "trapped"]
    const isEmergency = emergencyKeywords.some((keyword) => userMessage.toLowerCase().includes(keyword))

    // Add emergency prefix if needed
    let responseContent = response.content
    if (isEmergency) {
      responseContent = "🚨 **EMERGENCY DETECTED** 🚨\n\nFor immediate assistance, call 112 now!\n\n" + responseContent
    }

    this.addMessage(responseContent, "bot", isEmergency ? "emergency" : "normal")

    // Show relevant quick responses
    this.showQuickResponses()
  }

  showTypingIndicator() {
    if (this.isTyping) return

    this.isTyping = true
    const messagesContainer = this.chatbotElement.querySelector("#chatbot-messages")

    const typingElement = document.createElement("div")
    typingElement.className = "typing-indicator"
    typingElement.id = "typing-indicator"
    typingElement.innerHTML = `
      <div class="message-avatar">NS</div>
      <span>NeerVerse Assistant is typing</span>
      <div class="typing-dots">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `

    messagesContainer.appendChild(typingElement)
    this.scrollToBottom()
  }

  hideTypingIndicator() {
    this.isTyping = false
    const typingIndicator = this.chatbotElement.querySelector("#typing-indicator")
    if (typingIndicator) {
      typingIndicator.remove()
    }
  }

  showQuickResponses() {
    const quickResponsesContainer = this.chatbotElement.querySelector("#quick-responses")
    const responses = this.knowledgeBase.getQuickResponses()

    quickResponsesContainer.innerHTML = responses
      .map((response) => `<button class="quick-response-btn" data-query="${response.query}">${response.text}</button>`)
      .join("")
  }

  handleQuickResponse(query) {
    // Add user message
    this.addMessage(query, "user")

    // Show typing and respond
    this.showTypingIndicator()
    setTimeout(() => {
      this.hideTypingIndicator()
      this.respondToMessage(query)
    }, 800)
  }

  showWelcomeMessage() {
    const welcomeResponse = this.knowledgeBase.getResponse("hello")
    setTimeout(() => {
      this.addMessage(welcomeResponse.content, "bot")
      this.showQuickResponses()

      // Show notification badge if chatbot is closed
      if (!this.isOpen) {
        this.showNotificationBadge()
      }
    }, 1000)
  }

  autoResizeTextarea(textarea) {
    textarea.style.height = "auto"
    textarea.style.height = Math.min(textarea.scrollHeight, 80) + "px"
  }

  scrollToBottom() {
    const messagesContainer = this.chatbotElement.querySelector("#chatbot-messages")
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }

  incrementUnreadCount() {
    this.unreadCount++
    this.updateUnreadBadge()
  }

  clearUnreadCount() {
    this.unreadCount = 0
    this.updateUnreadBadge()
  }

  updateUnreadBadge() {
    const badge = this.chatbotElement.querySelector(".chatbot-badge")
    const toggle = this.chatbotElement.querySelector(".chatbot-toggle")

    if (this.unreadCount > 0) {
      badge.textContent = this.unreadCount > 9 ? "9+" : this.unreadCount
      badge.style.display = "flex"
      toggle.classList.add("has-unread")
    } else {
      badge.style.display = "none"
      toggle.classList.remove("has-unread")
    }
  }

  showNotificationBadge() {
    if (!this.isOpen) {
      const badge = this.chatbotElement.querySelector(".chatbot-badge")
      badge.style.display = "flex"
      badge.textContent = "1"
    }
  }

  // Public methods for external integration
  sendCustomMessage(message, sender = "bot") {
    this.addMessage(message, sender)
  }

  openWithMessage(message) {
    this.openChatbot()
    setTimeout(() => {
      this.addMessage(message, "user")
      this.showTypingIndicator()
      setTimeout(() => {
        this.hideTypingIndicator()
        this.respondToMessage(message)
      }, 1000)
    }, 500)
  }

  // Integration with existing NeerVerse features
  integrateWithPlatform() {
    // Listen for hazard reports to provide relevant safety info
    document.addEventListener("hazardReported", (e) => {
      const hazardType = e.detail.type
      const safetyMessage = this.knowledgeBase.getResponse(hazardType)

      if (!this.isOpen) {
        this.showNotificationBadge()
        setTimeout(() => {
          this.sendCustomMessage(
            `🚨 Hazard Alert: ${hazardType} reported in your area. Here's important safety information:\n\n${safetyMessage.content}`,
            "bot",
          )
        }, 2000)
      }
    })

    // Integrate with weather alerts
    document.addEventListener("weatherAlert", (e) => {
      const alertType = e.detail.type
      const weatherSafety = this.knowledgeBase.getResponse("weather")

      this.sendCustomMessage(`⛈️ Weather Alert: ${alertType}\n\n${weatherSafety.content}`, "bot")
    })
  }

  // Accessibility features
  setupAccessibility() {
    const chatbotWindow = this.chatbotElement.querySelector(".chatbot-window")

    // Trap focus within chatbot when open
    chatbotWindow.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        const focusableElements = chatbotWindow.querySelectorAll(
          'button, input, textarea, [tabindex]:not([tabindex="-1"])',
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    })
  }

  // Analytics and usage tracking
  trackUsage(action, data = {}) {
    // Track chatbot usage for improvements
    console.log(`[NeerVerse Chatbot] ${action}:`, data)

    // Could integrate with analytics service
    if (window.gtag) {
      window.gtag("event", "chatbot_interaction", {
        action: action,
        ...data,
      })
    }
  }

  // Cleanup method
  destroy() {
    if (this.chatbotElement) {
      this.chatbotElement.remove()
    }
  }
}

// Initialize chatbot when DOM is ready and knowledge base is available
document.addEventListener("DOMContentLoaded", () => {
  // Wait for knowledge base to be available
  const initChatbot = () => {
    if (window.DisasterKnowledgeBase) {
      const chatbot = new NeerVerseChatbot()
      chatbot.setupAccessibility()
      chatbot.integrateWithPlatform()

      // Make globally available
      window.neerverseChatbot = chatbot

      console.log("[NeerVerse] Safety Assistant chatbot initialized")
    } else {
      // Retry after a short delay
      setTimeout(initChatbot, 100)
    }
  }

  // Small delay to ensure all other scripts are loaded
  setTimeout(initChatbot, 500)
})

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = NeerVerseChatbot
}
