import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { GoogleGenAI } from "@google/genai";

// Company data for system prompt
const PROJECTS = [
    {
        id: 'branded-campaign-game',
        title: 'Ramadan Brand Activation Game',
        category: 'Game Dev',
        company: 'Fashion Brand Campaign',
        description: 'Web-based mobile game for a major fashion brand\'s Ramadan campaign. Achieved 150K+ plays and 45% engagement rate.',
    },
    {
        id: 'serious-training-game',
        title: 'Corporate Safety Training Simulator',
        category: 'Game Dev',
        company: 'Industrial Training Client',
        description: 'Gamified safety training experience for a manufacturing company. Reduced training time by 60%.',
    },
    {
        id: 'localization-project',
        title: 'MENA Localization: Adventure RPG',
        category: 'Game Dev',
        company: 'Western Game Publisher',
        description: 'Complete culturalization and localization of a Western RPG for MENA markets.',
    },
    {
        id: 'agency-partnership',
        title: 'E-commerce Loyalty Game Platform',
        category: 'Game Dev',
        company: 'Marketing Agency Partnership',
        description: 'White-label game platform developed for a marketing agency.',
    }
];

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
${JSON.stringify(PROJECTS)}

**Interaction Rules:**
1. **Be Company-Focused:** Always refer to Seqed Games as "we" or "the company", never mention individual team members by name.
2. **Be Specific:** When asked about capabilities, reference our services, skills, and projects from the data above.
3. **Be Concise:** Keep answers punchy and professional (under 100 words), unless asked to elaborate.
4. **Tone:** Professional, confident, slightly enthusiastic (tech-savvy), and welcoming to potential clients.
5. **Region Focus:** Emphasize our MENA region specialization when relevant.
`;

interface ChatMessage {
    role: 'user' | 'model';
    parts: { text: string }[];
}

interface RequestBody {
    message: string;
    history: ChatMessage[];
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" }),
        };
    }

    // CORS headers
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    };

    try {
        // Get API key from environment (server-side, never exposed to client)
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error("GEMINI_API_KEY is not set in environment variables");
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: "API key not configured" }),
            };
        }

        // Parse request body
        const body: RequestBody = JSON.parse(event.body || "{}");
        const { message, history = [] } = body;

        if (!message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: "Message is required" }),
            };
        }

        // Initialize Gemini client
        const client = new GoogleGenAI({ apiKey });

        // Convert history to the correct format
        const chatHistory = history.map((msg) => ({
            role: msg.role,
            parts: msg.parts.map((p) => ({ text: p.text })),
        }));

        // Create chat with system instruction and history
        const chat = client.chats.create({
            model: "gemini-2.5-flash",
            config: {
                systemInstruction: {
                    parts: [{ text: SYSTEM_INSTRUCTION }],
                },
            },
            history: chatHistory,
        });

        // Send message
        const result = await chat.sendMessage({ message });
        const responseText = result.text || "I'm having trouble accessing my memory banks right now.";

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ response: responseText }),
        };
    } catch (error: any) {
        console.error("Gemini API Error:", error);

        let errorMessage = "An error occurred while processing your request.";

        if (error?.message?.includes("API key")) {
            errorMessage = "API key configuration error.";
        } else if (error?.message?.includes("quota") || error?.message?.includes("limit")) {
            errorMessage = "API quota exceeded. Please try again later.";
        } else if (error?.message?.includes("network") || error?.message?.includes("fetch")) {
            errorMessage = "Network error. Please try again.";
        }

        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: errorMessage }),
        };
    }
};

export { handler };
