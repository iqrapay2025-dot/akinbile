import { motion } from "motion/react";
import { Layers, School, Truck, Tag } from "lucide-react";

const features = [
  {
    icon: <Layers size={40} className="text-orange-500" />,
    title: "Bulk Production Capacity",
    desc: "We handle massive orders with ease."
  },
  {
    icon: <School size={40} className="text-orange-500" />,
    title: "Custom School Branding",
    desc: "Your school's name and logo on every book."
  },
  {
    icon: <Truck size={40} className="text-orange-500" />,
    title: "Reliable Delivery",
    desc: "Fast and safe delivery across the nation."
  },
  {
    icon: <Tag size={40} className="text-orange-500" />,
    title: "Affordable Pricing",
    desc: "Best market rates for high quality."
  }
];

export const Trust = () => {
  return (
    <section id="trust" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Why Choose Us?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-orange-50 rounded-xl hover:shadow-lg transition-all border border-orange-100 flex flex-col items-center"
            >
              <motion.div 
                className="mb-4 bg-white p-4 rounded-full shadow-sm"
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5 
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-orange-600 text-white py-12 px-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
          <div className="text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">100% Satisfaction Guaranteed</h3>
            <p className="opacity-90">We prioritize quality and customer happiness above all.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </motion.button>
        </div>
      </div>
    </section>
  );
};