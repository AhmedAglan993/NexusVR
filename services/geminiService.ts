import { GoogleGenAI } from "@google/genai/web";
import { PROJECTS, SKILLS } from "../constants";

// Construct a system prompt based on the company data
const SYSTEM_INSTRUCTION = `
You are "Nexus", an advanced AI assistant for **Seqed Games**, a game development company.

**PRIMARY GOAL:**
To provide information about Seqed Games' services, capabilities, projects, and expertise. Help potential clients understand what the company does and how we can help with their game development needs.

**COMPANY INFORMATION:**

**About Seqed Games:**
Seqed Games is a specialized game development studio founded in 2025, with operations in Cairo, Egypt and Riyadh, Saudi Arabia. We focus on building games for brands, agencies, and businesses in the MENA region. We create games that drive engagement and deliver real business results.

**Core Services:**
1. **Branded Games & Advergames:** We create engaging games that promote brands, products, or campaigns. From web-based advergames to mobile brand experiences that drive real engagement and conversions.

2. **Serious Games & Training:** Gamified training and educational experiences that people actually want to use. We build serious games for corporate training, education, and skill development.

3. **Game Development for Agencies:** We partner with marketing agencies and studios as their dedicated game development team. From concept to launch, we handle the technical execution.

4. **MENA Localization & Culturalization:** Adapt Western games for MENA markets with cultural sensitivity. We don't just translate—we culturally adapt games for KSA, UAE, Egypt, and beyond.

**Company Stats:**
- Games built for brands and agencies
- MENA Region Focused
- Results-driven development

**Portfolio Projects:**
Our work showcases games built for brands, agencies, and businesses:
PROJECTS ARRAY: ${JSON.stringify(PROJECTS)}

**Contact Information:**
- Email: contact@seqedgames.com
- LinkedIn: https://www.linkedin.com/company/seqedgames

**Interaction Rules:**
1. **Be Company-Focused:** Always refer to Seqed Games as "we" or "the company", never mention individual team members by name.
2. **Be Specific:** When asked about capabilities, reference our services, skills, and projects from the data above.
3. **Be Concise:** Keep answers punchy and professional (under 100 words), unless asked to elaborate.
4. **Tone:** Professional, confident, slightly enthusiastic (tech-savvy), and welcoming to potential clients.
5. **Region Focus:** Emphasize our MENA region specialization when relevant.
`;

let client: GoogleGenAI | null = null;

export const getGeminiClient = (): GoogleGenAI => {
  if (!client) {
    // Get API key from process.env (replaced by Vite define at build time)
    // This works for both local (.env.local) and production (Netlify/Vercel env vars)
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    
    // Debug logging
    console.log("Checking for API key...");
    console.log("process.env.API_KEY:", process.env.API_KEY ? `Found (length: ${process.env.API_KEY.length})` : "Not found");
    console.log("process.env.GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? `Found (length: ${process.env.GEMINI_API_KEY.length})` : "Not found");
    
    if (!apiKey || apiKey === 'undefined' || apiKey === 'null' || apiKey === '') {
      console.error("API_KEY is missing from environment variables");
      console.error("For LOCAL development:");
      console.error("1. Create .env.local file with GEMINI_API_KEY=your_key");
      console.error("2. Restart the dev server (npm run dev)");
      console.error("For PRODUCTION (Netlify/Vercel):");
      console.error("1. Set GEMINI_API_KEY in your hosting platform's Environment Variables");
      console.error("2. Trigger a new deployment");
      throw new Error("API Key missing. Check console for setup instructions.");
    }
    
    console.log("Initializing Gemini client with API key (length:", apiKey.length, ")");
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model', parts: [{ text: string }] }[]): Promise<string> => {
  try {
    const ai = getGeminiClient();

    // Convert history to the correct Content[] format
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: msg.parts.map(p => ({ text: p.text }))
    }));

    // Create chat with system instruction and history
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        }
      },
      history: chatHistory
    });

    // Send message - sendMessage accepts SendMessageParameters with message property
    const result = await chat.sendMessage({ message });

    // Extract text from response using the .text getter
    return result.text || "I'm having trouble accessing my memory banks right now.";
  } catch (error: any) {
    console.error("Gemini Error Details:", error);
    console.error("Error message:", error?.message);
    console.error("Error stack:", error?.stack);
    
    // Provide more specific error messages
    if (error?.message?.includes("API key")) {
      return "API key configuration error. Please check your environment variables.";
    }
    if (error?.message?.includes("quota") || error?.message?.includes("limit")) {
      return "API quota exceeded. Please try again later.";
    }
    if (error?.message?.includes("network") || error?.message?.includes("fetch")) {
      return "Network error. Please check your internet connection and try again.";
    }
    
    // Return the actual error message for debugging
    return `Connection error: ${error?.message || "Unknown error"}. Please check the console for details.`;
  }
};