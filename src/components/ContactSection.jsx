const ContactSection = ({ config }) => (
  <section id="contact" className="bg-cover bg-center px-5 py-24  overflow-hidden" style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1697347815893-2cfa02e6cca8?q=80&w=1170')"
  }}>
    <div className="max-w-6xl mx-auto relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-white mb-4">
          Contact <span className="text-pink-500 text-7xl italic" style={{ fontFamily: 'cursive' }}>Us</span>
        </h2>
        <p className="text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
          Get in touch to book your appointment or ask any questions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20">
            <div className="text-4xl text-pink-500 mb-4">📍</div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Location</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">{config.contact.address}</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20">
            <div className="text-4xl text-pink-500 mb-4">📞</div>
            <h3 className="text-white text-lg font-semibold mb-4">Phone & WhatsApp</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">{config.contact.phone}<br/>{config.contact.whatsapp} (WhatsApp)</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20">
            <div className="text-4xl text-pink-500 mb-4">✉️</div>
            <h3 className="text-white text-lg font-semibold mb-4">Email Us</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">{config.contact.email}<br/>bookings@beautysalon.com</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20">
            <div className="text-4xl text-pink-500 mb-4">🕒</div>
            <h3 className="text-white text-lg font-semibold mb-4">Opening Hours</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">{config.contact.hours}</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10">
          <div className="mb-6">
            <label className="block text-white/90 text-sm font-normal mb-2">Your Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 bg-white/8 border border-white/20 rounded-md text-white text-sm transition-all duration-300 focus:outline-none focus:border-pink-500 focus:bg-white/12 focus:shadow-lg focus:shadow-pink-500/20"
              required 
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-white/90 text-sm font-normal mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 bg-white/8 border border-white/20 rounded-md text-white text-sm transition-all duration-300 focus:outline-none focus:border-pink-500 focus:bg-white/12 focus:shadow-lg focus:shadow-pink-500/20"
              required 
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-white/90 text-sm font-normal mb-2">Service Interested In</label>
            <select className="w-full px-4 py-3 bg-white/8 border border-white/20 rounded-md text-white text-sm transition-all duration-300 focus:outline-none focus:border-pink-500 focus:bg-white/12 focus:shadow-lg focus:shadow-pink-500/20">
              <option value="">Select a service</option>
              <option value="bridal">Bridal Makeup</option>
              <option value="skincare">Skincare Treatments</option>
              <option value="hair">Hair Styling</option>
              <option value="makeup-lessons">Makeup Lessons</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label className="block text-white/90 text-sm font-normal mb-2">Your Message</label>
            <textarea 
              className="w-full px-4 py-3 bg-white/8 border border-white/20 rounded-md text-white text-sm transition-all duration-300 focus:outline-none focus:border-pink-500 focus:bg-white/12 focus:shadow-lg focus:shadow-pink-500/20 resize-vertical min-h-[120px]"
              rows={5}
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full px-8 py-4 bg-pink-500 text-black font-semibold border-none rounded-lg cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/40"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);
export default ContactSection;