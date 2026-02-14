import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-el-bg text-el-text font-sans">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Couple />
        <Details />
        <Gallery />
        <Rsvp />
      </main>
      <Footer />
    </div>
  );
}

export default App;