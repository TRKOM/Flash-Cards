<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Flashcard Generator with Baby-Friendly Images

An AI-powered flashcard generator that creates interactive flashcards with realistic, baby-friendly images using Google's Gemini AI and Unsplash API.

## Features

- 🤖 **AI-Powered Generation**: Uses Google's Gemini 2.5 Flash model to generate relevant flashcards
- 🖼️ **Baby-Friendly Images**: Automatically fetches safe, appropriate images from Unsplash
- 🎴 **Interactive Cards**: Click to flip between terms and definitions
- 🌙 **Dark/Light Mode**: Automatic theme switching based on system preferences
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Clean, Google-inspired design with smooth animations

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## How It Works

1. Enter a topic (e.g., "Animals", "Colors", "Shapes")
2. AI generates relevant flashcards with definitions
3. Safe, child-appropriate images are automatically fetched
4. Click any card to flip and see the definition
5. Images appear on both sides for better learning

## Image Safety

All images are filtered for child-appropriateness using:
- Unsplash's content filtering
- AI-generated descriptions focused on safe, educational content
- Bright, vibrant styling to appeal to children
