
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to API
  };

  return (
    <div className="w-full pt-32 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8">Let's build <span className="gradient-text">together.</span></h1>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Fill out the form or reach out via email to start the conversation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-500 flex-shrink-0">
                  📧
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wider">Email Us</h4>
                  <p className="text-indigo-400 font-medium">hello@zentyq.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-500 flex-shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wider">Call Us</h4>
                  <p className="text-indigo-400 font-medium">+1 (888) 123-ZENY</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-500 flex-shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wider">Global HQ</h4>
                  <p className="text-slate-400 text-sm">71-75 Shelton Street, Covent Garden<br />London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/30 border border-slate-800 p-8 md:p-12 rounded-3xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center text-4xl mb-6 animate-bounce">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Received!</h3>
                <p className="text-slate-400">Our team will get back to you within 24 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-indigo-400 hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                    <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Service Interested In</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white appearance-none">
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI Integration</option>
                    <option>UI/UX Design</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Project Brief</label>
                  <textarea required rows={5} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white" placeholder="Tell us about your project goals..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-500/20">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
