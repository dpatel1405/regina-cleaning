function Services() {
  return (
    <div>

      {/* Page Header */}
      <section className="bg-green-700 py-20 px-6 text-center">
        <p className="text-green-200 text-sm font-semibold uppercase tracking-widest mb-3">
          What We Offer
        </p>
        <h1 className="text-5xl font-bold text-white mb-4">
          Our Cleaning Services
        </h1>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          Professional cleaning solutions for every home and business in Regina.
        </p>
      </section>

      {/* Residential */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Most Popular
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Residential Cleaning
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Our regular home cleaning service keeps your house fresh and tidy on your schedule. Whether you need us weekly, bi-weekly, or monthly — we show up on time, every time.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Weekly cleaning
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Bi-weekly cleaning
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Monthly cleaning
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Dusting and vacuuming
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Kitchen and bathroom cleaning
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-green-700">From $120</span>
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-all">
                Get Quote
              </button>
            </div>
          </div>
          <div className="bg-green-50 rounded-2xl h-64 flex items-center justify-center text-8xl">
            🏠
          </div>
        </div>
      </section>

      {/* Deep Cleaning */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div className="bg-blue-50 rounded-2xl h-64 flex items-center justify-center text-8xl">
            🧹
          </div>
          <div>
            <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Thorough Clean
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Deep Cleaning
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A top-to-bottom deep clean that covers every corner of your home. Perfect for spring cleaning, first-time clients, or before a big event.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Inside kitchen appliances
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Bathroom grout scrubbing
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Baseboards and window sills
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Inside cabinets and drawers
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Light fixtures and ceiling fans
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-green-700">From $195</span>
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-all">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Move In/Out */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Full Property
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Move-In / Move-Out Cleaning
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Moving is stressful enough. Let us handle the cleaning so you can focus on settling in or getting your deposit back.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Full property top to bottom
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Inside all cabinets and closets
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                All appliances inside and out
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Walls and baseboards wiped
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Landlord ready finish
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-green-700">From $250</span>
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-all">
                Get Quote
              </button>
            </div>
          </div>
          <div className="bg-orange-50 rounded-2xl h-64 flex items-center justify-center text-8xl">
            📦
          </div>
        </div>
      </section>

      {/* Office Cleaning */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div className="bg-purple-50 rounded-2xl h-64 flex items-center justify-center text-8xl">
            🏢
          </div>
          <div>
            <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Commercial
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Office Cleaning
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A clean workspace boosts productivity and leaves a great impression on clients. We offer flexible scheduling including after-hours and weekends.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Offices and boardrooms
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Retail and reception areas
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Kitchens and break rooms
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                Washrooms sanitized
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-700 font-bold">✓</span>
                After-hours available
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-green-700">Custom Quote</span>
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;