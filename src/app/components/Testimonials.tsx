import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Oluwaseun Adebayo",
    role: "Vice Chancellor",
    institution: "Lagos State University",
    text: "AKINBILE STATIONERIES delivered 150,000 custom-branded exercise books for our students. The quality was exceptional and delivery was on time. Highly recommended for bulk educational supplies.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwbWFufGVufDF8fHx8MTc3MTA5Nzc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Mrs. Chioma Okonkwo",
    role: "Head of Procurement",
    institution: "Federal Government College, Abuja",
    text: "We've been working with AKINBILE for 3 years. Their attention to detail in our school branding and consistent quality makes them our go-to supplier for all exercise books.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwd29tYW58ZW58MXx8fHwxNzcxMDk3NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Prof. Ibrahim Mohammed",
    role: "Dean of Student Affairs",
    institution: "University of Ibadan",
    text: "The 200,000 pieces order for our university was handled professionally. The customization options allowed us to showcase our university brand perfectly on every page.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwbWFufGVufDF8fHx8MTc3MTA5Nzc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Engr. Funmilayo Ajayi",
    role: "Admin Manager",
    institution: "Greenfield Schools Network",
    text: "Outstanding service! They managed our multi-campus order of 80,000 exercise books across 5 locations. Each campus received their custom branding accurately.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwd29tYW58ZW58MXx8fHwxNzcxMDk3NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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