import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20 -z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">Contact Us</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Reach out for a quote or custom branding inquiries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-colors duration-300 text-center">
              <div className="bg-orange-500/20 p-4 rounded-full text-orange-400 inline-block mb-4">
                <Phone size={32} />
              </div>
              <p className="text-sm text-gray-400 mb-2">Call Us</p>
              <a href="tel:08107048386" className="text-xl font-bold block hover:text-orange-400 transition-colors">08107048386</a>
              <a href="tel:07039581987" className="text-xl font-bold block hover:text-orange-400 transition-colors">07039581987</a>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-colors duration-300 text-center">
              <div className="bg-orange-500/20 p-4 rounded-full text-orange-400 inline-block mb-4">
                <Mail size={32} />
              </div>
              <p className="text-sm text-gray-400 mb-2">Email Us</p>
              <a href="mailto:akinbile71@gmail.com" className="text-xl font-bold hover:text-orange-400 transition-colors break-all">
                akinbile71@gmail.com
              </a>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-colors duration-300 text-center">
              <div className="bg-orange-500/20 p-4 rounded-full text-orange-400 inline-block mb-4">
                <MapPin size={32} />
              </div>
              <p className="text-sm text-gray-400 mb-2">Location</p>
              <p className="text-xl font-bold">Ibadan, Nigeria</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};