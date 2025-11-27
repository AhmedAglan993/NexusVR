import React from 'react';
import { PortfolioItem } from '../types';

const items: PortfolioItem[] = [
  {
    id: 1,
    client: 'TechGiant Corp',
    title: 'Global Leadership Summit',
    description: 'A 500-person synchronous VR networking event.',
    image: 'https://picsum.photos/id/48/800/600',
  },
  {
    id: 2,
    client: 'FinServe Bank',
    title: 'Cybersecurity Escape Room',
    description: 'Gamified training simulation for security protocols.',
    image: 'https://picsum.photos/id/60/800/600',
  },
  {
    id: 3,
    client: 'AutoMotive Inc',
    title: 'Virtual Showroom Launch',
    description: 'High-fidelity vehicle configurator activation.',
    image: 'https://picsum.photos/id/1/800/600',
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-4">Selected Works</h2>
            <p className="text-gray-400 text-lg">See how we've helped world-class organizations.</p>
          </div>
          <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors">
            View All Projects &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl bg-zinc-900 aspect-[4/3]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                  {item.client}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
