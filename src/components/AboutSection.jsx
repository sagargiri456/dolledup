const AboutSection = () => (
  <section id="about" className="bg-cover bg-center px-5 py-24 relative overflow-hidden" style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1650784855038-9f4d5ed154a9?q=80&w=1170')"
  }}>
    <div className="max-w-6xl mx-auto relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-white mb-4">
          About <span className="text-pink-500 text-7xl italic" style={{ fontFamily: 'cursive' }}>Us</span>
        </h2>
        <p className="text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
          Crafting beauty with passion, expertise, and creativity
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Image Collage */}
        <div className="relative h-[500px]">
          <div className="absolute w-3/5 h-3/5 top-0 left-0 z-30 rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 hover:border-pink-500/40 hover:opacity-100 hover:z-50 opacity-60">
            <div className="absolute inset-0 bg-cover bg-center opacity-70 transition-opacity duration-400 hover:opacity-90" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1170')" }} />
          </div>
          <div className="absolute w-1/2 h-1/2 top-1/3 right-0 z-20 rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 hover:border-pink-500/40 hover:opacity-100 hover:z-50 opacity-60">
            <div className="absolute inset-0 bg-cover bg-center opacity-70 transition-opacity duration-400 hover:opacity-90" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1650784855038-9f4d5ed154a9?q=80&w=1170')" }} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-10">
            <h3 className="text-3xl font-semibold text-white mb-6 relative inline-block">
              Our Story
              <div className="absolute bottom-[-8px] left-0 w-1/2 h-1 bg-pink-500 rounded-full" />
            </h3>
            <p className="text-white/85 mb-6 leading-relaxed">
              Founded in 2010, Beauty began as a small studio with big dreams. Our founder, Elena Rodriguez, envisioned a space where artistry and technique would combine to create unforgettable transformations.
            </p>
            <p className="text-white/85 leading-relaxed">
              Today, we've grown into a team of 15 passionate professionals, each bringing their unique expertise to help our clients look and feel their absolute best.
            </p>
          </div>

          <a href="#story" className="inline-block px-8 py-4 bg-white/10 text-white font-medium border-2 border-white/20 rounded-lg backdrop-blur-md transition-all duration-300 hover:bg-pink-500 hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/40 self-start">
            Read Our Full Story
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
        {[
          { number: "13", label: "Years of Excellence" },
          { number: "5000", label: "Happy Clients" },
          { number: "15", label: "Expert Artists" },
          { number: "28", label: "Awards Won" }
        ].map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white/3 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/8 hover:shadow-lg hover:shadow-pink-500/15">
            <span className="block text-4xl font-bold text-pink-500 mb-2">{stat.number}</span>
            <span className="text-sm font-light text-white/80 uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default AboutSection;