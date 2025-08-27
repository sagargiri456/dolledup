const Footer = ({ config }) => (
  <footer className="bg-gradient-to-r from-black/90 to-black/80 px-5 py-16 overflow-hidden">
    <div className="max-w-6xl mx-auto relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand Section */}
        <div className="flex flex-col">
          <h3 className="text-pink-500 text-5xl mb-4" style={{ fontFamily: 'cursive' }}>{config.brand.name}</h3>
          <p className="text-white/80 text-sm font-light mb-6 leading-relaxed">{config.brand.tagline}</p>
          <div className="flex gap-4">
            {['FB', 'IG', 'TW', 'YT'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white/80 text-xs font-medium transition-all duration-300 hover:bg-pink-500 hover:text-black hover:-translate-y-1"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Services
              <div className="absolute bottom-[-8px] left-0 w-2/5 h-0.5 bg-pink-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {['Bridal Makeup', 'Skincare', 'Hair Styling', 'Makeup Lessons'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/70 text-sm font-light transition-all duration-300 hover:text-pink-500 hover:pl-1">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Company
              <div className="absolute bottom-[-8px] left-0 w-2/5 h-0.5 bg-pink-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm font-light transition-all duration-300 hover:text-pink-500 hover:pl-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Support
              <div className="absolute bottom-[-8px] left-0 w-2/5 h-0.5 bg-pink-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {['FAQ', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm font-light transition-all duration-300 hover:text-pink-500 hover:pl-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-6 relative inline-block">
            Stay Updated
            <div className="absolute bottom-[-8px] left-0 w-2/5 h-0.5 bg-pink-500 rounded-full" />
          </h4>
          <p className="text-white/80 text-sm font-light mb-6 leading-relaxed">
            Subscribe to our newsletter for beauty tips and exclusive offers
          </p>
          <form className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Your email address"
              className="px-4 py-3 bg-white/8 border border-white/20 rounded-md text-white text-sm transition-all duration-300 focus:outline-none focus:border-pink-500 focus:bg-white/12 focus:shadow-lg focus:shadow-pink-500/20"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-pink-500 text-black font-medium text-sm rounded-md cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-md hover:shadow-pink-500/40"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
        <p className="text-white/60 text-sm font-light">© 2023 Beauty Salon. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-white/60 text-sm font-light">We accept:</span>
          <div className="flex gap-2">
            {['Visa', 'MasterCard', 'PayPal', 'Amex'].map((method) => (
              <span key={method} className="px-3 py-1 bg-white/8 rounded text-white/60 text-xs">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;