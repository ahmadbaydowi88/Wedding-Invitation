import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini AI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRsvpResponse = async (name: string, attendance: string, message: string): Promise<string> => {
  try {
    const modelId = "gemini-3-flash-preview";
    
    const prompt = `
      Kamu adalah asisten AI untuk pernikahan "Sarah & Michael" dengan tema "Gen Z Elegant / Coquette Pink".
      Tamu: "${name}".
      Status: ${attendance === 'yes' ? 'Hadir' : 'Tidak Hadir'}.
      Pesan: "${message}".
      
      Tugas: Buat balasan otomatis yang sopan, aesthetic, dan warm dalam Bahasa Indonesia.
      Gunakan gaya bahasa campuran Indonesia-Inggris (Jaksel style) yang natural, tapi tetap elegan dan tidak alay.
      
      Contoh tone:
      - "Thank you so much [Nama], can't wait to see you!"
      - "Aww, so sweet! Doa kamu sangat berarti buat kami."
      - "It's okay bestie, doa restu kamu sudah cukup bikin kami happy."
      
      Maksimal 2 kalimat.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || "Terima kasih banyak! Kami sangat menantikan kehadiranmu.";
  } catch (error) {
    console.error("Error generating RSVP response:", error);
    return "Terima kasih! Konfirmasi Anda telah kami terima.";
  }
};