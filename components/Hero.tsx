import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Editorial Layout */}
      <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col md:flex-row items-center justify-between z-10 pt-20">
        
        <div className="md:w-1/2 text-left mb-12 md:mb-0">
          <div className="flex items-center space-x-4 mb-6">
             <div className="h-[1px] w-12 bg-el-text"></div>
             <span className="font-sans text-xs uppercase tracking-[0.2em] text-el-primary">Pernikahan Kami</span>
          </div>
          
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-none text-el-text mb-6">
            Sarah <br />
            <span className="italic font-light text-el-primary/60 ml-12">dan</span> <br />
            Michael
          </h1>

          <p className="font-sans text-sm md:text-base text-el-text/70 max-w-sm leading-relaxed mt-8">
            Merayakan cinta, perjalanan hidup, dan awal dari keabadian kami. 
            Bergabunglah bersama kami di momen yang penuh kebahagiaan ini.
          </p>

          <div className="mt-12 flex items-center gap-6">
             {/* Date Pill - Fixed Alignment with Flexbox Center */}
             <div className="flex items-center justify-center border border-el-text rounded-full px-8 py-3 font-sans text-sm font-medium uppercase tracking-widest hover:bg-el-text hover:text-white transition-colors cursor-default">
               15.10.24
             </div>
             <div className="font-serif italic text-lg text-el-primary">
               Jakarta, ID
             </div>
          </div>
        </div>

        <div className="md:w-1/2 relative h-[500px] w-full md:h-[80vh]">
           {/* Abstract shapes / images */}
           <div className="absolute top-0 right-0 w-4/5 h-full rounded-t-full overflow-hidden border border-white/50">
             <img 
              src="https://picsum.photos/800/1200?grayscale" 
              alt="Couple Mood" 
              className="w-full h-full object-cover grayscale opacity-90 hover:scale-105 transition-transform duration-1000 mix-blend-multiply"
             />
             <div className="absolute inset-0 bg-el-primary/10 pointer-events-none"></div>
           </div>
           <div className="absolute bottom-10 -left-4 md:-left-10 bg-white/80 backdrop-blur-sm p-6 shadow-xl max-w-xs rotate-[-5deg] border border-el-accent rounded-xl">
              <p className="font-serif italic text-2xl mb-2 text-el-text">"Cinta untuk selamanya"</p>
              <p className="font-sans text-xs text-el-primary uppercase tracking-widest">Est. 2024</p>
           </div>
        </div>

      </div>

      {/* Minimal Marquee Bottom */}
      <div className="absolute bottom-0 w-full border-t border-el-accent py-3 bg-white/30 backdrop-blur-sm">
         <div className="marquee-container">
          <div className="marquee-content font-sans text-xs font-medium uppercase tracking-[0.3em] text-el-text/50">
             • Catat Tanggalnya • 15 Oktober 2024 • Sarah & Michael • Jakarta • Resepsi Pernikahan • Kisah Cinta • Catat Tanggalnya • 15 Oktober 2024 • Sarah & Michael •
             • Catat Tanggalnya • 15 Oktober 2024 • Sarah & Michael • Jakarta • Resepsi Pernikahan • Kisah Cinta • Catat Tanggalnya • 15 Oktober 2024 • Sarah & Michael •
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;