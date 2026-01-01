
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                ZEN<span className="text-indigo-500">TYQ</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering global brands through innovative software development, AI integration, and world-class design. We build the future, today.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'GitHub'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all text-xs">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><button onClick={() => setCurrentPage(Page.About)} className="hover:text-indigo-400 transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage(Page.Portfolio)} className="hover:text-indigo-400 transition-colors">Our Work</button></li>
              <li><button onClick={() => setCurrentPage(Page.Contact)} className="hover:text-indigo-400 transition-colors">Careers</button></li>
              <li><button onClick={() => setCurrentPage(Page.Contact)} className="hover:text-indigo-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><button onClick={() => setCurrentPage(Page.Services)} className="hover:text-indigo-400 transition-colors">Web Development</button></li>
              <li><button onClick={() => setCurrentPage(Page.Services)} className="hover:text-indigo-400 transition-colors">AI Integration</button></li>
              <li><button onClick={() => setCurrentPage(Page.Services)} className="hover:text-indigo-400 transition-colors">Mobile Apps</button></li>
              <li><button onClick={() => setCurrentPage(Page.Services)} className="hover:text-indigo-400 transition-colors">UI/UX Design</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Stay updated with the latest in tech.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-indigo-600 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Zentyq Global. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
