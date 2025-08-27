import ServiceCard from './ServiceCard';
const ServicesSection = ({ config }) => (
  <section id="services" className="bg-cover bg-center px-5 py-24 overflow-hidden w-full" style={{ 
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=100&w=1500')" 
  }}>
    <div className="max-w-6xl mx-auto relative z-20">
      <h2 className="text-center text-6xl font-bold text-white mb-4">
        Our <span className="text-pink-500 text-7xl italic" style={{ fontFamily: 'cursive' }}>Services</span>
      </h2>
      <p className="text-center text-xl font-light text-white/80 max-w-2xl mx-auto mb-16 leading-relaxed">
        We offer a range of premium services to enhance your natural beauty
      </p>

      <div className="grid grid-cols-12 grid-rows-8 gap-5 h-[640px]">
        {config.services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);
export default ServicesSection