import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order is 50,000 pieces. This allows us to provide competitive pricing while ensuring premium quality for bulk institutional orders."
  },
  {
    question: "Can we customize the exercise books with our school logo and name?",
    answer: "Absolutely! We specialize in custom branding. You can add your school/university logo, name, motto, and even custom color schemes on the covers and throughout the pages."
  },
  {
    question: "What customization options are available?",
    answer: "We offer full customization including: cover design with your logo and school colors, branded inner pages, custom page layouts, choice of paper quality (standard or premium), binding options, and page count selection (40, 60, or more leaves)."
  },
  {
    question: "How long does it take to complete a bulk order?",
    answer: "Typical production time is 1-2 weeks depending on order size and customization complexity. For urgent orders above 100,000 pieces, we can expedite production with prior arrangement."
  },
  {
    question: "Do you deliver across Nigeria?",
    answer: "Yes! We provide nationwide delivery to all states in Nigeria. Delivery is included in our pricing, and we ensure safe and timely arrival of your order."
  },
  {
    question: "What are the payment terms?",
    answer: "We require 50% deposit upon order confirmation and the balance before delivery. We accept bank transfers and can provide official invoices for institutional procurement processes."
  },
  {
    question: "Can we get a sample before placing a bulk order?",
    answer: "Yes, we can provide samples of our standard products or create a mockup of your custom design. Contact us via WhatsApp at 08107048386 to request samples."
  },
  {
    question: "What paper quality do you use?",
    answer: "We use premium quality paper (70-80 GSM) that is smooth for writing, durable, and provides excellent ink absorption. Our paper is sourced from certified suppliers to ensure consistency."
  },
  {
    question: "Can we place orders for multiple campuses with different branding?",
    answer: "Definitely! We can handle multi-campus orders where each location receives its specific branding. Just provide us with the details for each campus when placing your order."
  },
  {
    question: "Do you offer any discounts for repeat orders?",
    answer: "Yes! We value long-term partnerships. Schools and institutions that place annual or recurring orders receive preferential pricing. Contact us to discuss loyalty benefits."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="text-orange-500" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our bulk orders and customization services.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-bold text-gray-900 text-lg pr-4 group-hover:text-orange-600 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-orange-500"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 max-w-2xl mx-auto border border-orange-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is ready to help you with your bulk order requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/08107048386?text=Hello!%20I%20have%20questions%20about%20your%20bulk%20order%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:08107048386"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 font-bold rounded-lg border-2 border-orange-500 hover:bg-orange-50 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
