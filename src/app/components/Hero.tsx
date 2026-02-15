import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1599081786478-0b4922ea39ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwbm90ZWJvb2tzJTIwZWR1Y2F0aW9uJTIwc2Nob29sJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzcxMDk3NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export const Hero = () => {
  const whatsappNumber = "08107048386";
  
  const handleRequestQuote = () => {
    const message = `Hello! I'm interested in getting a quote for corporate branding exercise books from AKINBILE STATIONERIES. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-gradient-to-br from-orange-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left z-10"
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-orange-200">
            Minimum Order: 50,000 pieces
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            AKINBILE <br/>
            <span className="text-orange-500">STATIONERIES</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            Corporate Branding Exercise Books for Schools, Universities, and Organizations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              onClick={handleRequestQuote}
            >
              Request Quote <ArrowRight size={20} />
            </motion.button>
            <motion.a 
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-800 font-bold rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              View Prices
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image / Flyer */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="relative group">
            {/* Background Blob */}
            <div className="absolute -inset-4 bg-orange-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Image Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <img 
                src={HERO_IMAGE} 
                alt="Stationery Flyer" 
                className="w-full h-auto object-cover max-h-[500px]"
              />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-100 max-w-[200px]">
                <p className="text-orange-600 font-bold text-lg">Top Quality</p>
                <p className="text-gray-600 text-sm">Premium paper for premium branding.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-20 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-40 -z-0"></div>
    </section>
  );
};