import { useState } from "react";


const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const workItems = [
    { title: "Elegant Bridal Makeup", category: "bridal", image: "https://dimplemakeovers.in/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-22-at-18.13.31-1-1.jpeg" },
    { title: "Fashion Editorial", category: "editorial", image: "https://i.pinimg.com/736x/87/03/83/87038338ba5c2ed656e229d5ec03788d.jpg" },
    { title: "Fantasy Creature", category: "specialfx", image: "https://i.pinimg.com/564x/11/72/8f/11728f535c43f7359c030bc2890bcafe.jpg" },
    { title: "Vintage Updo", category: "hair", image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-119119790-1555698846.jpg" },
    { title: "Traditional Bridal", category: "bridal", image: "https://i.pinimg.com/1200x/e1/05/a8/e105a88ff63f2adb50fa7ce64fbd784c.jpg" },
    { title: "High Fashion", category: "editorial", image: "https://i.pinimg.com/564x/af/8b/cb/af8bcb3b539de426bc8acd4b571ad1a3.jpg" },
    { title: "Modern Braids", category: "hair", image: "https://www.fabmood.com/inspiration/wp-content/uploads/2024/12/Fulani_braids_85743416937402.jpg" },
    { title: "Aging Effect", category: "specialfx", image: "https://i.pinimg.com/736x/35/6f/2d/356f2d3cce38f4e45cf4f8e104edb572.jpg" }
  ];

  const filteredItems = activeFilter === 'all' ? workItems : workItems.filter(item => item.category === activeFilter);

  return (
    <section id="work" className="bg-cover bg-center px-5 py-24  overflow-hidden" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1591980896142-4e36328411ec?q=80&w=687')"
    }}>
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-4">
            Our <span className="text-pink-500 text-7xl italic" style={{ fontFamily: 'cursive' }}>Work</span>
          </h2>
          <p className="text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
            A showcase of our creative transformations and beauty expertise
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {['all', 'bridal', 'editorial', 'specialfx', 'hair'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-normal transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-pink-500 text-black border-pink-500' 
                  : 'text-white/80 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-pink-500 hover:text-black hover:border-pink-500'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter === 'specialfx' ? 'Special FX' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 hover:border-pink-500/40 hover:z-10">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 transition-all duration-400 hover:opacity-90 hover:scale-105"
                style={{ backgroundImage: `url("${item.image}")` }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 translate-y-5 transition-all duration-400 hover:opacity-100 hover:translate-y-0">
                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-pink-500 text-sm font-light uppercase tracking-wide mb-4">{item.category}</p>
                <a href="#" className="text-white text-sm font-normal inline-flex items-center transition-all duration-300 hover:text-pink-500 group">
                  View Project
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#portfolio" className="text-pink-500 font-medium text-lg inline-flex items-center transition-all duration-300 hover:text-white group">
            View Full Portfolio
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default WorkSection;