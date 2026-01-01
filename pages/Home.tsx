
import React from 'react';
import { Page } from '../types';
import { SERVICES, PROJECTS, TESTIMONIALS, FAQS } from '../constants';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden tech-grid-bg">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                ✨ Innovation driven development
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Engineering <span className="gradient-text">Excellence</span> for the Future.
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                Zentyq is a boutique software development agency. We architect high-performance web applications, mobile experiences, and AI solutions that scale with your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => setCurrentPage(Page.Contact)}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 group"
                >
                  Start Your Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button 
                  onClick={() => setCurrentPage(Page.Portfolio)}
                  className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-full font-bold transition-all"
                >
                  View Our Portfolio
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="glass-effect p-4 rounded-2xl relative z-10">
                <img 
                  src="https://picsum.photos/seed/tech/800/600" 
                  alt="Zentyq Dashboard Mockup" 
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-10 -right-10 glass-effect p-6 rounded-2xl animate-bounce duration-[3000ms]">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-xs text-slate-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Global Clients', value: '150+' },
              { label: 'Expert Engineers', value: '45+' },
              { label: 'Projects Delivered', value: '300+' },
              { label: 'Years Experience', value: '12+' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Quick Look */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Core Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We provide end-to-end technical solutions designed to give your business a competitive edge in a digital-first world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map(service => (
              <div key={service.id} className="glass-effect p-8 rounded-2xl hover:bg-slate-900/50 transition-all border border-slate-800 hover:border-indigo-500/50 group cursor-pointer" onClick={() => setCurrentPage(Page.Services)}>
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="text-indigo-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={() => setCurrentPage(Page.Services)}
              className="text-white font-medium underline decoration-indigo-500 underline-offset-8 hover:text-indigo-400 transition-all"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for results.</h2>
              <p className="text-slate-400">
                A selection of high-impact digital products designed and engineered by the Zentyq team.
              </p>
            </div>
            <button 
              onClick={() => setCurrentPage(Page.Portfolio)}
              className="px-8 py-3 bg-slate-900 border border-slate-800 text-white rounded-full font-semibold hover:bg-slate-800 transition-all"
            >
              See Case Studies
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {PROJECTS.slice(0, 2).map(project => (
              <div key={project.id} className="group cursor-pointer overflow-hidden rounded-2xl" onClick={() => setCurrentPage(Page.Portfolio)}>
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <img src={project.image} alt={project.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex gap-2 mb-3">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] text-white uppercase font-bold tracking-widest">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Why leading brands partner with Zentyq.</h2>
              <div className="space-y-8">
                {[
                  { title: 'Technical Superiority', desc: 'We don\'t just write code; we architect systems that are future-proofed against rapid tech shifts.' },
                  { title: 'Business Mindset', desc: 'Our engineers think like product owners, ensuring every line of code serves a business KPI.' },
                  { title: 'Radical Transparency', desc: 'You\'ll always know exactly where your project stands with daily stand-ups and direct dev access.' },
                  { title: 'AI Integration Leaders', desc: 'We bridge the gap between legacy operations and modern intelligence.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-500 font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img src="https://picsum.photos/seed/team/600/800" alt="Zentyq Team" className="rounded-3xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 glass-effect p-8 rounded-2xl max-w-xs">
                  <p className="text-slate-200 italic mb-4">"Zentyq isn't just a vendor; they are the engineering heartbeat of our startup."</p>
                  <div className="text-sm font-bold text-white">— Michael Ross, Founder of StealthHealth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Client Stories</h2>
            <p className="text-slate-400">Trusted by innovators and enterprises worldwide.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-slate-900/30 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-indigo-500 text-4xl mb-6">“</div>
                  <p className="text-slate-300 italic mb-8 leading-relaxed">
                    {t.feedback}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-indigo-600/30" />
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}, {t.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Common Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-slate-800 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-slate-900/20 group-hover:bg-slate-900/40 transition-all">
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    <span className="text-indigo-500 transition-transform group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 text-slate-400 leading-relaxed border-t border-slate-800 bg-slate-950/50">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-8">Ready to architect your success?</h2>
          <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto">
            Schedule a free consultation with our technical architects and let's discuss how Zentyq can bring your vision to life.
          </p>
          <button 
            onClick={() => setCurrentPage(Page.Contact)}
            className="px-10 py-5 bg-white text-indigo-600 hover:bg-slate-100 rounded-full font-bold text-xl transition-all shadow-2xl shadow-black/20"
          >
            Schedule a Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
