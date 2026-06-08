function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cleaning You Can Actually Trust
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We treat every home like our own — with care, attention, and professional results every time.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Fully Insured
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              All staff are background-checked, bonded, and fully insured for your complete peace of mind.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Satisfaction Guaranteed
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Not happy? We come back within 24 hours and reclean it — completely free of charge.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Eco-Friendly Products
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We use safe, non-toxic products that are gentle on your family, pets, and the environment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Flexible Scheduling
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Book weekly, bi-weekly, or monthly. We work around your schedule including weekends.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Transparent Pricing
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              No hidden fees ever. Get an instant quote online and know exactly what you pay before we arrive.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Local & Trusted
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Regina-based and community proud. We are your neighbours and your home matters to us.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;