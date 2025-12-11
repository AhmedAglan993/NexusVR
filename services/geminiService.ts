import { GoogleGenAI } from "@google/genai/web";
import { PROJECTS, SKILLS } from "../constants";

// Construct a system prompt based on the company data
const SYSTEM_INSTRUCTION = `
You are "Nexus", an advanced AI assistant for **Seqed XR**, an XR/VR/AR development company.

**PRIMARY GOAL:**
To provide information about Seqed XR's services, capabilities, projects, and expertise. Help potential clients understand what the company does and how we can help with their XR/VR/AR needs.

**COMPANY INFORMATION:**

**About Seqed XR:**
Seqed XR is a specialized XR development studio founded in 2025, with operations in Cairo, Egypt and Riyadh, Saudi Arabia. We focus on the MENA region and build immersive digital experiences with precision and innovation.

**Core Services:**
1. **Culturalized Game Porting:** Expert localization and culturalization for Western games entering the MENA market (KSA, UAE, Egypt). We don't just translate; we adapt games for regional markets.

2. **Interactive Brand Experiences:** We build high-fidelity "Advergames" for web and mobile that turn passive marketing into active engagement and drive user retention.

3. **Rapid MVP Prototyping:** We deliver polished "Vertical Slices" for investors and pre-production validation, helping visualize game ideas in weeks, not months.

**Company Stats:**
- 35+ Experiences Built
- 1M+ Users Engaged
- MENA Region Focused
- 24/7 Expert Support

**Core Competencies:**
SKILLS ARRAY: ${JSON.stringify(SKILLS)}

**Studio Labs Projects:**
These are our technical proofs of concept and R&D showcases:
PROJECTS ARRAY: ${JSON.stringify(PROJECTS)}

**Contact Information:**
- Email: contact@seqedxr.com
- LinkedIn: https://www.linkedin.com/company/seqedxr

**Interaction Rules:**
1. **Be Company-Focused:** Always refer to Seqed XR as "we" or "the company", never mention individual team members by name.
2. **Be Specific:** When asked about capabilities, reference our services, skills, and projects from the data above.
3. **Be Concise:** Keep answers punchy and professional (under 100 words), unless asked to elaborate.
4. **Tone:** Professional, confident, slightly enthusiastic (tech-savvy), and welcoming to potential clients.
5. **Region Focus:** Emphasize our MENA region specialization when relevant.
`;

let client: GoogleGenAI | null = null;

export const getGeminiClient = (): GoogleGenAI => {
  if (!client) {
    // Try multiple ways to get the API key
    // 1. From process.env (replaced by Vite define at build time)
    // 2. From import.meta.env (Vite's native way, requires VITE_ prefix)
    const apiKey = 
      process.env.API_KEY || 
      process.env.GEMINI_API_KEY ||
      (import.meta.env as any).VITE_GEMINI_API_KEY ||
      (import.meta.env as any).GEMINI_API_KEY;
    
    // Debug logging
    console.log("Checking for API key...");
    console.log("process.env.API_KEY:", process.env.API_KEY ? `Found (length: ${process.env.API_KEY.length})` : "Not found");
    console.log("process.env.GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? `Found (length: ${process.env.GEMINI_API_KEY.length})` : "Not found");
    console.log("import.meta.env.VITE_GEMINI_API_KEY:", (import.meta.env as any).VITE_GEMINI_API_KEY ? `Found` : "Not found");
    
    if (!apiKey || apiKey === 'undefined' || apiKey === 'null' || apiKey === '') {
      console.error("API_KEY is missing from environment variables");
      console.error("This usually means:");
      console.error("1. The .env.local file doesn't exist or doesn't contain GEMINI_API_KEY");
      console.error("2. The dev server needs to be restarted after creating/updating .env.local");
      console.error("3. The vite.config.ts define replacement isn't working");
      throw new Error("API Key missing. Please ensure GEMINI_API_KEY is set in .env.local and restart the dev server.");
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

    // Send message - the message should be a PartListUnion (string or Part[])
    const result = await chat.sendMessage(message);

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