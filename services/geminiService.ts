// This service now calls the Netlify serverless function instead of Gemini directly
// The API key is kept secure on the server side

interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

interface ChatResponse {
  response?: string;
  error?: string;
}

export const sendMessageToGemini = async (
  message: string,
  history: ChatMessage[]
): Promise<string> => {
  try {
    // Call our serverless function instead of Gemini directly
    const response = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, history }),
    });

    if (!response.ok) {
      const errorData: ChatResponse = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data: ChatResponse = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data.response || "I'm having trouble accessing my memory banks right now.";
  } catch (error: any) {
    console.error("Chat API Error:", error);

    // Provide user-friendly error messages
    if (error?.message?.includes("Failed to fetch") || error?.message?.includes("NetworkError")) {
      return "Network error. Please check your internet connection and try again.";
    }

    if (error?.message?.includes("API key")) {
      return "API configuration error. Please contact support.";
    }

    if (error?.message?.includes("quota") || error?.message?.includes("limit")) {
      return "API quota exceeded. Please try again later.";
    }

    return `Connection error: ${error?.message || "Unknown error"}. Please try again.`;
  }
};

// For backward compatibility - no longer needed but keeps the interface
export const getGeminiClient = () => {
  console.warn("getGeminiClient is deprecated. API calls now go through serverless function.");
  return null;
};