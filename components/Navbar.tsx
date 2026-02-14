import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Beranda', href: '#home' },
  { label: 'Mempelai', href: '#couple' },
  { label: 'Acara', href: '#details' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Ucapan', href: '#rsvp' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Optional: Update URL hash without causing a jump if scrollIntoView doesn't do it
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`backdrop-blur-md bg-white/60 rounded-full px-6 py-3 flex justify-between items-center border border-white/40 shadow-sm transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
            
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className="font-serif text-2xl font-semibold tracking-tight text-el-text hover:text-el-pop transition-colors cursor-pointer"
              >
                S<span className="font-sans italic font-light text-el-primary mx-1">&</span>M
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-sans text-sm font-medium uppercase tracking-widest text-el-text/70 hover:text-el-primary transition-colors duration-300 relative group cursor-pointer"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-el-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-el-text hover:text-el-primary focus:outline-none p-2"
                aria-label="Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] bg-el-bg/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 md:hidden fade-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-serif text-3xl text-el-text hover:text-el-primary hover:italic transition-all cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 p-4 text-el-text hover:text-el-pop"
            aria-label="Tutup Menu"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;