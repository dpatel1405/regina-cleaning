function Services() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From regular home cleaning to deep cleans and move-outs — we have a service for every situation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-green-600 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">🏠</div>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Residential Cleaning
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Regular home cleaning on your schedule. We handle dusting, vacuuming, mopping, bathrooms, and kitchens.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 mb-6">
              <li>✓ Weekly cleaning</li>
              <li>✓ Bi-weekly cleaning</li>
              <li>✓ Monthly cleaning</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-green-700 font-bold text-lg">From $120</span>
              <button className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white text-sm font-semibold px-4 py-2 rounded-md transition-all">
                Get Quote
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-green-600 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">🧹</div>
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                Thorough
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Deep Cleaning
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A top-to-bottom deep clean for your entire home. Perfect for spring cleaning or first-time clients.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 mb-6">
              <li>✓ Kitchens & appliances</li>
              <li>✓ Bathrooms & grout</li>
              <li>✓ Baseboards & cabinets</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-green-700 font-bold text-lg">From $195</span>
              <button className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white text-sm font-semibold px-4 py-2 rounded-md transition-all">
                Get Quote
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-green-600 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">📦</div>
              <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                Full Property
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Move-In / Move-Out
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Get your security deposit back or start fresh in your new home. We clean every corner.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 mb-6">
              <li>✓ Full property clean</li>
              <li>✓ Inside cabinets & closets</li>
              <li>✓ Landlord ready finish</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-green-700 font-bold text-lg">From $250</span>
              <button className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white text-sm font-semibold px-4 py-2 rounded-md transition-all">
                Get Quote
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-200 rounded-xl p-8 hover:border-green-600 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">🏢</div>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                Commercial
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Office Cleaning
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Professional cleaning for offices, retail spaces, and small businesses. After-hours available.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 mb-6">
              <li>✓ Offices & boardrooms</li>
              <li>✓ Retail spaces</li>
              <li>✓ After-hours scheduling</li>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-green-700 font-bold text-lg">Custom Quote</span>
              <button className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white text-sm font-semibold px-4 py-2 rounded-md transition-all">
                Get Quote
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;