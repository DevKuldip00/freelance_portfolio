import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import MobileApps from './components/MobileApps';
import Services from './components/Services';
import About from './components/About';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="portfolio-app-root">
      {/* Desktop Precision Cursor */}
      <CustomCursor />

      {/* Sticky Refined Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="mainContent">
        {/* 1. Hero Section with 3D Platinum Torus */}
        <Hero />

        {/* 2. Selected Work (The 4 Web Client Projects) */}
        <SelectedWork />

        {/* 3. Mobile Applications ("Beyond the browser" / Flutter Apps) */}
        <MobileApps />

        {/* 4. Capabilities & Services */}
        <Services />

        {/* 5. About & Verified Credentials */}
        <About />

        {/* 6. Structured Workflow / Approach */}
        <Workflow />

        {/* 7. Conversion-Focused Contact & Brief Builder */}
        <Contact />
      </main>

      {/* Refined Footer with Live IST Clock */}
      <Footer />
    </div>
  );
}
