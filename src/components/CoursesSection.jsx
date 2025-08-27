const CoursesSection = () => (
  <section id="courses" className="bg-cover bg-center px-5 py-24 overflow-hidden" style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1633793566189-8e9fe6f817fc?q=80&w=1170')"
  }}>
    <div className="max-w-6xl mx-auto relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-white mb-4">
          Our <span className="text-pink-500 text-7xl italic" style={{ fontFamily: 'cursive' }}>Courses</span>
        </h2>
        <p className="text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
          Master the art of beauty with our expert-led programs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Professional Makeup Artistry",
            description: "Comprehensive training in professional makeup techniques for all occasions.",
            duration: "8 Weeks",
            price: "$899",
            badge: "Popular",
            image: "https://img.skininc.com/files/base/allured/all/image/2023/06/ATE_Makeup_850x425.6489fa2e993e4.png"
          },
          {
            title: "Advanced Skincare Techniques", 
            description: "Master the science of skincare and advanced treatment methodologies.",
            duration: "6 Weeks",
            price: "$749",
            image: "https://aestheticworldclinic.com/blog/wp-content/uploads/2024/07/h.jpg"
          },
          {
            title: "Bridal Hair Styling Masterclass",
            description: "Specialized techniques for creating stunning bridal hairstyles.",
            duration: "4 Weeks", 
            price: "$599",
            badge: "New",
            image: "https://javeys.co.uk/wp-content/uploads/2023/11/IMG_3294-1.jpg"
          }
        ].map((course, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-400 hover:-translate-y-3 hover:shadow-lg hover:shadow-pink-500/25 hover:border-pink-500/40">
            <div 
              className="h-48 bg-cover bg-center opacity-60 transition-opacity duration-400 hover:opacity-80"
              style={{ backgroundImage: `url("${course.image}")` }}
            />
            
            <div className="p-8 mt-[-60px] relative z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
              {course.badge && (
                <div className="absolute -top-4 right-5 bg-pink-500 text-black font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                  {course.badge}
                </div>
              )}
              
              <h3 className="text-white text-xl font-semibold mb-4 leading-tight">{course.title}</h3>
              <p className="text-white/85 text-sm mb-6 leading-relaxed">{course.description}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-white/80 text-xs flex items-center gap-1">
                  <span>⏱</span> {course.duration}
                </span>
                <span className="text-white/80 text-xs flex items-center gap-1">
                  <span>👩‍🎓</span> Certified
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-pink-500 text-2xl font-bold">{course.price}</span>
                <a href="#" className="bg-pink-500 text-black font-medium text-sm px-5 py-2 rounded-md transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-md hover:shadow-pink-500/40">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center p-8 bg-white/9 rounded-xl border border-white/10">
        <p className="text-white/90 text-lg font-light mb-4">Want to learn and grow together with professionality?</p>
        <a href="#contact" className="text-pink-500 font-medium inline-flex items-center transition-all duration-300 hover:text-white group">
          Contact us for custom training
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  </section>
);
export default CoursesSection;