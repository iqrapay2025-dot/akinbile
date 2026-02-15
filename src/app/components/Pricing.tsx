import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export const Pricing = () => {
  const products = [
    { title: "40 Leaves", features: ["Standard Quality", "Durable Binding", "Customizable Covers"] },
    { title: "60 Leaves", features: ["Extra Pages", "Premium Paper", "School Logo Friendly"] },
    { title: "Higher Education", features: ["University Standard", "Heavy Duty", "Professional Look"] },
  ];

  const whatsappNumber = "08107048386";
  
  const handleOrderNow = (productTitle: string) => {
    const message = `Hello! I'm interested in ordering ${productTitle} exercise books from AKINBILE STATIONERIES. Can you provide a quote?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            High-quality exercise books for schools and organizations. Contact us for current bulk pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <div className="text-xl font-bold text-orange-600 mb-6">Contact for Price</div>
              
              <ul className="w-full space-y-3 mb-8">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                className="w-full py-3 px-6 bg-orange-50 text-orange-600 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                onClick={() => handleOrderNow(item.title)}
              >
                Get Quote
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            * Custom branding available for all products.
          </p>
        </div>
      </div>
    </section>
  );
};
