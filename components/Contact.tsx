import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-6">Ready to enter the <br/> <span className="text-cyan-400">Next Dimension?</span></h2>
            <p className="text-gray-400 text-lg mb-12">
              Get in touch to discuss your next team building event, brand activation, or custom development needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-cyan-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <p className="text-gray-400">hello@nexusvr.agency</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-purple-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <p className="text-gray-400">+1 (555) 000-VRVR</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-pink-500 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Studio</h4>
                  <p className="text-gray-400">101 Digital Avenue<br/>San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">First Name</label>
                <input type="text" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                <input type="text" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 outline-none" placeholder="Doe" />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">Email Address</label>
              <input type="email" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 outline-none" placeholder="john@company.com" />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 outline-none" placeholder="Tell us about your event..." />
            </div>

            <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
