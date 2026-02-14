import React from 'react';
import { Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';

const Details: React.FC = () => {
  return (
    <section id="details" className="py-32 bg-el-bg relative overflow-hidden">
      
      {/* Blurred Orbs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-el-accent/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-el-pop/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-el-text">Susunan Acara</h2>
          <p className="font-sans text-el-text/60 max-w-lg mx-auto">
            Mohon doa restu dan kehadiran Bapak/Ibu/Saudara/i dalam momen bahagia kami. Kehadiran Anda adalah kado terindah bagi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ceremony */}
          <div className="bg-white/80 backdrop-blur-sm p-10 md:p-14 rounded-2xl shadow-[0_5px_40px_-15px_rgba(190,24,93,0.05)] hover:shadow-[0_10px_50px_-15px_rgba(190,24,93,0.1)] transition-shadow duration-300 border border-el-accent/30 group">
             <div className="flex justify-between items-start mb-8">
               <span className="font-sans text-xs font-bold uppercase tracking-widest text-el-primary border border-el-accent rounded-full px-3 py-1">Bagian 01</span>
               <ArrowUpRight className="w-6 h-6 text-el-accent group-hover:text-el-primary transition-colors" />
             </div>
             
             <h3 className="font-serif text-3xl mb-2 text-el-text">Pemberkatan Nikah</h3>
             <p className="font-sans text-el-text/50 italic mb-8">"Janji Suci"</p>

             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-el-soft flex items-center justify-center text-el-primary">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-el-text/50 uppercase tracking-wider">Tanggal</p>
                    <p className="font-serif text-lg text-el-text">15 Oktober 2024</p>
                  </div>
                </div>
                 <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-el-soft flex items-center justify-center text-el-primary">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-el-text/50 uppercase tracking-wider">Waktu</p>
                    <p className="font-serif text-lg text-el-text">09:00 - 11:00 WIB</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-el-soft flex items-center justify-center text-el-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-el-text/50 uppercase tracking-wider">Lokasi</p>
                    <p className="font-serif text-lg text-el-text">Katedral Jakarta</p>
                  </div>
                </div>
             </div>

             <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-10 inline-block text-sm font-sans font-medium underline underline-offset-4 decoration-el-accent hover:decoration-el-primary hover:text-el-primary transition-all">
               Lihat Peta
             </a>
          </div>

          {/* Reception */}
          <div className="bg-white/80 backdrop-blur-sm p-10 md:p-14 rounded-2xl shadow-[0_5px_40px_-15px_rgba(190,24,93,0.05)] hover:shadow-[0_10px_50px_-15px_rgba(190,24,93,0.1)] transition-shadow duration-300 border border-el-accent/30 group">
             <div className="flex justify-between items-start mb-8">
               <span className="font-sans text-xs font-bold uppercase tracking-widest text-el-primary border border-el-accent rounded-full px-3 py-1">Bagian 02</span>
               <ArrowUpRight className="w-6 h-6 text-el-accent group-hover:text-el-primary transition-colors" />
             </div>
             
             <h3 className="font-serif text-3xl mb-2 text-el-text">Resepsi Pernikahan</h3>
             <p className="font-sans text-el-text/50 italic mb-8">"Ramah Tamah & Pesta"</p>

             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-el-soft flex items-center justify-center text-el-primary">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-el-text/50 uppercase tracking-wider">Tanggal</p>
                    <p className="font-serif text-lg text-el-text">15 Oktober 2024</p>
                  </div>
                </div>
                 <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-el-soft flex items-center justify-center text-el-primary">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-el-text/50 uppercase tracking-wider">Waktu</p>
                    <p className="font-serif text-lg text-el-text">18:00 WIB - Selesai</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-el-soft flex items-center justify-center text-el-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-el-text/50 uppercase tracking-wider">Lokasi</p>
                    <p className="font-serif text-lg text-el-text">Hotel Indonesia Kempinski</p>
                  </div>
                </div>
             </div>

             <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-10 inline-block text-sm font-sans font-medium underline underline-offset-4 decoration-el-accent hover:decoration-el-primary hover:text-el-primary transition-all">
               Lihat Peta
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;