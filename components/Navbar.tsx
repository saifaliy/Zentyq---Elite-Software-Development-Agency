
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: Page.Home },
    { label: 'Services', page: Page.Services },
    { label: 'About', page: Page.About },
    { label: 'Portfolio', page: Page.Portfolio },
    { label: 'Contact', page: Page.Contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage(Page.Home)}
          >
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              ZEN<span className="text-indigo-500">TYQ</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setCurrentPage(item.page)}
                className={`text-sm font-medium transition-colors hover:text-indigo-400 ${currentPage === item.page ? 'text-indigo-500' : 'text-slate-300'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => setCurrentPage(Page.Contact)}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left text-lg font-medium ${currentPage === item.page ? 'text-indigo-500' : 'text-slate-300'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setCurrentPage(Page.Contact);
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
