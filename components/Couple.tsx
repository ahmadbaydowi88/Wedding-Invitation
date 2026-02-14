import React from 'react';

const Couple: React.FC = () => {
  return (
    <section id="couple" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <h2 className="font-serif text-5xl md:text-6xl text-el-text">
            Pasangan <span className="italic text-el-primary/50">Bahagia</span><br/>Kami
          </h2>
          <p className="font-sans text-sm uppercase tracking-widest text-el-text/50 pb-2 border-b border-el-accent">
            Mempelai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          
          {/* Groom */}
          <div className="flex flex-col items-center md:items-start group">
            <div className="w-full max-w-md aspect-[3/4] rounded-t-full overflow-hidden mb-8 relative border-2 border-transparent group-hover:border-el-accent transition-colors duration-500">
              <img 
                src="https://picsum.photos/600/800?random=1" 
                alt="Michael" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-el-text/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="text-left w-full max-w-md">
               <span className="font-sans text-xs font-bold uppercase tracking-widest text-el-pop">Mempelai Pria</span>
               <h3 className="font-serif text-4xl mt-2 mb-4 text-el-text">Michael</h3>
               <p className="font-sans text-el-text/60 leading-relaxed text-sm">
                 "Dia adalah sahabat terbaikku dan petualangan terbesarku. Siap untuk menjadikannya resmi selamanya."
               </p>
            </div>
          </div>

          {/* Bride */}
           <div className="flex flex-col items-center md:items-start md:mt-24 group">
            <div className="w-full max-w-md aspect-[3/4] rounded-t-full overflow-hidden mb-8 relative border-2 border-transparent group-hover:border-el-accent transition-colors duration-500">
              <img 
                src="https://picsum.photos/600/800?random=2" 
                alt="Sarah" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
               <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-el-text/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
             <div className="text-left w-full max-w-md">
               <span className="font-sans text-xs font-bold uppercase tracking-widest text-el-pop">Mempelai Wanita</span>
               <h3 className="font-serif text-4xl mt-2 mb-4 text-el-text">Sarah</h3>
               <p className="font-sans text-el-text/60 leading-relaxed text-sm">
                 "Menemukan belahan jiwa yang kucintai. Mari kita mulai kekacauan indah ini bersama-sama."
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Couple;