// Comprehensive disaster safety knowledge base for NeerVerse Chatbot
class DisasterKnowledgeBase {
  constructor() {
    this.knowledgeBase = this.initializeKnowledgeBase()
    this.keywords = this.initializeKeywords()
  }

  initializeKeywords() {
    return {
      // Flood-related keywords
      flood: [
        "flood",
        "flooding",
        "water level",
        "overflow",
        "inundation",
        "waterlogging",
        "flash flood",
        "river flood",
        "urban flood",
      ],

      // Tsunami-related keywords
      tsunami: ["tsunami", "tidal wave", "seismic wave", "ocean wave", "coastal flood"],

      // General hazard keywords
      hazard: ["hazard", "danger", "risk", "threat", "emergency", "disaster", "calamity", "catastrophe"],

      // Earthquake keywords
      earthquake: ["earthquake", "tremor", "seismic", "quake", "aftershock", "ground shaking"],

      // Cyclone/Hurricane keywords
      cyclone: ["cyclone", "hurricane", "typhoon", "storm", "wind storm", "tropical storm"],

      // Fire keywords
      fire: ["fire", "wildfire", "forest fire", "blaze", "burning", "smoke"],

      // Landslide keywords
      landslide: ["landslide", "mudslide", "rockfall", "slope failure", "debris flow"],

      // General safety keywords
      safety: ["safety", "protection", "evacuation", "shelter", "rescue", "first aid", "emergency kit"],

      // Weather keywords
      weather: ["weather", "storm", "rain", "wind", "temperature", "climate"],

      // Help keywords
      help: ["help", "assistance", "support", "aid", "guidance", "information"],
    }
  }

  initializeKnowledgeBase() {
    return {
      // Flood safety information
      flood: {
        title: "Flood Safety Information",
        content: [
          "🌊 **Before a Flood:**",
          "• Create an emergency kit with water, food, flashlight, and first aid supplies",
          "• Know your evacuation routes and have a family communication plan",
          "• Keep important documents in waterproof containers",
          "• Install sump pumps and backup power sources if possible",
          "",
          "🚨 **During a Flood:**",
          "• Move to higher ground immediately",
          "• Never walk or drive through flood water - 6 inches can knock you down",
          "• Stay away from downed power lines and electrical equipment",
          "• Listen to emergency broadcasts for updates",
          "",
          "🏠 **After a Flood:**",
          "• Wait for authorities to declare the area safe",
          "• Avoid flood water as it may be contaminated",
          "• Document damage with photos for insurance",
          "• Clean and disinfect everything that got wet",
        ],
      },

      // Tsunami safety information
      tsunami: {
        title: "Tsunami Safety Information",
        content: [
          "🌊 **Tsunami Warning Signs:**",
          "• Strong earthquake lasting 20+ seconds",
          "• Ocean water receding unusually far",
          "• Loud roaring sound from the ocean",
          "• Official tsunami warnings",
          "",
          "🏃 **Immediate Actions:**",
          "• Move to high ground (100+ feet above sea level) or 2+ miles inland",
          "• Do NOT wait for official warnings if you feel natural signs",
          "• Stay away from beaches, harbors, and coastal areas",
          "• Use stairs, not elevators, in tall buildings",
          "",
          "⚠️ **Important Notes:**",
          "• Tsunamis can travel 500+ mph in deep ocean",
          "• Multiple waves may come - stay in safe area for hours",
          "• First wave may not be the largest",
          "• Listen to emergency radio for all-clear signals",
        ],
      },

      // General hazard preparedness
      hazard: {
        title: "General Hazard Preparedness",
        content: [
          "🎒 **Emergency Kit Essentials:**",
          "• Water: 1 gallon per person per day (3-day supply)",
          "• Non-perishable food for 3 days",
          "• Battery-powered or hand-crank radio",
          "• Flashlight and extra batteries",
          "• First aid kit and medications",
          "• Whistle for signaling help",
          "• Local maps and emergency contact information",
          "",
          "📱 **Communication Plan:**",
          "• Identify an out-of-area contact person",
          "• Ensure all family members know the plan",
          "• Keep emergency numbers programmed in phones",
          "• Consider backup communication methods",
          "",
          "🏠 **Home Preparedness:**",
          "• Know how to turn off utilities (gas, water, electricity)",
          "• Secure heavy furniture and appliances",
          "• Keep important documents in waterproof container",
          "• Practice evacuation routes regularly",
        ],
      },

      // Earthquake safety
      earthquake: {
        title: "Earthquake Safety Guide",
        content: [
          "🏠 **During an Earthquake:**",
          "• DROP to hands and knees",
          "• COVER your head and neck under a desk/table",
          "• HOLD ON to your shelter and protect yourself",
          "• If outdoors, move away from buildings and power lines",
          "• If in a car, pull over and stay inside",
          "",
          "⚡ **After an Earthquake:**",
          "• Check for injuries and provide first aid",
          "• Check for hazards (gas leaks, electrical damage)",
          "• Be prepared for aftershocks",
          "• Use stairs, never elevators",
          "• Stay out of damaged buildings",
          "",
          "📋 **Preparation Tips:**",
          "• Secure heavy items that could fall",
          "• Practice Drop, Cover, and Hold On",
          "• Keep emergency supplies accessible",
          "• Know your building's evacuation plan",
        ],
      },

      // Cyclone/Hurricane safety
      cyclone: {
        title: "Cyclone & Hurricane Safety",
        content: [
          "🌀 **Before the Storm:**",
          "• Monitor weather reports and warnings",
          "• Secure outdoor furniture and objects",
          "• Stock up on emergency supplies",
          "• Fill bathtubs and containers with water",
          "• Charge all electronic devices",
          "",
          "🏠 **During the Storm:**",
          "• Stay indoors away from windows",
          "• Go to the lowest floor, interior room",
          "• Avoid using electrical appliances",
          "• Do not go outside during the eye of the storm",
          "",
          "🚗 **Evacuation Guidelines:**",
          "• Leave early if ordered to evacuate",
          "• Follow designated evacuation routes",
          "• Take your emergency kit",
          "• Never drive through flooded roads",
          "",
          "📡 **Stay Informed:**",
          "• Keep battery-powered radio for updates",
          "• Follow official emergency management accounts",
          "• Register for local emergency alerts",
        ],
      },

      // Fire safety
      fire: {
        title: "Fire Safety & Wildfire Protection",
        content: [
          "🔥 **Wildfire Preparation:**",
          "• Create defensible space around your home",
          "• Use fire-resistant landscaping",
          "• Keep roof and gutters clear of debris",
          "• Have multiple evacuation routes planned",
          "",
          "🚨 **During a Fire Emergency:**",
          "• Evacuate immediately if ordered",
          "• Close all windows and doors",
          "• Turn off gas utilities",
          "• Take your emergency kit and important documents",
          "",
          "💨 **Smoke Safety:**",
          "• Stay low to avoid smoke inhalation",
          "• Cover nose and mouth with cloth",
          "• Feel doors before opening (hot = fire behind)",
          "• If trapped, signal for help from windows",
          "",
          "🏠 **Home Fire Safety:**",
          "• Install smoke detectors on every level",
          "• Test batteries monthly",
          "• Have fire extinguishers accessible",
          "• Practice escape routes with family",
        ],
      },

      // Landslide safety
      landslide: {
        title: "Landslide Safety Information",
        content: [
          "⛰️ **Warning Signs:**",
          "• Cracks in ground, walls, or pavement",
          "• Bulging ground at base of slopes",
          "• Water breaking through ground surface",
          "• Tilting trees, poles, or walls",
          "• Sudden decrease in creek water levels",
          "",
          "🏃 **During a Landslide:**",
          "• Move away from the path of the slide",
          "• Run to nearest high ground perpendicular to slide",
          "• Protect your head from debris",
          "• Stay alert for flooding downstream",
          "",
          "🏠 **Prevention & Preparation:**",
          "• Avoid building on steep slopes or near cliffs",
          "• Plant ground cover on slopes",
          "• Build retaining walls for stability",
          "• Have evacuation plan ready",
          "",
          "☔ **Weather Awareness:**",
          "• Be extra cautious during heavy rains",
          "• Monitor weather forecasts regularly",
          "• Know that landslides often follow wildfires",
        ],
      },

      // General emergency response
      emergency: {
        title: "Emergency Response Guidelines",
        content: [
          "📞 **Emergency Contacts:**",
          "• National Emergency: 112",
          "• Fire: 101",
          "• Police: 100",
          "• Ambulance: 108",
          "• Disaster Management: 1078",
          "",
          "🆘 **First Aid Basics:**",
          "• Check for consciousness and breathing",
          "• Control bleeding with direct pressure",
          "• Keep injured person warm and calm",
          "• Do not move someone with potential spinal injury",
          "",
          "📱 **Using NeerVerse:**",
          "• Report hazards immediately through our platform",
          "• Share location and photos for faster response",
          "• Follow community updates for real-time information",
          "• Use our maps to find safe routes and shelters",
          "",
          "🤝 **Community Support:**",
          "• Check on neighbors, especially elderly",
          "• Share resources and information",
          "• Volunteer with local emergency services",
          "• Stay connected through official channels",
        ],
      },

      // Weather safety
      weather: {
        title: "Severe Weather Safety",
        content: [
          "⛈️ **Thunderstorm Safety:**",
          "• Seek shelter in sturdy buildings",
          "• Avoid water, high ground, and metal objects",
          "• Unplug electrical appliances",
          "• Wait 30 minutes after last thunder before going outside",
          "",
          "❄️ **Winter Weather:**",
          "• Keep extra blankets and warm clothing",
          "• Prevent pipes from freezing",
          "• Have alternative heating source",
          "• Keep car emergency kit with blankets and food",
          "",
          "🌡️ **Extreme Heat:**",
          "• Stay hydrated and in air conditioning",
          "• Wear light-colored, loose clothing",
          "• Avoid outdoor activities during peak heat",
          "• Check on vulnerable community members",
          "",
          "💨 **High Winds:**",
          "• Secure outdoor objects",
          "• Avoid driving high-profile vehicles",
          "• Stay away from windows",
          "• Be aware of falling debris",
        ],
      },

      // Platform help
      help: {
        title: "NeerVerse Platform Help",
        content: [
          "🌐 **About NeerVerse:**",
          "• AI-powered disaster management platform",
          "• Real-time hazard detection and reporting",
          "• Community-driven emergency response",
          "• Integrated weather and satellite data",
          "",
          "📊 **Platform Features:**",
          "• Interactive disaster mapping",
          "• Social media analytics for emergency detection",
          "• Multi-language support (Hindi, Marathi, Punjabi, Odia, Kannada)",
          "• Real-time weather dashboard",
          "• Community reporting system",
          "",
          "📱 **How to Report:**",
          "• Click 'Report Hazard' in navigation",
          "• Select hazard type and severity",
          "• Add photos/videos for evidence",
          "• Share precise location",
          "• Submit for community verification",
          "",
          "🗺️ **Using Maps:**",
          "• View real-time weather data",
          "• Check precipitation and temperature",
          "• Monitor soil moisture levels",
          "• Access satellite imagery",
          "",
          "❓ **Need More Help?**",
          "• Contact our support team",
          "• Check the user guide",
          "• Join our community forums",
          "• Follow us on social media for updates",
        ],
      },

      // Default/greeting
      greeting: {
        title: "Welcome to NeerVerse Safety Assistant",
        content: [
          "👋 **Hello! I'm your NeerVerse Safety Assistant**",
          "",
          "I can help you with:",
          "• **Flood safety** - Prevention, response, and recovery",
          "• **Tsunami warnings** - Recognition and evacuation",
          "• **Earthquake preparedness** - Drop, cover, hold on",
          "• **Cyclone/Hurricane safety** - Before, during, after",
          "• **Fire safety** - Wildfire and home fire protection",
          "• **Landslide awareness** - Warning signs and response",
          "• **General emergency** - First aid and emergency contacts",
          "• **Weather safety** - Severe weather protection",
          "• **Platform help** - How to use NeerVerse features",
          "",
          "💬 **How to use:**",
          "Just type keywords like 'flood', 'tsunami', 'earthquake', 'help', or ask questions about disaster safety!",
          "",
          "🆘 **Emergency?** Call 112 for immediate assistance",
          "",
          "What would you like to know about disaster safety?",
        ],
      },
    }
  }

  // Find the best matching response based on user input
  findBestMatch(userInput) {
    const input = userInput.toLowerCase().trim()

    // Check for exact keyword matches first
    for (const [category, keywords] of Object.entries(this.keywords)) {
      for (const keyword of keywords) {
        if (input.includes(keyword)) {
          return this.knowledgeBase[category] || this.knowledgeBase.greeting
        }
      }
    }

    // Check for common question patterns
    if (input.includes("what") || input.includes("how") || input.includes("when") || input.includes("where")) {
      if (input.includes("flood")) return this.knowledgeBase.flood
      if (input.includes("tsunami")) return this.knowledgeBase.tsunami
      if (input.includes("earthquake")) return this.knowledgeBase.earthquake
      if (input.includes("fire")) return this.knowledgeBase.fire
      if (input.includes("cyclone") || input.includes("hurricane")) return this.knowledgeBase.cyclone
      if (input.includes("landslide")) return this.knowledgeBase.landslide
      if (input.includes("weather")) return this.knowledgeBase.weather
      if (input.includes("emergency")) return this.knowledgeBase.emergency
    }

    // Check for help requests
    if (input.includes("help") || input.includes("assist") || input.includes("support")) {
      return this.knowledgeBase.help
    }

    // Check for greetings
    if (input.includes("hello") || input.includes("hi") || input.includes("hey") || input.includes("start")) {
      return this.knowledgeBase.greeting
    }

    // Default response for unmatched queries
    return {
      title: "I'm here to help with disaster safety!",
      content: [
        "I didn't quite understand your question, but I'm here to help with disaster safety information.",
        "",
        "🔍 **Try asking about:**",
        "• Flood safety and preparation",
        "• Tsunami warning signs and evacuation",
        "• Earthquake response (Drop, Cover, Hold On)",
        "• Cyclone and hurricane safety",
        "• Fire safety and wildfire protection",
        "• Landslide warning signs",
        "• Emergency preparedness",
        "• Weather safety tips",
        "• How to use NeerVerse platform",
        "",
        "💡 **Example questions:**",
        "• 'What should I do during a flood?'",
        "• 'How do I prepare for a tsunami?'",
        "• 'What are earthquake safety tips?'",
        "• 'Help me understand cyclone safety'",
        "",
        "🆘 **Emergency?** Call 112 immediately for urgent assistance",
      ],
    }
  }

  // Get response for user input
  getResponse(userInput) {
    const match = this.findBestMatch(userInput)
    return {
      title: match.title,
      content: match.content.join("\n"),
      timestamp: new Date().toLocaleTimeString(),
    }
  }

  // Get all available topics
  getAvailableTopics() {
    return Object.keys(this.knowledgeBase).map((key) => ({
      key,
      title: this.knowledgeBase[key].title,
    }))
  }

  // Get quick response suggestions
  getQuickResponses() {
    return [
      { text: "Flood safety tips", query: "flood safety" },
      { text: "Tsunami warnings", query: "tsunami warning signs" },
      { text: "Earthquake response", query: "earthquake safety" },
      { text: "Emergency contacts", query: "emergency contacts" },
      { text: "Platform help", query: "how to use neerverse" },
    ]
  }
}

// Export for use in chatbot
if (typeof window !== "undefined") {
  window.DisasterKnowledgeBase = DisasterKnowledgeBase
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = DisasterKnowledgeBase
}
