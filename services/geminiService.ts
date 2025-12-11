import { GoogleGenAI } from "@google/genai";
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
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables");
      throw new Error("API Key missing");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model', parts: [{ text: string }] }[]): Promise<string> => {
  try {
    const ai = getGeminiClient();

    // We use generateContent for a single turn here for simplicity in this stateless example,
    // but building a chat history context manually allows for the "Chat" feel without persistent session management complexity on frontend.
    // However, the best practice for chat is ai.chats.create. Let's use that.

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "I'm having trouble accessing my memory banks right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection error. Please try again later.";
  }
};