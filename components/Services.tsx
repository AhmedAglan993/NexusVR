import React from 'react';
import { Users, Rocket, Monitor, Cuboid, Gamepad2, BrainCircuit } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    title: 'Team Building',
    description: 'Collaborative VR puzzle solving and competitive games designed to strengthen team cohesion and communication.'
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
    title: 'Brand Activations',
    description: 'Unforgettable marketing experiences for trade shows and product launches that stop traffic and engage customers.'
  },
  {
    icon: <Monitor className="w-8 h-8 text-pink-500" />,
    title: 'Remote Events',
    description: 'Connect global teams in a shared virtual space. No travel required, just a headset delivered to their door.'
  },
  {
    icon: <Cuboid className="w-8 h-8 text-yellow-400" />,
    title: 'Custom VR Development',
    description: 'Bespoke VR environments and simulations tailored specifically to your company branding and training needs.'
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-green-400" />,
    title: 'Equipment Rental',
    description: 'High-end fleet of Meta Quest 3, HTC Vive, and haptic suits available for short and long-term rental.'
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-blue-400" />,
    title: 'Educational VR',
    description: 'Immersive training modules for hazardous environments, soft skills, and technical procedures.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Immersive Solutions for Modern Problems
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            We don't just provide headsets; we curate full-scale digital realities to achieve your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 transition-all hover:bg-zinc-800/80 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
