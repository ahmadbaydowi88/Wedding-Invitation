import React from 'react';

const images = [
  "https://picsum.photos/600/800?random=10",
  "https://picsum.photos/600/400?random=11",
  "https://picsum.photos/600/600?random=12",
  "https://picsum.photos/600/800?random=13",
  "https://picsum.photos/600/600?random=14",
  "https://picsum.photos/600/400?random=15",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Galeri Foto</span>
          <h2 className="font-serif text-5xl md:text-6xl text-center">
            Momen<br/><span className="italic text-gray-400">Indah</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-lg">
              <img 
                src={src} 
                alt={`Memory ${index}`} 
                className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;