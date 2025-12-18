import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: "Systems Online. I am Nexus Support. How can we help translate your vision into a digital reality?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [avatarState, setAvatarState] = useState<'idle' | 'talking'>('idle');

  // Lip Sync Animation Loop
  useEffect(() => {
    let interval: any;
    if (isSpeaking) {
      interval = setInterval(() => {
        setAvatarState(prev => prev === 'idle' ? 'talking' : 'idle');
      }, 150); // Swap every 150ms for talking effect
    } else {
      setAvatarState('idle');
    }
    return () => clearInterval(interval);
  }, [isSpeaking]);


  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null); // Using any because SpeechRecognition types are tricky in React 18

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        handleSend(null, transcript); // Auto-send when voice is detected
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Detect if text is primarily Arabic
  const isArabicText = (text: string): boolean => {
    // Count Arabic characters (Arabic Unicode range: 0600-06FF, 0750-077F, 08A0-08FF)
    const arabicChars = text.match(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/g);
    const arabicCount = arabicChars ? arabicChars.length : 0;
    // If more than 30% of non-space characters are Arabic, treat as Arabic
    const totalChars = text.replace(/\s/g, '').length;
    return totalChars > 0 && arabicCount / totalChars > 0.3;
  };

  // Clean text for speech (remove markdown formatting and special characters)
  const cleanTextForSpeech = (text: string): string => {
    return text
      // Remove markdown bold/italic markers
      .replace(/\*\*([^*]+)\*\*/g, '$1')  // **bold** -> bold
      .replace(/\*([^*]+)\*/g, '$1')      // *italic* -> italic
      .replace(/__([^_]+)__/g, '$1')      // __bold__ -> bold
      .replace(/_([^_]+)_/g, '$1')        // _italic_ -> italic
      // Remove markdown headers
      .replace(/#{1,6}\s*/g, '')
      // Remove markdown links but keep text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      // Remove bullet points and numbered lists
      .replace(/^[\s]*[-•*]\s*/gm, '')
      .replace(/^[\s]*\d+\.\s*/gm, '')
      // Remove emojis
      .replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')
      // Remove special characters that shouldn't be spoken but keep Arabic/English letters, numbers, and basic punctuation
      .replace(/[`~@#$%^&()_+=[\]{}|\\<>/]/g, '')
      // Normalize multiple spaces
      .replace(/\s+/g, ' ')
      .trim();
  };

  const speak = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    // Clean the text for natural speech
    const cleanedText = cleanTextForSpeech(text);
    if (!cleanedText) return;

    // Detect if the text is Arabic
    const isArabic = isArabicText(cleanedText);

    const utterance = new SpeechSynthesisUtterance(cleanedText);
    const voices = window.speechSynthesis.getVoices();

    if (isArabic) {
      // Find an Arabic voice
      const arabicVoice = voices.find(v => v.lang.startsWith('ar')) ||
        voices.find(v => v.name.toLowerCase().includes('arabic')) ||
        voices[0];
      if (arabicVoice) utterance.voice = arabicVoice;
      utterance.lang = 'ar-SA';  // Arabic (Saudi Arabia) or ar-EG for Egyptian
    } else {
      // Find an English voice
      const englishVoice = voices.find(v => v.name.includes('Google US English')) ||
        voices.find(v => v.name.includes('Microsoft Mark')) ||
        voices.find(v => v.lang.startsWith('en')) ||
        voices[0];
      if (englishVoice) utterance.voice = englishVoice;
      utterance.lang = 'en-US';
    }

    utterance.pitch = 1;
    utterance.rate = isArabic ? 1.0 : 1.1;  // Slightly slower for Arabic

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      // Stop speaking if listening starts
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleSend = async (e?: React.FormEvent | null, textOverride?: string) => {
    if (e) e.preventDefault();
    const textToSend = textOverride || input;

    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Prepare history for API (converting internal type to API type)
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToGemini(userMsg.text, history);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      setMessages(prev => [...prev, botMsg]);
      speak(responseText); // Auto-speak response
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Error connecting to neural network."
      };
      setMessages(prev => [...prev, errorMsg]);
      speak("Error connecting to neural network.");
    } finally {
      setLoading(false);
    }
  };

  // Add custom styles for the lip-sync animation
  const styles = `
    @keyframes talk {
      0% { transform: scaleY(0.1); }
      20% { transform: scaleY(1); }
      40% { transform: scaleY(0.4); }
      60% { transform: scaleY(0.8); }
      80% { transform: scaleY(0.2); }
      100% { transform: scaleY(0.1); }
    }
    .speaking-mouth {
      animation: talk 0.3s infinite ease-in-out;
    }
    @keyframes scan {
      0% { top: 0%; }
      100% { top: 100%; }
    }
  `;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <style>{styles}</style>
      {/* Chat Window */}
      {isOpen && (
        <div className="glass-card w-80 md:w-96 h-[600px] mb-4 rounded-xl flex flex-col overflow-hidden shadow-2xl shadow-brand-primary/20 border-brand-primary/30 border">

          {/* Avatar Hologram Header */}
          <div className="relative h-48 bg-black border-b border-brand-primary/30 overflow-hidden shrink-0">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 243, 255, .3) 25%, rgba(0, 243, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 243, 255, .3) 75%, rgba(0, 243, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 243, 255, .3) 25%, rgba(0, 243, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 243, 255, .3) 75%, rgba(0, 243, 255, .3) 76%, transparent 77%, transparent)', backgroundSize: '30px 30px' }}></div>

            {/* Avatar Image Swapper */}
            <div className="absolute inset-x-0 bottom-0 top-4 flex justify-center items-end">
              <div className="relative w-32 h-40">
                <img
                  src={avatarState === 'idle' ? "/avatars/nexus_idle.png" : "/avatars/nexus_talking.png"}
                  alt="Nexus Avatar"
                  className="w-full h-full object-cover rounded-t-xl opacity-90 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-opacity duration-75"
                />

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-2 w-full animate-[scan_2s_linear_infinite] opacity-30 pointer-events-none"></div>
              </div>
            </div>

            {/* Header Controls Overlay */}
            <div className="absolute top-2 right-2 flex gap-2 z-10">
              {isSpeaking && (
                <button onClick={() => { window.speechSynthesis.cancel(); setIsSpeaking(false); }} className="bg-black/50 p-1.5 rounded hover:bg-red-500/20 text-white/50 hover:text-white transition-colors">
                  <i className="fa-solid fa-volume-xmark"></i>
                </button>
              )}
              <button onClick={toggleChat} className="bg-black/50 p-1.5 rounded hover:bg-white/10 text-white/50 hover:text-white transition-colors">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40 backdrop-blur-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 text-sm font-mono leading-relaxed ${msg.role === 'user'
                    ? 'bg-brand-primary/20 text-white border border-brand-primary/30'
                    : 'bg-white/5 text-gray-200 border border-white/10'
                    }`}
                >
                  {/* Bot Icon for model messages */}
                  {msg.role === 'model' && <i className="fa-solid fa-robot mr-2 text-brand-primary text-xs"></i>}
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-brand-primary text-xs p-2 rounded animate-pulse font-mono border border-white/10">
                  <i className="fa-solid fa-microchip mr-2 animate-spin"></i> Processing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={(e) => handleSend(e)} className="p-3 bg-brand-dark/95 border-t border-white/10">
            <div className="relative flex gap-2">
              <button
                type="button"
                onClick={toggleListening}
                className={`w-10 flex items-center justify-center rounded border transition-all ${isListening
                  ? 'bg-red-500/20 border-red-500 text-red-500 animate-pulse'
                  : 'bg-black/50 border-gray-600 text-brand-primary hover:border-brand-primary'
                  }`}
              >
                <i className={`fa-solid ${isListening ? 'fa-microphone-lines' : 'fa-microphone'}`}></i>
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isListening ? "Listening..." : "Ask Nexus..."}
                className="flex-1 bg-black/50 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-primary transition-colors font-mono placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-10 h-full flex items-center justify-center text-brand-primary hover:text-white transition-colors disabled:opacity-50"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`${isOpen ? 'bg-gray-800' : 'bg-brand-primary'
          } text-black w-16 h-16 rounded-full shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-110 transition-all duration-300 flex items-center justify-center group relative border-2 border-white/10`}
      >
        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-brand-secondary rounded-full animate-ping"></span>
        )}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-brand-secondary rounded-full"></span>
        )}

        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-headset'} text-2xl ${isOpen ? 'text-white' : 'text-black'}`}></i>
      </button>
    </div>
  );
};

export default AIChatBot;