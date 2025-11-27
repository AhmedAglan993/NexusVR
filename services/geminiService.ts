import { GoogleGenAI, Type, Schema } from "@google/genai";
import { VRRecommendation, PlannerFormData } from "../types";

const apiKey = process.env.API_KEY || ""; 
// Note: In a real production app, handle missing API key gracefully. 
// Here we assume it is injected as per instructions.

const ai = new GoogleGenAI({ apiKey });

const recommendationSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A catchy title for the suggested VR event package." },
    description: { type: Type.STRING, description: "A compelling marketing description of the event experience." },
    hardware: { type: Type.STRING, description: "Recommended VR hardware (e.g., Quest 3, HTC Vive, custom simulators)." },
    estimatedBudget: { type: Type.STRING, description: "A rough budget estimate range (e.g., $$$, High-End, Economy)." },
    activities: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "List of 3-4 specific VR activities or games included in this package.",
    },
  },
  required: ["title", "description", "hardware", "estimatedBudget", "activities"],
};

export const generateEventPlan = async (data: PlannerFormData): Promise<VRRecommendation | null> => {
  try {
    const prompt = `
      Act as a world-class VR Event Director for NexusVR agency.
      Create a tailored VR event package for a client with the following details:
      - Team Size: ${data.teamSize} people
      - Event Type: ${data.eventType}
      - Primary Goal: ${data.goals}
      - Duration: ${data.duration}

      Suggest a cohesive theme and specific VR experiences that fit these constraints.
      Keep the tone exciting, professional, and futuristic.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: recommendationSchema,
        systemInstruction: "You are an expert VR consultant. You recommend specific, real-world VR software and hardware setups for corporate events.",
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as VRRecommendation;
    }
    return null;
  } catch (error) {
    console.error("Error generating event plan:", error);
    throw error;
  }
};
