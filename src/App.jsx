import React from 'react';
// import './App.css';
import './index.css';
import Navigation from './components/Navigation';
import siteConfig from './config/siteconfig'
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import CoursesSection from './components/CoursesSection'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans bg-white text-gray-900 w-full">
      <Navigation config={siteConfig} />
      <HeroSection config={siteConfig} />
      <ServicesSection config={siteConfig} />
      <AboutSection />
      <CoursesSection />
      <WorkSection />
      <BlogSection />
      <ContactSection config={siteConfig} />
      <Footer config={siteConfig} />
    </div>
  );
};

export default App;