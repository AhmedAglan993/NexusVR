import React, { useState } from 'react';
import { Sparkles, Loader2, CheckCircle2, RefreshCcw } from 'lucide-react';
import { generateEventPlan } from '../services/geminiService';
import { PlannerFormData, VRRecommendation } from '../types';

const AIEventPlanner: React.FC = () => {
  const [formData, setFormData] = useState<PlannerFormData>({
    teamSize: 20,
    eventType: 'Team Building',
    goals: 'Communication & Fun',
    duration: '2-3 Hours'
  });
  const [recommendation, setRecommendation] = useState<VRRecommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await generateEventPlan(formData);
      setRecommendation(result);
    } catch (err) {
      setError("Unable to generate a plan at this moment. Please check your API configuration or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-24 bg-black relative overflow-hidden">
        {/* Decorative background for the section */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Input Form */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20 mb-4">
                <Sparkles size={16} />
                <span>Powered by Gemini 2.5</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                AI Event Architect
              </h2>
              <p className="text-gray-400 text-lg">
                Not sure what fits your team? Tell our AI about your requirements, and we'll instantly generate a bespoke VR package suggestion.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Team Size</label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: parseInt(e.target.value) })}
                  className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Event Type</label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                >
                  <option>Team Building</option>
                  <option>Client Entertainment</option>
                  <option>Holiday Party</option>
                  <option>Conference Breakout</option>
                  <option>Training Workshop</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Primary Goal</label>
                <input
                  type="text"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. Improve communication, Just for fun"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                >
                  <option>1 Hour</option>
                  <option>2-3 Hours</option>
                  <option>Half Day</option>
                  <option>Full Day</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" /> Generating Plan...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" /> Generate Experience
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Results */}
          <div className="lg:pl-8">
            {recommendation ? (
              <div className="bg-zinc-900 border border-cyan-500/30 rounded-2xl p-8 relative overflow-hidden animate-fade-in">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Sparkles size={120} />
                </div>
                
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                  {recommendation.title}
                </h3>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <span className="bg-zinc-800 px-2 py-1 rounded text-white">{recommendation.estimatedBudget}</span>
                    <span className="bg-zinc-800 px-2 py-1 rounded text-white">{recommendation.hardware}</span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {recommendation.description}
                </p>

                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                   Suggested Activities
                </h4>
                <ul className="space-y-3 mb-8">
                  {recommendation.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {activity}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setRecommendation(null)}
                  className="text-sm text-gray-500 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <RefreshCcw size={14} /> Generate New Idea
                </button>
              </div>
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-zinc-800 rounded-2xl text-gray-500">
                <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-10 h-10 text-zinc-700" />
                </div>
                <h3 className="text-xl font-medium text-gray-400 mb-2">Waiting for Input</h3>
                <p className="max-w-xs mx-auto">
                  Fill out the form to let our AI architect a perfect VR session for your team.
                </p>
              </div>
            )}
            {error && (
              <div className="mt-4 p-4 bg-red-900/20 border border-red-500/50 text-red-200 rounded-lg">
                {error}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIEventPlanner;
