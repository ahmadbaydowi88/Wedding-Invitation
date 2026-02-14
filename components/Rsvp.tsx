import React, { useState } from 'react';
import { generateRsvpResponse } from '../services/geminiService';
import { RsvpFormData, Wish } from '../types';
import { Loader2, Heart, Sparkles, Check, X as XIcon, MessageCircleHeart } from 'lucide-react';

const INITIAL_WISHES: Wish[] = [
  { id: '1', name: "Jessica T.", message: "So happy for you guys! Can't wait to celebrate! 🎀", date: "2 jam yang lalu", attendance: 'yes' },
  { id: '2', name: "Dimas Anggara", message: "Selamat menempuh hidup baru Sarah & Michael. Langgeng terus ya!", date: "5 jam yang lalu", attendance: 'yes' },
  { id: '3', name: "Bella & Rizky", message: "Congraaaats! Akhirnyaa 😍", date: "1 hari yang lalu", attendance: 'yes' },
];

const Rsvp: React.FC = () => {
  const [formData, setFormData] = useState<RsvpFormData>({
    name: '',
    email: '',
    attendance: 'yes', // Default value
    guests: 1,
    message: ''
  });

  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAttendanceChange = (value: 'yes' | 'no') => {
    setFormData(prev => ({ ...prev, attendance: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAiResponse(null);

    // 1. Generate AI Response
    const response = await generateRsvpResponse(formData.name, formData.attendance, formData.message);
    setAiResponse(response);
    
    // 2. Add new wish to the wall
    if (formData.message) {
      const newWish: Wish = {
        id: Date.now().toString(),
        name: formData.name,
        message: formData.message,
        date: "Baru saja",
        attendance: formData.attendance
      };
      setWishes(prev => [newWish, ...prev]);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="rsvp" className="py-24 md:py-32 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 bg-gradient-to-b from-el-bg via-white to-el-bg opacity-50"></div>
       <div className="absolute top-1/4 -left-20 w-96 h-96 bg-el-accent/40 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-el-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: RSVP FORM */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(190,24,93,0.1)] overflow-hidden p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-el-soft text-el-primary mb-4">
                <Sparkles size={20} className="animate-pulse" />
              </div>
              <h2 className="font-serif text-4xl text-el-text mb-2">
                R.S.V.P
              </h2>
              <p className="font-sans text-sm text-el-text/60">
                Mohon konfirmasi kehadiran sebelum <span className="font-bold text-el-primary">1 Oktober 2024</span>.
              </p>
            </div>

            {!aiResponse ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Info Grid */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-el-text/40 ml-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-el-accent/50 rounded-xl px-4 py-3 text-el-text placeholder-el-text/30 focus:outline-none focus:border-el-primary focus:ring-1 focus:ring-el-primary transition-all font-serif"
                      placeholder="Nama Tamu"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-el-text/40 ml-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-el-accent/50 rounded-xl px-4 py-3 text-el-text placeholder-el-text/30 focus:outline-none focus:border-el-primary focus:ring-1 focus:ring-el-primary transition-all font-serif"
                      placeholder="email@anda.com"
                    />
                  </div>
                </div>

                {/* Attendance Selection Buttons */}
                <div className="space-y-1">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-el-text/40 ml-2">Konfirmasi Kehadiran</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleAttendanceChange('yes')}
                      className={`relative p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-2 group ${
                        formData.attendance === 'yes'
                          ? 'bg-el-soft border-el-primary text-el-primary shadow-sm'
                          : 'bg-white/30 border-transparent hover:border-el-accent text-el-text/60'
                      }`}
                    >
                      <Heart size={18} className={formData.attendance === 'yes' ? 'fill-el-primary' : 'group-hover:text-el-pop'} />
                      <span className="font-serif text-sm font-medium">Hadir</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAttendanceChange('no')}
                      className={`relative p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-2 group ${
                        formData.attendance === 'no'
                          ? 'bg-gray-100 border-gray-400 text-gray-700 shadow-sm'
                          : 'bg-white/30 border-transparent hover:border-gray-200 text-el-text/60'
                      }`}
                    >
                      <XIcon size={18} />
                      <span className="font-serif text-sm font-medium">Maaf</span>
                    </button>
                  </div>
                </div>

                {/* Guests & Message */}
                <div className={`space-y-4 transition-all duration-500 ${formData.attendance === 'no' ? 'opacity-50 grayscale' : 'opacity-100'}`}>
                  <div className="space-y-1">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-el-text/40 ml-2">Jumlah Tamu</label>
                    <div className="relative">
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        disabled={formData.attendance === 'no'}
                        className="w-full appearance-none bg-white/50 border border-el-accent/50 rounded-xl px-4 py-3 text-el-text focus:outline-none focus:border-el-primary transition-all font-serif cursor-pointer disabled:cursor-not-allowed"
                      >
                        {[1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>{num} Orang</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-el-text/40 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-el-text/40 ml-2">Ucapan & Doa</label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-el-accent/50 rounded-xl px-4 py-3 text-el-text placeholder-el-text/30 focus:outline-none focus:border-el-primary focus:ring-1 focus:ring-el-primary transition-all font-serif resize-none"
                    placeholder="Tuliskan harapan indahmu..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-el-text text-white font-sans text-xs font-bold uppercase tracking-[0.2em] py-4 rounded-full hover:bg-el-primary hover:scale-[1.01] transition-all disabled:opacity-70 disabled:hover:scale-100 shadow-xl shadow-el-primary/10 active:scale-95"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="animate-spin w-4 h-4" /> Mengirim...
                      </span>
                    ) : (
                      "Kirim Konfirmasi"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="w-16 h-16 bg-el-soft rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <Heart size={24} className="fill-el-primary text-el-primary" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-el-text mb-4">Terima Kasih!</h3>
                <div className="bg-white/40 p-6 rounded-2xl border border-white mb-8 max-w-lg">
                  <p className="font-sans text-base text-el-text/80 leading-relaxed italic">
                    "{aiResponse}"
                  </p>
                </div>
                <button
                  onClick={() => {
                    setAiResponse(null);
                    setFormData(prev => ({ ...prev, name: '', email: '', message: '' }));
                  }}
                  className="text-xs font-bold font-sans uppercase tracking-widest text-el-text/50 hover:text-el-primary underline underline-offset-4 transition-colors"
                >
                  Kirim respon lain
                </button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: WISHES WALL */}
          {/* Changed container to have explicit height (h-[600px] lg:h-[700px]) to prevent collapse */}
          <div className="flex flex-col h-[600px] lg:h-[700px] w-full">
             <div className="mb-6 flex items-center gap-3">
               <MessageCircleHeart className="text-el-primary" />
               <h3 className="font-serif text-3xl text-el-text">Papan Ucapan</h3>
               <span className="bg-el-soft text-el-primary px-3 py-1 rounded-full text-xs font-bold font-sans">{wishes.length}</span>
             </div>

             <div className="relative flex-grow w-full overflow-hidden rounded-[40px] border border-white/50 bg-white/20 backdrop-blur-sm">
               {/* Scrollable Area */}
               <div className="absolute inset-0 overflow-y-auto p-6 space-y-4 scroll-smooth">
                 {wishes.map((wish) => (
                   <div key={wish.id} className="bg-white/80 p-6 rounded-2xl shadow-sm border border-white hover:shadow-md transition-shadow animate-fadeIn">
                      <div className="flex justify-between items-start mb-3">
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-el-accent to-el-soft flex items-center justify-center text-el-text font-serif font-bold text-lg">
                             {wish.name.charAt(0).toUpperCase()}
                           </div>
                           <div>
                             <h4 className="font-serif text-lg text-el-text leading-none">{wish.name}</h4>
                             <span className="text-[10px] font-sans uppercase tracking-wider text-el-text/40">{wish.date}</span>
                           </div>
                         </div>
                         {wish.attendance === 'yes' && (
                           <div className="bg-el-soft/50 px-2 py-1 rounded-full border border-el-accent/30" title="Hadir">
                             <Heart size={12} className="fill-el-primary text-el-primary" />
                           </div>
                         )}
                      </div>
                      <p className="font-sans text-el-text/80 text-sm leading-relaxed border-l-2 border-el-accent pl-3">
                        "{wish.message}"
                      </p>
                   </div>
                 ))}
                 
                 <div className="text-center py-8">
                   <p className="font-sans text-xs text-el-text/30 uppercase tracking-widest">Akhir dari ucapan</p>
                 </div>
               </div>
               
               {/* Gradient overlay for scroll fade effect */}
               <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-el-bg to-transparent pointer-events-none"></div>
             </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Rsvp;