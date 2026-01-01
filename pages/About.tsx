
import React from 'react';
import { Page } from '../types';

const About: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8">We build the <span className="gradient-text">engines</span> of modern business.</h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Zentyq was founded on a simple premise: that software should be beautiful, reliable, and fundamentally transformational. We aren't just a development shop; we are a strategic technology partner for visionaries.
          </p>
        </div>

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <div className="bg-slate-900/30 p-10 rounded-3xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-400">
              To empower organizations by building robust digital infrastructure that facilitates growth, fosters innovation, and delivers exceptional user value.
            </p>
          </div>
          <div className="bg-slate-900/30 p-10 rounded-3xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-400">
              To be the global benchmark for high-performance software engineering and human-centric design, setting the pace for the next digital revolution.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Quality First', desc: 'We never compromise on the integrity of our code or design.' },
              { title: 'Relentless Innovation', desc: 'Staying at the bleeding edge of tech is our default state.' },
              { title: 'Radical Empathy', desc: 'We understand your business as if it were our own.' },
              { title: 'Accountability', desc: 'We take full ownership of the outcomes we produce.' },
            ].map(val => (
              <div key={val.title} className="p-6 border-l-2 border-indigo-500 bg-slate-900/20">
                <h4 className="text-white font-bold mb-3">{val.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="py-20 border-t border-slate-900">
          <h2 className="text-3xl font-bold text-white mb-12">Industries We Serve</h2>
          <div className="flex flex-wrap gap-4">
            {['FinTech', 'HealthTech', 'E-Commerce', 'SaaS', 'EdTech', 'Real Estate', 'Logistics', 'Energy'].map(ind => (
              <span key={ind} className="px-6 py-3 bg-slate-900 rounded-full border border-slate-800 text-slate-300 font-medium">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
