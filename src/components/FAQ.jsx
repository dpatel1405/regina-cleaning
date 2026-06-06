import { useState } from 'react';

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How much does cleaning cost?",
      answer: "Our pricing depends on the size of your home and the type of clean. Residential cleaning starts at $120, deep cleaning from $195, and move-in/move-out from $250. Use our quote calculator above for an instant estimate!"
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "Not at all! Many of our clients provide us with a key or door code. Our staff are fully background-checked, bonded, and insured so you can feel completely comfortable leaving us to work."
    },
    {
      question: "Are cleaning supplies included?",
      answer: "Yes! We bring all of our own professional-grade, eco-friendly cleaning products and equipment. You don't need to provide anything. If you have a preferred product you'd like us to use, just let us know."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve all of Regina and surrounding areas including Downtown, Harbour Landing, Lakeview, Whitmore Park, Hillsdale, Wascana, Normanview, and Emerald Park. Not sure if we cover your area? Give us a call!"
    },
    {
      question: "How do I book a cleaning?",
      answer: "You can book directly through our website using the contact form, call us at (306) 555-0198, or use our instant quote calculator to get started. We typically confirm bookings within a few hours."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand life gets busy! We just ask for 24 hours notice if you need to cancel or reschedule. Cancellations with less than 24 hours notice may be subject to a small fee."
    },
    {
      question: "Do you offer recurring cleaning discounts?",
      answer: "Yes! Clients who book weekly cleanings save 20%, bi-weekly clients save 15%, and monthly clients save 10% off the regular rate. Recurring bookings are our most popular option."
    },
    {
      question: "Is my satisfaction guaranteed?",
      answer: "Absolutely. If you are not happy with any area we cleaned, contact us within 24 hours and we will come back and reclean it completely free of charge. Your satisfaction is our top priority."
    }
  ];

  function toggleFAQ(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to know before booking your first clean.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-all"
              >
                <span className="text-gray-900 font-semibold text-sm">
                  {faq.question}
                </span>
                <span className="text-green-700 font-bold text-xl ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Still have questions? We are happy to help!
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition-all">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}

export default FAQ;