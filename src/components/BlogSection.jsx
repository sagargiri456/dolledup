const BlogSection = () => (
  <section id="blog" className="bg-cover bg-center px-5 py-24  overflow-hidden" style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://tamilsmakeoverartistry.in/img/home-slider/slide-4.jpg')"
  }}>
    <div className="max-w-6xl mx-auto relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-white mb-4">
          Our <span className="text-pink-500 text-7xl italic" style={{ fontFamily: 'cursive' }}>Blog</span>
        </h2>
        <p className="text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
          Discover beauty tips, trends, and industry insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "10 Summer Makeup Tips That Will Last All Day",
            excerpt: "Discover our professional secrets for keeping your makeup flawless even on the hottest summer days.",
            category: "Makeup Tips",
            date: "June 15, 2023",
            image: "https://objectstore.e2enetworks.net/hansmigration/feeds/2021/02/04/1028966-beauty.jpg"
          },
          {
            title: "The Ultimate Summer Skincare Routine", 
            excerpt: "Protect and nourish your skin during the summer months with our expert-recommended routine.",
            category: "Skincare",
            date: "June 10, 2023",
            image: "https://geimshospital.com/wp-content/uploads/2025/06/Summer-Skincare-Routine-1024x512.jpg"
          },
          {
            title: "2023 Bridal Makeup Trends You Need to Know",
            excerpt: "From natural glam to bold statements, discover the top bridal makeup trends for this wedding season.",
            category: "Bridal",
            date: "June 5, 2023",
            image: "https://tamilsmakeoverartistry.in/img/home-slider/slide-2.jpg"
          }
        ].map((article, index) => (
          <article key={index} className="relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-400 hover:-translate-y-3 hover:shadow-lg hover:shadow-pink-500/25 hover:border-pink-500/40">
            <div 
              className="h-64 bg-cover bg-center opacity-80 transition-all duration-400 hover:opacity-90 hover:scale-105"
              style={{ backgroundImage: `url("${article.image}")` }}
            />
            
            <div className="p-8">
              <div className="flex gap-4 mb-4">
                <span className="text-white/70 text-xs font-light">{article.date}</span>
                <span className="text-pink-500 text-xs font-medium uppercase tracking-wide">{article.category}</span>
              </div>
              
              <h3 className="text-white text-xl font-semibold mb-4 leading-tight">{article.title}</h3>
              <p className="text-white/85 text-sm mb-6 leading-relaxed">{article.excerpt}</p>
              
              <a href="#" className="text-pink-500 text-sm font-medium inline-flex items-center transition-all duration-300 hover:text-white group">
                Read More
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center p-8 bg-white/3 rounded-xl border border-white/10">
        <p className="text-white/90 text-lg font-light mb-4">Want to read more beauty insights?</p>
        <a href="#blog-archive" className="text-pink-500 font-medium inline-flex items-center transition-all duration-300 hover:text-white group">
          View All Articles
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  </section>
);

export default BlogSection;