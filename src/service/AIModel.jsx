// Import the Generative AI SDK
// In a Node.js / module environment:
import { GoogleGenerativeAI } from "@google/generative-ai";

// In a simple browser script (if using CDN, access via window.GoogleGenerativeAI):
// const GoogleGenerativeAI = window.GoogleGenerativeAI;

// Access your API key (replace with your actual API key)
// IMPORTANT: For production, do NOT expose your API key directly in client-side code.
// Use a backend proxy to securely call the API.
const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
  // For text-only input, use the gemini-pro mode
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro	" });

//console.assert(apiKey.trim() == apiKey, "Key has extra whitespace at the start or end");
//console.assert(apiKey.slice(0, 4) == 'AIza', "Key should start with 'AIza'");
//console.assert(apiKey.length == 39, "Key is not the correct length");

console.log(apiKey);

const generationConfig = {
    temperature: 1,
    maxOutputTokens: 8192,
    topP: 0.95,
    topK: 64,  
    responseMimeType: "application/json", 
}

export const chatSession = model.startChat({
    generationConfig, 
    history: [],
  });