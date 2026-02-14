import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-el-accent">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-el-text mb-6">
          S & M
        </h2>
        <div className="flex justify-center gap-8 mb-8 font-sans text-xs font-bold uppercase tracking-widest text-el-text/50">
          <a href="#home" className="hover:text-el-pop transition-colors">Beranda</a>
          <a href="#details" className="hover:text-el-pop transition-colors">Acara</a>
          <a href="#rsvp" className="hover:text-el-pop transition-colors">Ucapan</a>
        </div>
        <p className="text-el-text/30 font-sans text-xs tracking-wide">
          © 2024 Pernikahan Sarah & Michael. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;