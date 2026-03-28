// Comprehensive translation system for NeerVerse
class TranslationManager {
  constructor() {
    this.currentLanguage = localStorage.getItem("neerverse-language") || "en"
    this.translations = {}
    this.supportedLanguages = {
      en: { name: "English", flag: "🇮🇳" },
      hi: { name: "हिन्दी", flag: "🇮🇳" },
      or: { name: "ଓଡ଼ିଆ", flag: "🇮🇳" },
      pa: { name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
      mr: { name: "मराठी", flag: "🇮🇳" },
      kn: { name: "ಕನ್ನಡ", flag: "🇮🇳" },
    }
    this.loadTranslations()
  }

  loadTranslations() {
    // English (default)
    this.translations.en = {
      //gee
      "hero-title": "Live Google Earth Hazard Representation",
      "hero-description": "Real-time visualization of natural hazards and climate data across South Asia using advanced satellite imagery and earth observation technology.",
      "enlarge-map": "Enlarge Map",
      "minimize-map": "Minimize Map",
      // Navigation
      "nav.home": "Home",
      "nav.report": "Report Hazard",
      "nav.maps": "Maps",
      "nav.social": "Social Media",
      "nav.signin": "Sign in",
      "nav.getstarted": "Get started",
      "nav.signout": "Sign out",
      "nav.dashboard": "Dashboard",

      // Homepage
      "hero.title": "NeerVerse",
      "hero.subtitle":
        "A unified geospatial intelligence platform that integrates real-time hazard detection, AI-powered social media analytics, and interactive disaster mapping for comprehensive emergency response",
      "hero.status": "AI-Powered Disaster Management Platform",
      "hero.watchdemo": "Watch demo",

      // Metrics
      "metrics.reports": "Active Reports",
      "metrics.alerts": "Active Alerts",
      "metrics.species": "Species Monitored",
      "metrics.data": "Data Processed",

      // Hazard Reporting
      "hazard.title": "Crowdsourced Hazard Reporting",
      "hazard.subtitle": "Empower communities to report hazards in real-time with our intuitive reporting system",
      "hazard.geolocation.title": "Geolocation Tagging",
      "hazard.geolocation.desc": "Automatically capture precise location data for every report with GPS integration",
      "hazard.multimedia.title": "Multimedia Evidence",
      "hazard.multimedia.desc": "Upload photos and videos to provide visual context for hazard reports",
      "hazard.realtime.title": "Real-time Processing",
      "hazard.realtime.desc": "Reports are processed instantly and verified through AI-powered analysis",
      "hazard.community.title": "Community Verification",
      "hazard.community.desc": "Multiple reports from the same area are cross-verified for accuracy",
      "hazard.startreporting": "Start Reporting",

      // Report Interface
      "report.interface": "Report Interface",
      "report.hazardtype": "Hazard Type",
      "report.location": "Location",
      "report.severity": "Severity",
      "report.highrisk": "High Risk",
      "report.photo": "📷 Photo",
      "report.video": "🎥 Video",
      "report.locationbtn": "📍 Location",

      // Community Feed
      "feed.title": "Community Disaster Feed",
      "feed.subtitle":
        "Real-time updates from citizens, rescue teams, and authorities about ongoing disasters and hazards",
      "feed.trending": "Trending Now",
      "feed.latest": "🕒 Latest",
      "feed.trendingtab": "📈 Trending",
      "feed.nearby": "📍 Nearby",
      "feed.showmap": "🗺 Show Map",
      "feed.placeholder": "Report a hazard or share disaster updates...",
      "feed.send": "Send ➤",

      // Weather Page
      "weather.title": "NeerVerse Weather Dashboard",
      "weather.subtitle":
        "Real-time weather updates, forecasts, and community reports — all in a sleek dark interface.",
      "weather.current": "Current Weather",
      "weather.forecast": "Forecast",
      "weather.community": "Community",
      "weather.chirps": "CHIRPS — Precipitation",
      "weather.chirps.desc": "Total precipitation (mm) — Monsoon 2024",
      "weather.imerg": "IMERG — Max Rainfall",
      "weather.imerg.desc": "Peak intensity (mm/hr) — Monsoon 2024",
      "weather.era5": "ERA5 — Temperature",
      "weather.era5.desc": "2m temperature (°C) — Monsoon 2024",
      "weather.smap": "SMAP — Soil Moisture",
      "weather.smap.desc": "Mean soil moisture — Monsoon 2024",
      "weather.fullscreen": "Open fullscreen",
      "weather.newtab": "Open in new tab",
      "weather.close": "Close ✕",
      "weather.footer": "Maps powered by Google Earth Engine",

      // Login Page
      "login.welcome": "Welcome to NeerVerse",
      "login.subtitle": "Sign in to access your reporting dashboard",
      "login.signin": "Sign In",
      "login.signup": "Sign Up",
      "login.google": "Continue with Google",
      "login.or": "OR",
      "login.email": "Email",
      "login.phone": "Phone",
      "login.password": "Password",
      "login.fullname": "Full Name",
      "login.terms": "I agree to the Terms of Service and Privacy Policy",
      "login.createaccount": "Create Account",
      "login.brand.subtitle": "Crowdsourced Reporting Assistant",
      "login.brand.description":
        "Your ultimate platform for community-driven reporting with real-time tracking, advanced analytics, and collaborative features.",

      // Common
      "common.loading": "Loading...",
      "common.error": "Error occurred",
      "common.success": "Success",
      "common.cancel": "Cancel",
      "common.save": "Save",
      "common.delete": "Delete",
      "common.edit": "Edit",
      "common.view": "View",
      "common.share": "Share",
      "common.like": "Like",
      "common.comment": "Comment",
      "common.ago": "ago",
      "common.minutes": "minutes",
      "common.hours": "hours",
      "common.days": "days",
      //hazard tracker
      "tracker.title": "Hazard Alert Tracker",
      "tracker.subtitle": "Real-time updates from citizens, rescue teams, and authorities",
      "tracker.online": "Online ✅",
      "tracker.refresh": "🔄 Refresh Feed",
      "tracker.autorefresh": "Auto-refresh every 30s",
      "tracker.alerts": "Active Alerts",
      "tracker.lastupdate": "Last Updated",
      "tracker.coverage": "Coverage",
      "tracker.loading": "Fetching latest hazard alerts...",
      "tracker.ready": "Ready to fetch alerts",
      "tracker.instructions": 'Click "Refresh Feed" to start monitoring hazard alerts from X (Twitter).',
    }

    // Spanish translations
    this.translations.mr = {
      "hero-title": "लाइव्ह गुगल अर्थ धोका प्रतिनिधित्व",
"hero-description": "प्रगत उपग्रह इमेजिंग आणि पृथ्वी निरीक्षण तंत्रज्ञानाचा वापर करून दक्षिण आशियामधील नैसर्गिक धोके आणि हवामान डेटाचे रिअल-टाइम व्हिज्युअलायझेशन।",
"enlarge-map": "नकाशा मोठा करा",
"minimize-map": "नकाशा लहान करा",
      // Navigation
      "nav.home": "मुख्यपृष्ठ",
      "nav.report": "धोक्याची नोंद करा",
      "nav.maps": "नकाशे",
      "nav.social": "सोशल मीडिया",
      "nav.signin": "साइन इन",
      "nav.getstarted": "सुरू करा",
      "nav.signout": "साइन आउट",
      "nav.dashboard": "डॅशबोर्ड",

      // Homepage
      "hero.title": "नीरवर्स",
      "hero.subtitle":
        "एक एकत्रित भू-स्थानिक बुद्धिमत्ता प्लॅटफॉर्म जो रिअल-टाइम धोका शोध, AI-सक्षम सोशल मीडिया विश्लेषण आणि आपत्कालीन प्रतिसादासाठी इंटरॅक्टिव आपत्ती नकाशे एकत्रित करतो",
      "hero.status": "AI-सक्षम आपत्ती व्यवस्थापन प्लॅटफॉर्म",
      "hero.watchdemo": "डेमो पहा",

      // Metrics
      "metrics.reports": "सक्रिय अहवाल",
      "metrics.alerts": "सक्रिय अलर्ट",
      "metrics.species": "निरीक्षण केलेल्या प्रजाती",
      "metrics.data": "प्रक्रिया केलेला डेटा",

      // Hazard Reporting
      "hazard.title": "सामुदायिक धोका अहवाल",
      "hazard.subtitle": "आमच्या सुलभ अहवाल प्रणालीसह समुदायांना वास्तविक वेळेत धोके नोंदविण्यास सक्षम करा",
      "hazard.geolocation.title": "भौगोलिक स्थान टॅगिंग",
      "hazard.geolocation.desc": "GPS एकत्रीकरणासह प्रत्येक अहवालासाठी अचूक स्थान डेटा स्वयंचलितपणे कॅप्चर करा",
      "hazard.multimedia.title": "मल्टिमीडिया पुरावे",
      "hazard.multimedia.desc": "धोका अहवालासाठी दृश्य संदर्भ देण्यासाठी फोटो आणि व्हिडिओ अपलोड करा",
      "hazard.realtime.title": "वास्तविक वेळ प्रक्रिया",
      "hazard.realtime.desc": "अहवाल त्वरित प्रक्रिया केले जातात आणि AI-सक्षम विश्लेषणाद्वारे सत्यापित केले जातात",
      "hazard.community.title": "सामुदायिक सत्यापन",
      "hazard.community.desc": "त्याच भागातील एकाधिक अहवाल अचूकतेसाठी क्रॉस-सत्यापित केले जातात",
      "hazard.startreporting": "अहवाल देणे सुरू करा",

      // Report Interface
      "report.interface": "अहवाल इंटरफेस",
      "report.hazardtype": "धोक्याचा प्रकार",
      "report.location": "स्थान",
      "report.severity": "तीव्रता",
      "report.highrisk": "उच्च धोका",
      "report.photo": "📷 फोटो",
      "report.video": "🎥 व्हिडिओ",
      "report.locationbtn": "📍 स्थान",

      // Community Feed
      "feed.title": "सामुदायिक आपत्ती फीड",
      "feed.subtitle": "नागरिक, बचाव पथके आणि अधिकाऱ्यांकडून सुरू असलेल्या आपत्ती आणि धोक्यांविषयी रिअल-टाइम अद्यतने",
      "feed.trending": "आत्ता ट्रेंडिंग",
      "feed.latest": "🕒 ताजे",
      "feed.trendingtab": "📈 ट्रेंडिंग",
      "feed.nearby": "📍 जवळपास",
      "feed.showmap": "🗺 नकाशा दाखवा",
      "feed.placeholder": "धोक्याची नोंद करा किंवा आपत्ती अद्यतने सामायिक करा...",
      "feed.send": "पाठवा ➤",

      // Weather Page
      "weather.title": "नीरवर्स हवामान डॅशबोर्ड",
      "weather.subtitle": "प्रत्यक्ष वेळ हवामान अद्यतने, अंदाज आणि सामुदायिक अहवाल — सर्व एक आकर्षक गडद इंटरफेसमध्ये.",
      "weather.current": "सध्याचे हवामान",
      "weather.forecast": "अंदाज",
      "weather.community": "समुदाय",
      "weather.chirps": "CHIRPS — पर्जन्य",
      "weather.chirps.desc": "एकूण पर्जन्य (मिमी) — मान्सून 2024",
      "weather.imerg": "IMERG — जास्तीत जास्त पाऊस",
      "weather.imerg.desc": "शिखर तीव्रता (मिमी/तास) — मान्सून 2024",
      "weather.era5": "ERA5 — तापमान",
      "weather.era5.desc": "2मी तापमान (°C) — मान्सून 2024",
      "weather.smap": "SMAP — मातीतील आर्द्रता",
      "weather.smap.desc": "सरासरी मातीतील आर्द्रता — मान्सून 2024",
      "weather.fullscreen": "पूर्ण स्क्रीनमध्ये उघडा",
      "weather.newtab": "नव्या टॅबमध्ये उघडा",
      "weather.close": "बंद करा ✕",
      "weather.footer": "Google Earth Engine द्वारे समर्थित नकाशे",

      // Login Page
      "login.welcome": "नीरवर्समध्ये आपले स्वागत आहे",
      "login.subtitle": "आपले रिपोर्टिंग डॅशबोर्ड एक्सेस करण्यासाठी साइन इन करा",
      "login.signin": "साइन इन",
      "login.signup": "साइन अप",
      "login.google": "Google सह सुरू ठेवा",
      "login.or": "किंवा",
      "login.email": "ईमेल",
      "login.phone": "फोन",
      "login.password": "पासवर्ड",
      "login.fullname": "पूर्ण नाव",
      "login.terms": "मी सेवा अटी आणि गोपनीयता धोरणाशी सहमत आहे",
      "login.createaccount": "खाते तयार करा",
      "login.brand.subtitle": "सामुदायिक रिपोर्टिंग सहाय्यक",
      "login.brand.description":
        "रिअल-टाइम ट्रॅकिंग, प्रगत विश्लेषण आणि सहयोगी वैशिष्ट्यांसह समुदाय-आधारित रिपोर्टिंगसाठी आपले अंतिम प्लॅटफॉर्म.",

      // Common
      "common.loading": "लोड होत आहे...",
      "common.error": "त्रुटी आली",
      "common.success": "यशस्वी",
      "common.cancel": "रद्द करा",
      "common.save": "जतन करा",
      "common.delete": "हटवा",
      "common.edit": "संपादित करा",
      "common.view": "पहा",
      "common.share": "सामायिक करा",
      "common.like": "आवडले",
      "common.comment": "टिप्पणी",
      "common.ago": "पूर्वी",
      "common.minutes": "मिनिटे",
      "common.hours": "तास",
      "common.days": "दिवस",

      // Hazard Tracker
      "tracker.title": "धोका सतर्कता ट्रॅकर",
      "tracker.subtitle": "नागरिक, बचाव पथके आणि अधिकाऱ्यांकडून प्रत्यक्ष वेळेतील अद्यतने",
      "tracker.online": "ऑनलाइन ✅",
      "tracker.refresh": "🔄 फीड रीफ्रेश करा",
      "tracker.autorefresh": "प्रत्येक 30 सेकंदांनी आपोआप रीफ्रेश",
      "tracker.alerts": "सक्रिय सतर्कता",
      "tracker.lastupdate": "शेवटचे अद्यतन",
      "tracker.coverage": "कव्हरेज",
      "tracker.loading": "ताज्या धोका सतर्कता मिळवत आहे...",
      "tracker.ready": "अलर्ट मिळवण्यासाठी तयार",
      "tracker.instructions": '"फीड रीफ्रेश करा" वर क्लिक करून X (Twitter) वरून सतर्कता मॉनिटर करणे सुरू करा.',
    }

    this.translations.pa = {
      "hero-title": "ਲਾਈਵ ਗੂਗਲ ਅਰਥ ਖਤਰਾ ਪ੍ਰਤਿਨਿਧਤਾ",
"hero-description": "ਉੱਨਤ ਸੈਟੇਲਾਈਟ ਇਮੇਜਰੀ ਅਤੇ ਧਰਤੀ ਨਿਰੀਖਣ ਤਕਨਾਲੋਜੀ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਦੱਖਣੀ ਏਸ਼ੀਆ ਵਿੱਚ ਕੁਦਰਤੀ ਖ਼ਤਰਿਆਂ ਅਤੇ ਜਲਵਾਯੂ ਡੇਟਾ ਦਾ ਰੀਅਲ-ਟਾਈਮ ਦ੍ਰਿਸ਼ਟੀਕਰਨ।",
"enlarge-map": "ਨਕਸ਼ਾ ਵਧਾਓ",
"minimize-map": "ਨਕਸ਼ਾ ਘਟਾਓ",
      // Navigation
      "nav.home": "ਹੋਮ",
      "nav.report": "ਖਤਰਾ ਰਿਪੋਰਟ ਕਰੋ",
      "nav.maps": "ਨਕਸ਼ੇ",
      "nav.social": "ਸੋਸ਼ਲ ਮੀਡੀਆ",
      "nav.signin": "ਸਾਈਨ ਇਨ",
      "nav.getstarted": "ਸ਼ੁਰੂ ਕਰੋ",
      "nav.signout": "ਸਾਈਨ ਆਉਟ",
      "nav.dashboard": "ਡੈਸ਼ਬੋਰਡ",

      // Homepage
      "hero.title": "ਨੀਰਵਰਸ",
      "hero.subtitle":
        "ਇੱਕ ਏਕੀਕ੍ਰਿਤ ਭੂ-ਖੋਜ ਬੁੱਧੀਮਤਾ ਪਲੇਟਫਾਰਮ ਜੋ ਰੀਅਲ-ਟਾਈਮ ਖਤਰਾ ਪਛਾਣ, AI-ਸੰਚਾਲਿਤ ਸੋਸ਼ਲ ਮੀਡੀਆ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਆਫ਼ਤ ਮੈਪਿੰਗ ਨੂੰ ਜੋੜਦਾ ਹੈ",
      "hero.status": "AI-ਸੰਚਾਲਿਤ ਆਫ਼ਤ ਪ੍ਰਬੰਧਨ ਪਲੇਟਫਾਰਮ",
      "hero.watchdemo": "ਡੈਮੋ ਵੇਖੋ",

      // Metrics
      "metrics.reports": "ਸਰਗਰਮ ਰਿਪੋਰਟਾਂ",
      "metrics.alerts": "ਸਰਗਰਮ ਅਲਰਟ",
      "metrics.species": "ਨਿਗਰਾਨੀ ਕੀਤੀਆਂ ਕਿਸਮਾਂ",
      "metrics.data": "ਪ੍ਰੋਸੈਸ ਕੀਤਾ ਡਾਟਾ",

      // Hazard Reporting
      "hazard.title": "ਸਮੁਦਾਇਕ ਖਤਰਾ ਰਿਪੋਰਟਿੰਗ",
      "hazard.subtitle": "ਸਾਡੇ ਆਸਾਨ ਰਿਪੋਰਟਿੰਗ ਸਿਸਟਮ ਨਾਲ ਸਮੁਦਾਇਕਾਂ ਨੂੰ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਖਤਰੇ ਰਿਪੋਰਟ ਕਰਨ ਲਈ ਯੋਗ ਬਣਾਓ",
      "hazard.geolocation.title": "ਜਿਓਲੋਕੇਸ਼ਨ ਟੈਗਿੰਗ",
      "hazard.geolocation.desc": "GPS ਏਕੀਕਰਨ ਨਾਲ ਹਰ ਰਿਪੋਰਟ ਲਈ ਸਹੀ ਸਥਾਨ ਡਾਟਾ ਆਪਣੇ ਆਪ ਕੈਪਚਰ ਕਰੋ",
      "hazard.multimedia.title": "ਮਲਟੀਮੀਡੀਆ ਸਬੂਤ",
      "hazard.multimedia.desc": "ਖਤਰਾ ਰਿਪੋਰਟਾਂ ਲਈ ਵਿਜੁਅਲ ਸੰਦਰਭ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਫੋਟੋ ਅਤੇ ਵੀਡੀਓ ਅਪਲੋਡ ਕਰੋ",
      "hazard.realtime.title": "ਰੀਅਲ-ਟਾਈਮ ਪ੍ਰੋਸੈਸਿੰਗ",
      "hazard.realtime.desc": "ਰਿਪੋਰਟਾਂ ਤੁਰੰਤ ਪ੍ਰੋਸੈਸ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ ਅਤੇ AI-ਸੰਚਾਲਿਤ ਵਿਸ਼ਲੇਸ਼ਣ ਰਾਹੀਂ ਸਤਿਆਪਿਤ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ",
      "hazard.community.title": "ਸਮੁਦਾਇਕ ਸਤਿਆਪਨ",
      "hazard.community.desc": "ਉਸੇ ਖੇਤਰ ਤੋਂ ਕਈ ਰਿਪੋਰਟਾਂ ਨੂੰ ਸਹੀਤਾ ਲਈ ਕਰਾਸ-ਚੈਕ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
      "hazard.startreporting": "ਰਿਪੋਰਟਿੰਗ ਸ਼ੁਰੂ ਕਰੋ",

      // Report Interface
      "report.interface": "ਰਿਪੋਰਟ ਇੰਟਰਫੇਸ",
      "report.hazardtype": "ਖਤਰੇ ਦੀ ਕਿਸਮ",
      "report.location": "ਸਥਾਨ",
      "report.severity": "ਗੰਭੀਰਤਾ",
      "report.highrisk": "ਉੱਚ ਖਤਰਾ",
      "report.photo": "📷 ਫੋਟੋ",
      "report.video": "🎥 ਵੀਡੀਓ",
      "report.locationbtn": "📍 ਸਥਾਨ",

      // Community Feed
      "feed.title": "ਸਮੁਦਾਇਕ ਆਫ਼ਤ ਫੀਡ",
      "feed.subtitle": "ਨਾਗਰਿਕਾਂ, ਬਚਾਅ ਟੀਮਾਂ ਅਤੇ ਅਧਿਕਾਰੀਆਂ ਵੱਲੋਂ ਚੱਲ ਰਹੀਆਂ ਆਫ਼ਤਾਂ ਅਤੇ ਖਤਰਿਆਂ ਬਾਰੇ ਰੀਅਲ-ਟਾਈਮ ਅੱਪਡੇਟ",
      "feed.trending": "ਹੁਣ ਟ੍ਰੈਂਡਿੰਗ",
      "feed.latest": "🕒 ਤਾਜ਼ਾ",
      "feed.trendingtab": "📈 ਟ੍ਰੈਂਡਿੰਗ",
      "feed.nearby": "📍 ਨੇੜੇ",
      "feed.showmap": "🗺 ਨਕਸ਼ਾ ਵੇਖੋ",
      "feed.placeholder": "ਖਤਰੇ ਦੀ ਰਿਪੋਰਟ ਕਰੋ ਜਾਂ ਆਫ਼ਤ ਅੱਪਡੇਟ ਸਾਂਝੇ ਕਰੋ...",
      "feed.send": "ਭੇਜੋ ➤",

      // Weather Page
      "weather.title": "ਨੀਰਵਰਸ ਮੌਸਮ ਡੈਸ਼ਬੋਰਡ",
      "weather.subtitle": "ਰੀਅਲ-ਟਾਈਮ ਮੌਸਮ ਅੱਪਡੇਟ, ਭਵਿੱਖਬਾਣੀਆਂ ਅਤੇ ਸਮੁਦਾਇਕ ਰਿਪੋਰਟਾਂ — ਸਭ ਕੁਝ ਇੱਕ ਸੁੰਦਰ ਡਾਰਕ ਇੰਟਰਫੇਸ ਵਿੱਚ।",
      "weather.current": "ਮੌਜੂਦਾ ਮੌਸਮ",
      "weather.forecast": "ਭਵਿੱਖਬਾਣੀ",
      "weather.community": "ਸਮੁਦਾਇਕ",
      "weather.chirps": "CHIRPS — ਵਰਖਾ",
      "weather.chirps.desc": "ਕੁੱਲ ਵਰਖਾ (ਮਿਲੀਮੀਟਰ) — ਮਾਨਸੂਨ 2024",
      "weather.imerg": "IMERG — ਵੱਧ ਤੋਂ ਵੱਧ ਵਰਖਾ",
      "weather.imerg.desc": "ਚੋਟੀ ਦੀ ਤੀਬਰਤਾ (ਮਿਲੀਮੀਟਰ/ਘੰਟਾ) — ਮਾਨਸੂਨ 2024",
      "weather.era5": "ERA5 — ਤਾਪਮਾਨ",
      "weather.era5.desc": "2ਮੀ ਤਾਪਮਾਨ (°C) — ਮਾਨਸੂਨ 2024",
      "weather.smap": "SMAP — ਮਿੱਟੀ ਦੀ ਨਮੀ",
      "weather.smap.desc": "ਔਸਤ ਮਿੱਟੀ ਦੀ ਨਮੀ — ਮਾਨਸੂਨ 2024",
      "weather.fullscreen": "ਪੂਰੀ ਸਕਰੀਨ ਵਿੱਚ ਖੋਲ੍ਹੋ",
      "weather.newtab": "ਨਵੀਂ ਟੈਬ ਵਿੱਚ ਖੋਲ੍ਹੋ",
      "weather.close": "ਬੰਦ ਕਰੋ ✕",
      "weather.footer": "Google Earth Engine ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਨਕਸ਼ੇ",

      // Login Page
      "login.welcome": "ਨੀਰਵਰਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ",
      "login.subtitle": "ਆਪਣੇ ਰਿਪੋਰਟਿੰਗ ਡੈਸ਼ਬੋਰਡ ਤੱਕ ਪਹੁੰਚ ਕਰਨ ਲਈ ਸਾਈਨ ਇਨ ਕਰੋ",
      "login.signin": "ਸਾਈਨ ਇਨ",
      "login.signup": "ਸਾਈਨ ਅਪ",
      "login.google": "Google ਨਾਲ ਜਾਰੀ ਰੱਖੋ",
      "login.or": "ਜਾਂ",
      "login.email": "ਈਮੇਲ",
      "login.phone": "ਫੋਨ",
      "login.password": "ਪਾਸਵਰਡ",
      "login.fullname": "ਪੂਰਾ ਨਾਮ",
      "login.terms": "ਮੈਂ ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ ਅਤੇ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਨਾਲ ਸਹਿਮਤ ਹਾਂ",
      "login.createaccount": "ਖਾਤਾ ਬਣਾਓ",
      "login.brand.subtitle": "ਸਮੁਦਾਇਕ ਰਿਪੋਰਟਿੰਗ ਸਹਾਇਕ",
      "login.brand.description":
        "ਰੀਅਲ-ਟਾਈਮ ਟ੍ਰੈਕਿੰਗ, ਉੱਚ-ਸਤਹ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਸਹਿਯੋਗੀ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਨਾਲ ਸਮੁਦਾਇਕ-ਚਲਿਤ ਰਿਪੋਰਟਿੰਗ ਲਈ ਤੁਹਾਡਾ ਆਖਰੀ ਪਲੇਟਫਾਰਮ।",

      // Common
      "common.loading": "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
      "common.error": "ਗਲਤੀ ਹੋ ਗਈ",
      "common.success": "ਸਫਲਤਾ",
      "common.cancel": "ਰੱਦ ਕਰੋ",
      "common.save": "ਸੰਭਾਲੋ",
      "common.delete": "ਹਟਾਓ",
      "common.edit": "ਸੰਪਾਦਿਤ ਕਰੋ",
      "common.view": "ਵੇਖੋ",
      "common.share": "ਸਾਂਝਾ ਕਰੋ",
      "common.like": "ਪਸੰਦ ਕਰੋ",
      "common.comment": "ਟਿੱਪਣੀ",
      "common.ago": "ਪਹਿਲਾਂ",
      "common.minutes": "ਮਿੰਟ",
      "common.hours": "ਘੰਟੇ",
      "common.days": "ਦਿਨ",

      // Hazard Tracker
      "tracker.title": "ਖਤਰਾ ਅਲਰਟ ਟ੍ਰੈਕਰ",
      "tracker.subtitle": "ਨਾਗਰਿਕਾਂ, ਬਚਾਅ ਟੀਮਾਂ ਅਤੇ ਅਧਿਕਾਰੀਆਂ ਵੱਲੋਂ ਰੀਅਲ-ਟਾਈਮ ਅੱਪਡੇਟ",
      "tracker.online": "ਆਨਲਾਈਨ ✅",
      "tracker.refresh": "🔄 ਫੀਡ ਰੀਫ੍ਰੈਸ਼ ਕਰੋ",
      "tracker.autorefresh": "ਹਰ 30 ਸੈਕਿੰਡ ਵਿੱਚ ਆਟੋਮੈਟਿਕ ਰੀਫ੍ਰੈਸ਼",
      "tracker.alerts": "ਸਕ੍ਰਿਆ ਅਲਰਟ",
      "tracker.lastupdate": "ਆਖਰੀ ਅੱਪਡੇਟ",
      "tracker.coverage": "ਕਵਰੇਜ",
      "tracker.loading": "ਤਾਜ਼ਾ ਖਤਰੇ ਦੇ ਅਲਰਟ ਲਿਆ ਜਾ ਰਹੇ ਹਨ...",
      "tracker.ready": "ਅਲਰਟ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਤਿਆਰ",
      "tracker.instructions": '"ਫੀਡ ਰੀਫ੍ਰੈਸ਼ ਕਰੋ" \'ਤੇ ਕਲਿੱਕ ਕਰਕੇ X (Twitter) ਤੋਂ ਅਲਰਟ ਮਾਨੀਟਰ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ।',
    }
    
    this.translations.hi = {
      "hero-title": "लाइव गूगल अर्थ खतरा प्रतिनिधित्व",
"hero-description": "उन्नत उपग्रह इमेजरी और पृथ्वी अवलोकन प्रौद्योगिकी का उपयोग करके दक्षिण एशिया में प्राकृतिक खतरों और जलवायु डेटा का वास्तविक समय दृश्यीकरण।",
"enlarge-map": "मानचित्र बड़ा करें",
"minimize-map": "मानचित्र छोटा करें",
  // Navigation
  "nav.home": "मुखपृष्ठ",
  "nav.report": "खतरा रिपोर्ट करें",
  "nav.maps": "मानचित्र",
  "nav.social": "सोशल मीडिया",
  "nav.signin": "साइन इन",
  "nav.getstarted": "शुरू करें",
  "nav.signout": "साइन आउट",
  "nav.dashboard": "डैशबोर्ड",

  // Homepage
  "hero.title": "नीरवर्स",
  "hero.subtitle":
    "एकीकृत भू-स्थानिक इंटेलिजेंस प्लेटफ़ॉर्म जो वास्तविक समय खतरा पहचान, एआई-संचालित सोशल मीडिया विश्लेषण, और इंटरैक्टिव आपदा मानचित्रण को व्यापक आपातकालीन प्रतिक्रिया के लिए जोड़ता है",
  "hero.status": "एआई-संचालित आपदा प्रबंधन प्लेटफ़ॉर्म",
  "hero.watchdemo": "डेमो देखें",

  // Metrics
  "metrics.reports": "सक्रिय रिपोर्टें",
  "metrics.alerts": "सक्रिय अलर्ट",
  "metrics.species": "निगरानी की गई प्रजातियाँ",
  "metrics.data": "प्रोसेस किया गया डेटा",

  // Hazard Reporting
  "hazard.title": "जन-सहयोग से खतरा रिपोर्टिंग",
  "hazard.subtitle": "हमारी सहज रिपोर्टिंग प्रणाली के साथ समुदायों को वास्तविक समय में खतरे रिपोर्ट करने का अधिकार दें",
  "hazard.geolocation.title": "भौगोलिक स्थान टैगिंग",
  "hazard.geolocation.desc": "जीपीएस इंटीग्रेशन के साथ हर रिपोर्ट का सटीक स्थान डेटा स्वतः कैप्चर करें",
  "hazard.multimedia.title": "मल्टीमीडिया सबूत",
  "hazard.multimedia.desc": "खतरा रिपोर्टों के लिए दृश्य संदर्भ प्रदान करने हेतु फ़ोटो और वीडियो अपलोड करें",
  "hazard.realtime.title": "रीयल-टाइम प्रोसेसिंग",
  "hazard.realtime.desc": "रिपोर्ट तुरंत प्रोसेस होती हैं और एआई-संचालित विश्लेषण से सत्यापित की जाती हैं",
  "hazard.community.title": "समुदाय सत्यापन",
  "hazard.community.desc": "एक ही क्षेत्र से कई रिपोर्टों को सटीकता के लिए क्रॉस-सत्यापित किया जाता है",
  "hazard.startreporting": "रिपोर्टिंग शुरू करें",

  // Report Interface
  "report.interface": "रिपोर्ट इंटरफ़ेस",
  "report.hazardtype": "खतरे का प्रकार",
  "report.location": "स्थान",
  "report.severity": "गंभीरता",
  "report.highrisk": "उच्च जोखिम",
  "report.photo": "📷 फ़ोटो",
  "report.video": "🎥 वीडियो",
  "report.locationbtn": "📍 स्थान",

  // Community Feed
  "feed.title": "समुदाय आपदा फ़ीड",
  "feed.subtitle":
    "नागरिकों, बचाव दल और प्राधिकरणों से चल रही आपदाओं और खतरों पर वास्तविक समय अपडेट",
  "feed.trending": "अभी ट्रेंडिंग",
  "feed.latest": "🕒 नवीनतम",
  "feed.trendingtab": "📈 ट्रेंडिंग",
  "feed.nearby": "📍 पास में",
  "feed.showmap": "🗺 मानचित्र दिखाएँ",
  "feed.placeholder": "खतरे की रिपोर्ट करें या आपदा अपडेट साझा करें...",
  "feed.send": "भेजें ➤",

  // Weather Page
  "weather.title": "नीरवर्स मौसम डैशबोर्ड",
  "weather.subtitle":
    "वास्तविक समय मौसम अपडेट, पूर्वानुमान और समुदाय रिपोर्ट — सब एक आकर्षक डार्क इंटरफ़ेस में।",
  "weather.current": "वर्तमान मौसम",
  "weather.forecast": "पूर्वानुमान",
  "weather.community": "समुदाय",
  "weather.chirps": "CHIRPS — वर्षा",
  "weather.chirps.desc": "कुल वर्षा (मिमी) — मानसून 2024",
  "weather.imerg": "IMERG — अधिकतम वर्षा",
  "weather.imerg.desc": "शीर्ष तीव्रता (मिमी/घं) — मानसून 2024",
  "weather.era5": "ERA5 — तापमान",
  "weather.era5.desc": "2 मीटर तापमान (°C) — मानसून 2024",
  "weather.smap": "SMAP — मिट्टी की नमी",
  "weather.smap.desc": "औसत मिट्टी की नमी — मानसून 2024",
  "weather.fullscreen": "फुलस्क्रीन खोलें",
  "weather.newtab": "नए टैब में खोलें",
  "weather.close": "बंद करें ✕",
  "weather.footer": "मानचित्र Google Earth Engine द्वारा संचालित",

  // Login Page
  "login.welcome": "नीरवर्स में आपका स्वागत है",
  "login.subtitle": "अपना रिपोर्टिंग डैशबोर्ड एक्सेस करने के लिए साइन इन करें",
  "login.signin": "साइन इन",
  "login.signup": "साइन अप",
  "login.google": "Google से जारी रखें",
  "login.or": "या",
  "login.email": "ईमेल",
  "login.phone": "फ़ोन",
  "login.password": "पासवर्ड",
  "login.fullname": "पूरा नाम",
  "login.terms": "मैं सेवा की शर्तों और गोपनीयता नीति से सहमत हूँ",
  "login.createaccount": "खाता बनाएं",
  "login.brand.subtitle": "जन-सहयोग रिपोर्टिंग सहायक",
  "login.brand.description":
    "आपका सर्वोत्तम प्लेटफ़ॉर्म समुदाय-संचालित रिपोर्टिंग के लिए, वास्तविक समय ट्रैकिंग, उन्नत विश्लेषण और सहयोगी फीचर्स के साथ।",

  // Common
  "common.loading": "लोड हो रहा है...",
  "common.error": "त्रुटि हुई",
  "common.success": "सफलता",
  "common.cancel": "रद्द करें",
  "common.save": "सहेजें",
  "common.delete": "हटाएँ",
  "common.edit": "संपादित करें",
  "common.view": "देखें",
  "common.share": "साझा करें",
  "common.like": "पसंद",
  "common.comment": "टिप्पणी",
  "common.ago": "पहले",
  "common.minutes": "मिनट",
  "common.hours": "घंटे",
  "common.days": "दिन",

  // Hazard Tracker
  "tracker.title": "खतरा अलर्ट ट्रैकर",
  "tracker.subtitle": "नागरिकों, बचाव दल और प्राधिकरणों से वास्तविक समय अपडेट",
  "tracker.online": "ऑनलाइन ✅",
  "tracker.refresh": "🔄 फ़ीड रिफ्रेश करें",
  "tracker.autorefresh": "हर 30 सेकंड पर स्वतः रिफ्रेश",
  "tracker.alerts": "सक्रिय अलर्ट",
  "tracker.lastupdate": "अंतिम अपडेट",
  "tracker.coverage": "कवरेज",
  "tracker.loading": "नवीनतम खतरा अलर्ट लाया जा रहा है...",
  "tracker.ready": "अलर्ट लाने के लिए तैयार",
  "tracker.instructions": 'खतरा अलर्ट मॉनिटर करने के लिए "फ़ीड रिफ्रेश करें" पर क्लिक करें (X / ट्विटर से)।',
}

    //odia translations
    this.translations.or = {
      "hero-title": "ଲାଇଭ ଗୁଗଲ ଆର୍ଥ ବିପଦ ପ୍ରତିନିଧିତ୍ୱ",
"hero-description": "ଉନ୍ନତ ଉପଗ୍ରହ ଚିତ୍ରଣ ଏବଂ ପୃଥିବୀ ନୀରିକ୍ଷଣ ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ବ୍ୟବହାର କରି ଦକ୍ଷିଣ ଏସିଆରେ ପ୍ରାକୃତିକ ବିପଦ ଏବଂ ଜଳବାୟୁ ତଥ୍ୟର ବାସ୍ତବ ସମୟ ଦୃଶ୍ୟକରଣ।",
"enlarge-map": "ମାନଚିତ୍ର ବଡ଼ କରନ୍ତୁ",
"minimize-map": "ମାନଚିତ୍ର ଛୋଟ କରନ୍ତୁ",
      // Navigation
      "nav.home": "ହୋମ୍",
      "nav.report": "ଝୁମ୍କି ରିପୋର୍ଟ କରନ୍ତୁ",
      "nav.maps": "ମାନଚିତ୍ର",
      "nav.social": "ସୋସିଆଲ୍ ମିଡିଆ",
      "nav.signin": "ସାଇନ୍ ଇନ୍",
      "nav.getstarted": "ଆରମ୍ଭ କରନ୍ତୁ",
      "nav.signout": "ସାଇନ୍ ଆଉଟ୍",
      "nav.dashboard": "ଡ୍ୟାଶବୋର୍ଡ",

      // Homepage
      "hero.title": "ନୀରଭର୍ସ",
      "hero.subtitle": "ଏକତ୍ରିତ ଭୂ-ବୁଦ୍ଧିମତ୍ତା ପ୍ଲାଟଫର୍ମ ଯାହା ରିଅଲ୍-ଟାଇମ୍ ଝୁମ୍କି ସନ୍ଦେଶ, AI-ଚାଳିତ ସୋସିଆଲ୍ ମିଡିଆ ବିଶ୍ଳେଷଣ ଏବଂ ବିପଦ ମାନଚିତ୍ରକୁ ସମ୍ମିଳିତ କରେ",
      "hero.status": "AI-ଚାଳିତ ବିପଦ ପରିଚାଳନା ପ୍ଲାଟଫର୍ମ",
      "hero.watchdemo": "ଡେମୋ ଦେଖନ୍ତୁ",

      // Metrics
      "metrics.reports": "ସକ୍ରିୟ ରିପୋର୍ଟ",
      "metrics.alerts": "ସକ୍ରିୟ ସତର୍କତା",
      "metrics.species": "ପର୍ଯ୍ୟବେକ୍ଷଣ କରାଯାଇଥିବା ପ୍ରଜାତି",
      "metrics.data": "ପ୍ରୋସେସ୍ ହୋଇଥିବା ତଥ୍ୟ",

      // Hazard Reporting
      "hazard.title": "ସମୁଦାୟଭିତ୍ତିକ ଝୁମ୍କି ରିପୋର୍ଟିଂ",
      "hazard.subtitle": "ଆମର ସହଜ ରିପୋର୍ଟିଂ ସିଷ୍ଟମ୍ ସହିତ ସମୁଦାୟମାନଙ୍କୁ ରିଅଲ୍-ଟାଇମ୍ ରେ ଝୁମ୍କି ରିପୋର୍ଟ କରିବାକୁ ସକ୍ଷମ କରନ୍ତୁ",
      "hazard.geolocation.title": "ଭୂ-ଅବସ୍ଥିତି ଟ୍ୟାଗିଂ",
      "hazard.geolocation.desc": "GPS ସମ୍ମିଳନ ସହିତ ପ୍ରତ୍ୟେକ ରିପୋର୍ଟ ପାଇଁ ନିଷ୍ପତ୍ତି ସ୍ଥାନ ତଥ୍ୟ ସ୍ୱୟଂଚାଳିତ ଧରାହେବ",
      "hazard.multimedia.title": "ମଲ୍ଟିମିଡିଆ ପ୍ରମାଣ",
      "hazard.multimedia.desc": "ଝୁମ୍କି ରିପୋର୍ଟ ପାଇଁ ଭିଜୁଆଲ୍ ପ୍ରସଙ୍ଗ ଦେବା ପାଇଁ ଫଟୋ ଏବଂ ଭିଡିଓ ଅପଲୋଡ୍ କରନ୍ତୁ",
      "hazard.realtime.title": "ରିଅଲ୍-ଟାଇମ୍ ପ୍ରୋସେସିଂ",
      "hazard.realtime.desc": "ରିପୋର୍ଟମାନେ ତତ୍କ୍ଷଣାତ ପ୍ରୋସେସ୍ ହୋଇଥାଏ ଏବଂ AI-ଚାଳିତ ବିଶ୍ଳେଷଣ ଦ୍ୱାରା ସତ୍ୟାପିତ ହୁଏ",
      "hazard.community.title": "ସମୁଦାୟ ସତ୍ୟାପନ",
      "hazard.community.desc": "ସେହି ଅଞ୍ଚଳରୁ ଅନେକ ରିପୋର୍ଟକୁ ସତ୍ୟତା ପାଇଁ କ୍ରସ୍-ଚେକ୍ କରାଯାଏ",
      "hazard.startreporting": "ରିପୋର୍ଟ କରିବା ଆରମ୍ଭ କରନ୍ତୁ",

      // Report Interface
      "report.interface": "ରିପୋର୍ଟ ଇଣ୍ଟରଫେସ୍",
      "report.hazardtype": "ଝୁମ୍କିର ପ୍ରକାର",
      "report.location": "ଅବସ୍ଥାନ",
      "report.severity": "ତୀବ୍ରତା",
      "report.highrisk": "ଉଚ୍ଚ ଝୁମ୍କି",
      "report.photo": "📷 ଫଟୋ",
      "report.video": "🎥 ଭିଡିଓ",
      "report.locationbtn": "📍 ଅବସ୍ଥାନ",

      // Community Feed
      "feed.title": "ସମୁଦାୟ ବିପଦ ଫିଡ୍",
      "feed.subtitle": "ନାଗରିକ, ଉଦ୍ଧାର ଦଳ ଏବଂ କର୍ତ୍ତୃପକ୍ଷଙ୍କରୁ ଚାଲୁଥିବା ବିପଦ ଏବଂ ଝୁମ୍କି ବିଷୟରେ ସମୟୋଚିତ ସୂଚନା",
      "feed.trending": "ବର୍ତ୍ତମାନ ଟ୍ରେଣ୍ଡିଂ",
      "feed.latest": "🕒 ସେଷ",
      "feed.trendingtab": "📈 ଟ୍ରେଣ୍ଡିଂ",
      "feed.nearby": "📍 ନିକଟରେ",
      "feed.showmap": "🗺 ମାନଚିତ୍ର ଦେଖାନ୍ତୁ",
      "feed.placeholder": "ଝୁମ୍କି ରିପୋର୍ଟ କରନ୍ତୁ କିମ୍ବା ବିପଦ ସୂଚନା ସେୟାର୍ କରନ୍ତୁ...",
      "feed.send": "ପଠାନ୍ତୁ ➤",

      // Weather Page
      "weather.title": "ନୀରଭର୍ସ ଆବହାବାଣୀ ଡ୍ୟାଶବୋର୍ଡ",
      "weather.subtitle": "ସମୟୋଚିତ ଆବହାବାଣୀ ସୂଚନା, ପୂର୍ବାନୁମାନ ଏବଂ ସମୁଦାୟ ରିପୋର୍ଟ — ସମସ୍ତେ ଏକ ଆକର୍ଷକ ଡାର୍କ୍ ଇଣ୍ଟରଫେସ୍‌ରେ।",
      "weather.current": "ବର୍ତ୍ତମାନ ଆବହାବାଣୀ",
      "weather.forecast": "ପୂର୍ବାନୁମାନ",
      "weather.community": "ସମୁଦାୟ",
      "weather.chirps": "CHIRPS — ବର୍ଷା",
      "weather.chirps.desc": "ମୋଟ ବର୍ଷା (ମି.ମି.) — ବର୍ଷା 2024",
      "weather.imerg": "IMERG — ସର୍ବାଧିକ ବର୍ଷା",
      "weather.imerg.desc": "ଚରମ ତୀବ୍ରତା (ମି.ମି./ଘଣ୍ଟା) — ବର୍ଷା 2024",
      "weather.era5": "ERA5 — ତାପମାନ",
      "weather.era5.desc": "2ମି. ତାପମାନ (°C) — ବର୍ଷା 2024",
      "weather.smap": "SMAP — ମାଟିର ଆର୍ଦ୍ରତା",
      "weather.smap.desc": "ମାଟିର ସର୍ବୋତ୍ତମ ଆର୍ଦ୍ରତା — ବର୍ଷା 2024",
      "weather.fullscreen": "ପୂର୍ଣ୍ଣପଦରେ ଖୋଲନ୍ତୁ",
      "weather.newtab": "ନୂଆ ଟ୍ୟାବ୍‌ରେ ଖୋଲନ୍ତୁ",
      "weather.close": "ବନ୍ଦ କରନ୍ତୁ ✕",
      "weather.footer": "Google Earth Engine ଦ୍ୱାରା ସମର୍ଥିତ ମାନଚିତ୍ର",

      // Login Page
      "login.welcome": "ନୀରଭର୍ସକୁ ସ୍ୱାଗତ",
      "login.subtitle": "ଆପଣଙ୍କ ରିପୋର୍ଟିଂ ଡ୍ୟାଶବୋର୍ଡକୁ ପ୍ରବେଶ ପାଇବା ପାଇଁ ସାଇନ୍ ଇନ୍ କରନ୍ତୁ",
      "login.signin": "ସାଇନ୍ ଇନ୍",
      "login.signup": "ସାଇନ୍ ଅପ୍",
      "login.google": "Google ସହିତ ଜାରି ରଖନ୍ତୁ",
      "login.or": "କିମ୍ବା",
      "login.email": "ଇମେଲ୍",
      "login.phone": "ଫୋନ୍",
      "login.password": "ପାସୱାର୍ଡ",
      "login.fullname": "ପୂର୍ଣ୍ଣ ନାମ",
      "login.terms": "ମୁଁ ସେବାର ନୀତି ଏବଂ ଗୋପନୀୟତା ନୀତି ସହିତ ସହମତ",
      "login.createaccount": "ଖାତା ସୃଷ୍ଟି କରନ୍ତୁ",
      "login.brand.subtitle": "ସମୁଦାୟ ରିପୋର୍ଟିଂ ସହାୟକ",
      "login.brand.description":
        "ସମୟୋଚିତ ଟ୍ରାକିଂ, ଉନ୍ନତ ବିଶ୍ଳେଷଣ ଏବଂ ସହକାରୀ ବିଶେଷତା ସହିତ ସମୁଦାୟ-ଚାଳିତ ରିପୋର୍ଟିଂ ପାଇଁ ଆପଣଙ୍କର ସର୍ବୋତ୍ତମ ପ୍ଲାଟଫର୍ମ।",

      // Common
      "common.loading": "ଲୋଡ୍ ହେଉଛି...",
      "common.error": "ତ୍ରୁଟି ହେଲା",
      "common.success": "ସଫଳ",
      "common.cancel": "ବାତିଲ୍",
      "common.save": "ସେଭ୍",
      "common.delete": "ଡିଲିଟ୍",
      "common.edit": "ସମ୍ପାଦନ କରନ୍ତୁ",
      "common.view": "ଦେଖନ୍ତୁ",
      "common.share": "ସେୟାର୍",
      "common.like": "ଭଲଲାଗିଲା",
      "common.comment": "ମନ୍ତବ୍ୟ",
      "common.ago": "ପୂର୍ବରୁ",
      "common.minutes": "ମିନିଟ୍",
      "common.hours": "ଘଣ୍ଟା",
      "common.days": "ଦିନ",

      // Hazard Tracker
      "tracker.title": "ଝୁମ୍କି ସତର୍କତା ଟ୍ରାକର୍",
      "tracker.subtitle": "ନାଗରିକ, ଉଦ୍ଧାର ଦଳ ଏବଂ କର୍ତ୍ତୃପକ୍ଷଙ୍କରୁ ସମୟୋଚିତ ସୂଚନା",
      "tracker.online": "ଅନଲାଇନ୍ ✅",
      "tracker.refresh": "🔄 ଫିଡ୍ ରିଫ୍ରେଶ୍ କରନ୍ତୁ",
      "tracker.autorefresh": "ପ୍ରତି 30 ସେକେଣ୍ଡ୍‌ରେ ସ୍ୱୟଂଚାଳିତ ରିଫ୍ରେଶ୍",
      "tracker.alerts": "ସକ୍ରିୟ ସତର୍କତା",
      "tracker.lastupdate": "ଶେଷ ଅଦ୍ୟତନ",
      "tracker.coverage": "କଭରେଜ୍",
      "tracker.loading": "ସେଷ ଝୁମ୍କି ସତର୍କତା ଆଣାଯାଉଛି...",
      "tracker.ready": "ସତର୍କତା ପାଇବାକୁ ପ୍ରସ୍ତୁତ",
      "tracker.instructions": '"ଫିଡ୍ ରିଫ୍ରେଶ୍ କରନ୍ତୁ" କ୍ଲିକ୍ କରି X (Twitter)ରୁ ସତର୍କତା ଟ୍ରାକ୍ କରିବା ଆରମ୍ଭ କରନ୍ତୁ।',
    }
    this.translations.kn = {
      "hero-title": "ಲೈವ್ ಗೂಗಲ್ ಅರ್ಥ್ ಅಪಾಯ ಪ್ರಾತಿನಿಧ್ಯ",
"hero-description": "ಸುಧಾರಿತ ಉಪಗ್ರಹ ಚಿತ್ರಣ ಮತ್ತು ಭೂಮಿ ವೀಕ್ಷಣಾ ತಂತ್ರಜ್ಞಾನವನ್ನು ಬಳಸಿಕೊಂಡು ದಕ್ಷಿಣ ಏಷ್ಯಾದಾದ್ಯಂತ ನೈಸರ್ಗಿಕ ಅಪಾಯಗಳು ಮತ್ತು ಹವಾಮಾನ ಡೇಟಾದ ನೈಜ-ಸಮಯದ ದೃಶ್ಯೀಕರಣ।",
"enlarge-map": "ನಕ್ಷೆ ವಿಸ್ತರಿಸಿ",
"minimize-map": "ನಕ್ಷೆ ಕುಗ್ಗಿಸಿ",
      // Navigation
      "nav.home": "ಮುಖಪುಟ",
      "nav.report": "ಆಪತ್ತು ವರದಿ ಮಾಡಿ",
      "nav.maps": "ನಕ್ಷೆಗಳು",
      "nav.social": "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ",
      "nav.signin": "ಸೈನ್ ಇನ್",
      "nav.getstarted": "ಪ್ರಾರಂಭಿಸಿ",
      "nav.signout": "ಸೈನ್ ಔಟ್",
      "nav.dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

      // Homepage
      "hero.title": "ನೀರ್ವರ್ಸ್",
      "hero.subtitle":
        "ರಿಯಲ್-ಟೈಮ್ ಅಪಾಯ ಪತ್ತೆ, AI ಚಾಲಿತ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಆಪತ್ತು ನಕ್ಷೆಗಳನ್ನು ಏಕೀಕರಿಸುವ ಏಕೀಕೃತ ಭೂಸ್ಥಾನ ಬುದ್ಧಿಮತ್ತೆ ವೇದಿಕೆ",
      "hero.status": "AI ಚಾಲಿತ ಆಪತ್ತು ನಿರ್ವಹಣಾ ವೇದಿಕೆ",
      "hero.watchdemo": "ಡೆಮೋ ವೀಕ್ಷಿಸಿ",

      // Metrics
      "metrics.reports": "ಸಕ್ರಿಯ ವರದಿಗಳು",
      "metrics.alerts": "ಸಕ್ರಿಯ ಎಚ್ಚರಿಕೆಗಳು",
      "metrics.species": "ಮೋನಿಟರ್ ಮಾಡಲಾದ ಪ್ರಜಾತಿಗಳು",
      "metrics.data": "ಪ್ರಕ್ರಿಯೆಗೊಂಡ ಡೇಟಾ",

      // Hazard Reporting
      "hazard.title": "ಸಮುದಾಯ ಆಧಾರಿತ ಅಪಾಯ ವರದಿ",
      "hazard.subtitle": "ನಮ್ಮ ಸುಲಭ ವರದಿ ವ್ಯವಸ್ಥೆಯೊಂದಿಗೆ ಸಮುದಾಯಗಳನ್ನು ನೈಜ ಸಮಯದಲ್ಲಿ ಅಪಾಯಗಳನ್ನು ವರದಿ ಮಾಡಲು ಸಕ್ರಿಯಗೊಳಿಸಿ",
      "hazard.geolocation.title": "ಭೂ-ಅವಕಾಶ ಟ್ಯಾಗಿಂಗ್",
      "hazard.geolocation.desc": "ಪ್ರತಿ ವರದಿಗಾಗಿ GPS ಏಕೀಕರಣದೊಂದಿಗೆ ನಿಖರವಾದ ಸ್ಥಳ ಮಾಹಿತಿಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸೆರೆಹಿಡಿಯಿರಿ",
      "hazard.multimedia.title": "ಮಲ್ಟಿಮೀಡಿಯಾ ಸಾಕ್ಷ್ಯ",
      "hazard.multimedia.desc": "ಅಪಾಯ ವರದಿಗಳಿಗೆ ದೃಶ್ಯಾತ್ಮಕ ಸಂದರ್ಭ ಒದಗಿಸಲು ಫೋಟೋಗಳು ಮತ್ತು ವೀಡಿಯೊಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      "hazard.realtime.title": "ರಿಯಲ್-ಟೈಮ್ ಪ್ರೊಸೆಸಿಂಗ್",
      "hazard.realtime.desc": "ವರದಿಗಳನ್ನು ತಕ್ಷಣ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತದೆ ಮತ್ತು AI ಚಾಲಿತ ವಿಶ್ಲೇಷಣೆಯ ಮೂಲಕ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ",
      "hazard.community.title": "ಸಮುದಾಯ ಪರಿಶೀಲನೆ",
      "hazard.community.desc": "ಅದೇ ಪ್ರದೇಶದಿಂದ ಹಲವಾರು ವರದಿಗಳನ್ನು ನಿಖರತೆಗೆ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ",
      "hazard.startreporting": "ವರದಿ ಪ್ರಾರಂಭಿಸಿ",

      // Report Interface
      "report.interface": "ವರದಿ ಇಂಟರ್ಫೇಸ್",
      "report.hazardtype": "ಅಪಾಯದ ಪ್ರಕಾರ",
      "report.location": "ಸ್ಥಳ",
      "report.severity": "ತೀವ್ರತೆ",
      "report.highrisk": "ಹೆಚ್ಚಿನ ಅಪಾಯ",
      "report.photo": "📷 ಫೋಟೋ",
      "report.video": "🎥 ವೀಡಿಯೊ",
      "report.locationbtn": "📍 ಸ್ಥಳ",

      // Community Feed
      "feed.title": "ಸಮುದಾಯ ಆಪತ್ತು ಫೀಡ್",
      "feed.subtitle": "ನಾಗರಿಕರು, ರಕ್ಷಣಾ ತಂಡಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳಿಂದ ನಡೆಯುತ್ತಿರುವ ಆಪತ್ತು ಮತ್ತು ಅಪಾಯಗಳ ನೈಜ-ಸಮಯ ನವೀಕರಣಗಳು",
      "feed.trending": "ಟ್ರೆಂಡಿಂಗ್",
      "feed.latest": "🕒 ಇತ್ತೀಚಿನ",
      "feed.trendingtab": "📈 ಟ್ರೆಂಡಿಂಗ್",
      "feed.nearby": "📍 ಹತ್ತಿರ",
      "feed.showmap": "🗺 ನಕ್ಷೆ ತೋರಿಸಿ",
      "feed.placeholder": "ಅಪಾಯ ವರದಿ ಮಾಡಿ ಅಥವಾ ಆಪತ್ತು ನವೀಕರಣಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ...",
      "feed.send": "ಕಳುಹಿಸಿ ➤",

      // Weather Page
      "weather.title": "ನೀರ್ವರ್ಸ್ ಹವಾಮಾನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      "weather.subtitle": "ರಿಯಲ್-ಟೈಮ್ ಹವಾಮಾನ ನವೀಕರಣಗಳು, ಮುನ್ಸೂಚನೆಗಳು ಮತ್ತು ಸಮುದಾಯ ವರದಿಗಳು — ಎಲ್ಲಾ ಕತ್ತಲೆ ಇಂಟರ್ಫೇಸ್‌ನಲ್ಲಿ.",
      "weather.current": "ಪ್ರಸ್ತುತ ಹವಾಮಾನ",
      "weather.forecast": "ಮುನ್ಸೂಚನೆ",
      "weather.community": "ಸಮುದಾಯ",
      "weather.chirps": "CHIRPS — ಮಳೆಯ ಪ್ರಮಾಣ",
      "weather.chirps.desc": "ಒಟ್ಟು ಮಳೆ (ಮಿಮೀ) — ಮಳೆಗಾಲ 2024",
      "weather.imerg": "IMERG — ಗರಿಷ್ಠ ಮಳೆ",
      "weather.imerg.desc": "ಅತಿ ಹೆಚ್ಚು ತೀವ್ರತೆ (ಮಿಮೀ/ಗಂಟೆ) — ಮಳೆಗಾಲ 2024",
      "weather.era5": "ERA5 — ತಾಪಮಾನ",
      "weather.era5.desc": "2ಮೀ ತಾಪಮಾನ (°C) — ಮಳೆಗಾಲ 2024",
      "weather.smap": "SMAP — ಮಣ್ಣಿನ ತೇವಾಂಶ",
      "weather.smap.desc": "ಸರಾಸರಿ ಮಣ್ಣಿನ ತೇವಾಂಶ — ಮಳೆಗಾಲ 2024",
      "weather.fullscreen": "ಪೂರ್ಣ ಪರದೆಯಲ್ಲಿ ತೆರೆಯಿರಿ",
      "weather.newtab": "ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ",
      "weather.close": "ಮುಚ್ಚಿ ✕",
      "weather.footer": "Google Earth Engine ನಿಂದ ಕಾರ್ಯನಿರ್ವಹಿಸಲಾದ ನಕ್ಷೆಗಳು",

      // Login Page
      "login.welcome": "ನೀರ್ವರ್ಸ್‌ಗೆ ಸುಸ್ವಾಗತ",
      "login.subtitle": "ನಿಮ್ಮ ವರದಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಪ್ರವೇಶಿಸಲು ಸೈನ್ ಇನ್ ಮಾಡಿ",
      "login.signin": "ಸೈನ್ ಇನ್",
      "login.signup": "ಸೈನ್ ಅಪ್",
      "login.google": "Google ಮೂಲಕ ಮುಂದುವರಿಸಿ",
      "login.or": "ಅಥವಾ",
      "login.email": "ಇಮೇಲ್",
      "login.phone": "ಫೋನ್",
      "login.password": "ಪಾಸ್‌ವರ್ಡ್",
      "login.fullname": "ಪೂರ್ಣ ಹೆಸರು",
      "login.terms": "ನಾನು ಸೇವಾ ನಿಯಮಗಳು ಮತ್ತು ಗೌಪ್ಯತಾ ನೀತಿಗೆ ಒಪ್ಪುತ್ತೇನೆ",
      "login.createaccount": "ಖಾತೆ ರಚಿಸಿ",
      "login.brand.subtitle": "ಸಮುದಾಯ ವರದಿ ಸಹಾಯಕ",
      "login.brand.description": "ನೈಜ-ಸಮಯ ಟ್ರ್ಯಾಕಿಂಗ್, ಪ್ರಗತಿಶೀಲ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಸಹಕಾರಿ ವೈಶಿಷ್ಟ್ಯಗಳೊಂದಿಗೆ ಸಮುದಾಯ-ಚಾಲಿತ ವರದಿಗಾಗಿ ನಿಮ್ಮ ಅಂತಿಮ ವೇದಿಕೆ.",

      // Common
      "common.loading": "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      "common.error": "ದೋಷ ಸಂಭವಿಸಿದೆ",
      "common.success": "ಯಶಸ್ವಿ",
      "common.cancel": "ರದ್ದುಮಾಡಿ",
      "common.save": "ಉಳಿಸಿ",
      "common.delete": "ಅಳಿಸಿ",
      "common.edit": "ಸಂಪಾದಿಸಿ",
      "common.view": "ವೀಕ್ಷಿಸಿ",
      "common.share": "ಹಂಚಿಕೊಳ್ಳಿ",
      "common.like": "ಇಷ್ಟವಾಗಿದೆ",
      "common.comment": "ಕಾಮೆಂಟ್ ಮಾಡಿ",
      "common.ago": "ಹಿಂದೆ",
      "common.minutes": "ನಿಮಿಷಗಳು",
      "common.hours": "ಗಂಟೆಗಳು",
      "common.days": "ದಿನಗಳು",

      // Hazard Tracker
      "tracker.title": "ಅಪಾಯ ಎಚ್ಚರಿಕೆ ಟ್ರ್ಯಾಕರ್",
      "tracker.subtitle": "ನಾಗರಿಕರು, ರಕ್ಷಣಾ ತಂಡಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳಿಂದ ನೈಜ-ಸಮಯ ನವೀಕರಣಗಳು",
      "tracker.online": "ಆನ್ಲೈನ್ ✅",
      "tracker.refresh": "🔄 ಫೀಡ್ ರಿಫ್ರೆಶ್ ಮಾಡಿ",
      "tracker.autorefresh": "ಪ್ರತಿ 30 ಸೆಕೆಂಡ್‌ಗಳಿಗೆ ಸ್ವಯಂಚಾಲಿತ ರಿಫ್ರೆಶ್",
      "tracker.alerts": "ಸಕ್ರಿಯ ಎಚ್ಚರಿಕೆಗಳು",
      "tracker.lastupdate": "ಕೊನೆಯ ನವೀಕರಣ",
      "tracker.coverage": "ಕವರೆಜ್",
      "tracker.loading": "ಇತ್ತೀಚಿನ ಅಪಾಯ ಎಚ್ಚರಿಕೆಗಳನ್ನು ತರಲಾಗುತ್ತಿದೆ...",
      "tracker.ready": "ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪಡೆಯಲು ಸಿದ್ಧವಾಗಿದೆ",
      "tracker.instructions": '"ಫೀಡ್ ರಿಫ್ರೆಶ್ ಮಾಡಿ" ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು X (Twitter) ನಿಂದ ಎಚ್ಚರಿಕೆಗಳನ್ನು ನಿಗಾ ಪ್ರಾರಂಭಿಸಿ.',
    }
  }

  translate(key, lang = null) {
    const language = lang || this.currentLanguage
    const translation = this.translations[language]?.[key] || this.translations.en[key] || key
    return translation
  }

  setLanguage(lang) {
    if (this.supportedLanguages[lang]) {
      this.currentLanguage = lang
      localStorage.setItem("neerverse-language", lang)
      this.updatePageContent()
      this.updateLanguageSelector()

      // Update document language and direction
      document.documentElement.lang = lang
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"

      // Dispatch custom event for other components to listen
      window.dispatchEvent(new CustomEvent("languageChanged", { detail: { language: lang } }))
    }
  }

  getCurrentLanguage() {
    return this.currentLanguage
  }

  getSupportedLanguages() {
    return this.supportedLanguages
  }

  updatePageContent() {
    // Update all elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate")
      const translation = this.translate(key)

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
    })

    // Update page title if it has translation key
    const titleElement = document.querySelector("title[data-translate]")
    if (titleElement) {
      const key = titleElement.getAttribute("data-translate")
      titleElement.textContent = this.translate(key)
    }
  }

  updateLanguageSelector() {
    const currentLangDisplay = document.querySelector(".current-language")
    if (currentLangDisplay) {
      const langInfo = this.supportedLanguages[this.currentLanguage]
      currentLangDisplay.innerHTML = `${langInfo.flag} ${langInfo.name}`
    }
  }

  initializeLanguageSelector() {
    // Create language selector dropdown
    const header = document.querySelector(".header-actions")
    if (!header) return

    const languageSelector = document.createElement("div")
    languageSelector.className = "language-selector"
    languageSelector.innerHTML = `
      <button class="language-toggle" aria-label="Select Language" title="Select Language">
        <span class="current-language">${this.supportedLanguages[this.currentLanguage].flag} ${this.supportedLanguages[this.currentLanguage].name}</span>
        <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 8L2 4h8L6 8z"/>
        </svg>
      </button>
      <div class="language-dropdown">
        ${Object.entries(this.supportedLanguages)
          .map(
            ([code, info]) => `
          <button class="language-option ${code === this.currentLanguage ? "active" : ""}" 
                  data-lang="${code}" 
                  title="${info.name}">
            <span class="flag">${info.flag}</span>
            <span class="name">${info.name}</span>
          </button>
        `,
          )
          .join("")}
      </div>
    `

    // Insert before auth group
    const authGroup = header.querySelector(".auth-group")
    if (authGroup) {
      header.insertBefore(languageSelector, authGroup)
    } else {
      header.appendChild(languageSelector)
    }

    // Add event listeners
    const toggle = languageSelector.querySelector(".language-toggle")
    const dropdown = languageSelector.querySelector(".language-dropdown")

    toggle.addEventListener("click", (e) => {
      e.stopPropagation()
      dropdown.classList.toggle("show")
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      dropdown.classList.remove("show")
    })

    // Handle language selection
    languageSelector.addEventListener("click", (e) => {
      const option = e.target.closest(".language-option")
      if (option) {
        const lang = option.getAttribute("data-lang")
        this.setLanguage(lang)
        dropdown.classList.remove("show")

        // Update active state
        languageSelector.querySelectorAll(".language-option").forEach((opt) => {
          opt.classList.remove("active")
        })
        option.classList.add("active")
      }
    })
  }

  initialize() {
    // Set initial document language and direction
    document.documentElement.lang = this.currentLanguage
    document.documentElement.dir = this.currentLanguage === "ar" ? "rtl" : "ltr"

    // Initialize language selector
    this.initializeLanguageSelector()

    // Update page content
    this.updatePageContent()

    // Add CSS for language selector
    this.addLanguageSelectorStyles()
  }

  addLanguageSelectorStyles() {
    const style = document.createElement("style")
    style.textContent = `
      .language-selector {
        position: relative;
        margin-right: 16px;
      }

      .language-toggle {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 6px 12px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
        min-width: 120px;
        justify-content: space-between;
      }

      .language-toggle:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
      }

      .current-language {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .dropdown-arrow {
        transition: transform 0.2s ease;
        opacity: 0.7;
      }

      .language-selector.show .dropdown-arrow {
        transform: rotate(180deg);
      }

      .language-dropdown {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        background: rgba(10, 10, 10, 0.95);
        backdrop-filter: blur(24px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 8px;
        min-width: 180px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);
        transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
        z-index: 1000;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      }

      .language-dropdown.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .language-option {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 8px 12px;
        background: none;
        border: none;
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: left;
      }

      .language-option:hover {
        background: rgba(255, 255, 255, 0.08);
        color: rgba(255, 255, 255, 1);
      }

      .language-option.active {
        background: rgba(66, 133, 244, 0.15);
        color: #4285f4;
      }

      .language-option .flag {
        font-size: 16px;
        width: 20px;
        text-align: center;
      }

      .language-option .name {
        flex: 1;
      }

      /* RTL Support */
      [dir="rtl"] .language-selector {
        margin-right: 0;
        margin-left: 16px;
      }

      [dir="rtl"] .language-dropdown {
        right: auto;
        left: 0;
      }

      [dir="rtl"] .language-option {
        text-align: right;
      }

      /* Mobile responsive */
      @media (max-width: 768px) {
        .language-selector {
          margin-right: 8px;
        }

        .language-toggle {
          min-width: 100px;
          padding: 6px 10px;
          font-size: 13px;
        }

        .language-dropdown {
          min-width: 160px;
        }

        [dir="rtl"] .language-selector {
          margin-left: 8px;
        }
      }

      @media (max-width: 480px) {
        .language-toggle .current-language .name {
          display: none;
        }

        .language-toggle {
          min-width: 60px;
        }
      }
    `
    document.head.appendChild(style)
  }
}

// Initialize translation manager when DOM is loaded
let translationManager

document.addEventListener("DOMContentLoaded", () => {
  translationManager = new TranslationManager()
  translationManager.initialize()

  // Make it globally available
  window.translationManager = translationManager
})

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = TranslationManager
}
