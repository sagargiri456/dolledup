import { useState,useEffect } from "react";
const HeroSection = ({ config }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % config.hero.slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [config.hero.slides.length]);

  return (
    <section className="min-h-screen flex items-center justify-start py-24 bg-black overflow-hidden w-full">
      {/* Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        {config.hero.slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url("${slide.bgImage}")` }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/95 via-black/90 to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full px-4 ml-4">
      <h1 className="m-0 font-thin text-[200px] leading-[0.9] text-white/95 mb-4 whitespace-nowrap" style={{ fontFamily: '"Poppins", sans-serif', textShadow: '0 6px 30px rgba(0, 0, 0, 0.45)' }}>
          {config.hero.mainTitle}
        </h1>
        
        <div className="relative mt-4">
          {config.hero.slides.map((slide, index) => (
            <p
              key={index}
              className={`absolute top-0 left-0 font-bold text-5xl leading-tight text-white/85 tracking-wide transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.text}
            </p>
          ))}
        </div>
        
        <a
          href="#appointment"
          className="inline-block mt-52 px-8 py-4 bg-white/15 text-white font-medium text-base border-2 border-white/30 rounded-lg backdrop-blur-md transition-all duration-300 hover:bg-pink-500 hover:border-pink-500 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/40"
        >
          Make an Appointment
        </a>
      </div>
    </section>
  );
};

export default HeroSection;