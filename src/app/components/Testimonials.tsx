import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Akinyemi  Nurudeen",
    role: "All-time Customer",
    Location: "Lagos State",
    text: "AKINBILE STATIONERIES delivered 150,000 custom-branded exercise books for our students. The quality was exceptional and delivery was on time. Highly recommended for bulk educational supplies.",
    rating: 5,
  },
  {
    name: "Mrs. Ladipo Aminat",
    role: "Referred Client",
    Location: "Ibadan",
    text: "We've been working with AKINBILE for 3 years. Their attention to detail in our school branding and consistent quality makes them our go-to supplier for all exercise books.",
    rating: 5,
  },
  {
    name: "Mr. Okafor Chinedu",
    role: "Institutional Buyer",
    Location: "Abuja",
    text: "AKINBILE's custom branding services elevated our university's stationery. The personalized covers and quality paper impressed both staff and students. Excellent service!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading educational institutions across Nigeria for bulk custom branding solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange-100">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#F59E0B"
                    className="text-orange-500"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-orange-600 font-medium">
                    {testimonial.institution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join 500+ Educational Institutions
          </h3>
          <p className="text-orange-100 mb-6 text-lg">
            We've successfully delivered over 10 million custom-branded exercise books across Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-orange-100 text-sm">Schools & Universities</div>
            </div>
            <div className="hidden md:block w-px bg-orange-300"></div>
            <div>
              <div className="text-4xl font-bold">10M+</div>
              <div className="text-orange-100 text-sm">Books Delivered</div>
            </div>
            <div className="hidden md:block w-px bg-orange-300"></div>
            <div>
              <div className="text-4xl font-bold">5 Years</div>
              <div className="text-orange-100 text-sm">Industry Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};