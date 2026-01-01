
import React from 'react';
import { Page } from '../types';
import { SERVICES } from '../constants';

interface ServicesProps {
  setCurrentPage: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  return (
    <div className="w-full pt-32 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Solutions</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From architecture to deployment, we offer a full spectrum of software engineering services designed for the modern era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div key={service.id} id={service.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-col hover:border-indigo-500/50 transition-all">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-auto space-y-6">
                <div>
                  <h4 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map(f => (
                      <li key={f} className="text-slate-300 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">Business Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map(b => (
                      <li key={b} className="text-slate-300 text-sm flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Approach Section */}
        <div className="mt-32 glass-effect p-12 rounded-3xl border border-indigo-500/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Looking for a custom solution?</h2>
              <p className="text-slate-400 mb-8">
                Not every project fits into a box. If you have a complex requirement or a groundbreaking idea that needs specialized expertise, our senior architects are ready to design a custom engagement model for you.
              </p>
              <button 
                onClick={() => setCurrentPage(Page.Contact)}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all"
              >
                Discuss Custom Project
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-[10px] text-slate-500 uppercase">Support</div>
              </div>
              <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 text-center">
                <div className="text-2xl font-bold text-white mb-1">Agile</div>
                <div className="text-[10px] text-slate-500 uppercase">Methodology</div>
              </div>
              <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-[10px] text-slate-500 uppercase">IP Ownership</div>
              </div>
              <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 text-center">
                <div className="text-2xl font-bold text-white mb-1">Global</div>
                <div className="text-[10px] text-slate-500 uppercase">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
