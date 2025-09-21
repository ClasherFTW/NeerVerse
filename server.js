// server.js - Complete Backend for Hazard Alert Tracker
const express = require("express")
const cors = require("cors")
const path = require("path")
const rateLimit = require("express-rate-limit")
require("dotenv").config()
const fetch = require("node-fetch")

const app = express()
const PORT = process.env.PORT || 3000

// Twitter API Configuration
const TWITTER_BEARER_TOKEN =
  "AAAAAAAAAAAAAAAAAAAAAKwt4QEAAAAAAr8WEjJnQLAG5jqyxyhEkDL7qcM%3DhuptpWfBRXVYejNaWLfhYCPHAIIZTQgQhIR8L0fSLE2lwXVWFQ"
const TWITTER_API_KEY = "jkgCFnTlUrycdVGbFo9C33xMA"
const TWITTER_API_SECRET = "Xrw0r0UFHA3MO1Ya8ofEat5zA9xnx6DtssNsr2KH8K372uIDt2"

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
})
app.use("/api/", limiter)

// Hazard keywords for Twitter search
const HAZARD_KEYWORDS = [
  "flood warning",
  "earthquake alert",
  "tsunami warning",
  "hurricane alert",
  "wildfire emergency",
  "tornado warning",
  "severe weather",
  "emergency alert",
  "evacuation notice",
  "disaster alert",
  "safety warning",
  "hazard report",
  "breaking emergency",
  "urgent warning",
  "cyclone alert",
  "landslide warning",
  "storm warning",
  "blizzard alert",
  "heat wave warning",
  "drought emergency",
]

// Cache for storing recent tweets
const tweetCache = {
  data: [],
  lastUpdated: null,
  cacheExpiry: 5 * 60 * 1000, // 5 minutes
}

// Helper function to make Twitter API calls
async function fetchFromTwitter(url, options = {}) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Twitter API Error:", response.status, errorData)
      throw new Error(`Twitter API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error calling Twitter API:", error)
    throw error
  }
}

// Function to process and filter tweets
function processTweets(data) {
  if (!data.data || data.data.length === 0) {
    return []
  }

  const users = {}
  if (data.includes && data.includes.users) {
    data.includes.users.forEach((user) => {
      users[user.id] = user
    })
  }

  return data.data
    .map((tweet) => {
      const user = users[tweet.author_id] || { name: "Unknown", username: "unknown" }

      // Extract hashtags
      const hashtags = []
      if (tweet.entities && tweet.entities.hashtags) {
        hashtags.push(...tweet.entities.hashtags.map((tag) => tag.text))
      }

      return {
        id: tweet.id,
        text: tweet.text,
        username: user.username,
        name: user.name,
        created_at: tweet.created_at,
        hashtags: hashtags,
        retweet_count: tweet.public_metrics?.retweet_count || 0,
        like_count: tweet.public_metrics?.like_count || 0,
        verified: user.verified || false,
      }
    })
    .filter((tweet) => {
      // Filter out retweets and replies to focus on original content
      return !tweet.text.startsWith("RT @") && !tweet.text.startsWith("@")
    })
    .sort((a, b) => {
      // Sort by engagement (retweets + likes) and recency
      const aEngagement = a.retweet_count + a.like_count
      const bEngagement = b.retweet_count + b.like_count
      const aTime = new Date(a.created_at).getTime()
      const bTime = new Date(b.created_at).getTime()

      // Prioritize recent tweets with high engagement
      return bEngagement + bTime / 1000000 - (aEngagement + aTime / 1000000)
    })
}

// Main API endpoint to fetch hazard tweets
app.get("/api/tweets/hazards", async (req, res) => {
  try {
    // Check cache first
    const now = Date.now()
    if (tweetCache.lastUpdated && now - tweetCache.lastUpdated < tweetCache.cacheExpiry && tweetCache.data.length > 0) {
      return res.json({
        success: true,
        tweets: tweetCache.data,
        cached: true,
        lastUpdated: tweetCache.lastUpdated,
      })
    }

    if (!TWITTER_BEARER_TOKEN) {
      const mockTweets = [
        {
          id: "1",
          text: "MOCK DATA: Severe weather warning issued for coastal areas. Please stay indoors and avoid unnecessary travel.",
          username: "WeatherService",
          name: "National Weather Service",
          created_at: new Date().toISOString(),
          hashtags: ["SevereWeather", "Warning"],
          retweet_count: 45,
          like_count: 123,
          verified: true,
        },
        {
          id: "2",
          text: "MOCK DATA: Earthquake alert - 5.2 magnitude detected. No tsunami threat at this time.",
          username: "EarthquakeAlert",
          name: "Earthquake Monitor",
          created_at: new Date(Date.now() - 300000).toISOString(),
          hashtags: ["Earthquake", "Alert"],
          retweet_count: 78,
          like_count: 234,
          verified: true,
        },
      ]

      tweetCache.data = mockTweets
      tweetCache.lastUpdated = now

      return res.json({
        success: true,
        tweets: mockTweets,
        cached: false,
        lastUpdated: now,
        total: mockTweets.length,
        mock: true,
        message: "Using mock data - Twitter API token not configured",
      })
    }

    // Build search query
    const query = HAZARD_KEYWORDS.map((keyword) => `"${keyword}"`).join(" OR ")
    const encodedQuery = encodeURIComponent(`(${query}) -is:retweet lang:en`)

    // Twitter API v2 search endpoint
    const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodedQuery}&max_results=20&tweet.fields=created_at,author_id,public_metrics,entities&expansions=author_id&user.fields=name,username,verified`

    console.log("Fetching tweets from Twitter API...")
    const data = await fetchFromTwitter(url)

    // Process tweets
    const processedTweets = processTweets(data)

    // Update cache
    tweetCache.data = processedTweets
    tweetCache.lastUpdated = now

    console.log(`Fetched ${processedTweets.length} hazard tweets`)

    res.json({
      success: true,
      tweets: processedTweets,
      cached: false,
      lastUpdated: now,
      total: processedTweets.length,
    })
  } catch (error) {
    console.error("Error in /api/tweets/hazards:", error)

    // Return cached data if available, even if expired
    if (tweetCache.data.length > 0) {
      res.json({
        success: true,
        tweets: tweetCache.data,
        cached: true,
        lastUpdated: tweetCache.lastUpdated,
        warning: "Using cached data due to API error",
      })
    } else {
      const fallbackTweets = [
        {
          id: "fallback1",
          text: "FALLBACK DATA: Unable to connect to Twitter API. This is sample hazard alert data.",
          username: "SystemAlert",
          name: "System Alert",
          created_at: new Date().toISOString(),
          hashtags: ["SystemAlert"],
          retweet_count: 0,
          like_count: 0,
          verified: false,
        },
      ]

      res.json({
        success: false,
        error: "Failed to fetch tweets",
        message: error.message,
        tweets: fallbackTweets,
        fallback: true,
      })
    }
  }
})

// API endpoint to get specific tweets by location or keyword
app.get("/api/tweets/search", async (req, res) => {
  try {
    const { q: searchQuery, location } = req.query

    if (!searchQuery && !location) {
      return res.status(400).json({
        success: false,
        error: "Search query or location parameter required",
      })
    }

    let query = searchQuery || ""
    if (location) {
      query += ` (${location} OR near:${location})`
    }

    // Add hazard context to the search
    const hazardQuery = `(${query}) (${HAZARD_KEYWORDS.slice(0, 5).join(" OR ")}) -is:retweet lang:en`
    const encodedQuery = encodeURIComponent(hazardQuery)

    const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodedQuery}&max_results=15&tweet.fields=created_at,author_id,public_metrics,entities&expansions=author_id&user.fields=name,username,verified`

    const data = await fetchFromTwitter(url)
    const processedTweets = processTweets(data)

    res.json({
      success: true,
      tweets: processedTweets,
      query: searchQuery,
      location: location,
      total: processedTweets.length,
    })
  } catch (error) {
    console.error("Error in /api/tweets/search:", error)
    res.status(500).json({
      success: false,
      error: "Failed to search tweets",
      message: error.message,
      tweets: [],
    })
  }
})

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "Server is running",
    timestamp: new Date().toISOString(),
    cache: {
      tweets: tweetCache.data.length,
      lastUpdated: tweetCache.lastUpdated,
    },
    config: {
      hasTwitterToken: !!TWITTER_BEARER_TOKEN,
      nodeEnv: process.env.NODE_ENV || "development",
    },
  })
})

// Clear cache endpoint (for development/admin)
app.post("/api/cache/clear", (req, res) => {
  tweetCache.data = []
  tweetCache.lastUpdated = null

  res.json({
    success: true,
    message: "Cache cleared",
  })
})

// Serve the frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err)
  res.status(500).json({
    success: false,
    error: "Internal server error",
    message: err.message,
  })
})

// Handle all other routes - serve index.html for non-API routes, 404 for API routes
app.use((req, res) => {
  // Serve index.html for any non-API routes (SPA routing)
  if (!req.path.startsWith("/api/")) {
    res.sendFile(path.join(__dirname, "public", "index.html"))
  } else {
    res.status(404).json({
      success: false,
      error: "API endpoint not found",
    })
  }
})

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Hazard Alert Tracker Backend running on port ${PORT}`)
  console.log(
    `📊 Dashboard: ${process.env.NODE_ENV === "production" ? "https://your-app-name.onrender.com" : `http://localhost:${PORT}`}`,
  )
  console.log(
    `🔗 API Health: ${process.env.NODE_ENV === "production" ? "https://your-app-name.onrender.com" : `http://localhost:${PORT}`}/api/health`,
  )

  if (!TWITTER_BEARER_TOKEN) {
    console.warn("⚠️  WARNING: TWITTER_BEARER_TOKEN not set. Please add it to your .env file")
  } else {
    console.log("✅ Twitter API configured")
  }
})

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down server...")
  process.exit(0)
})

module.exports = app
