function About() {
  return (
    <div>

      {/* Page Header */}
      <section className="bg-green-700 py-20 px-6 text-center">
        <p className="text-green-200 text-sm font-semibold uppercase tracking-widest mb-3">
          Our Story
        </p>
        <h1 className="text-5xl font-bold text-white mb-4">
          About Regina Elite Cleaning
        </h1>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          A local Regina business built on trust, quality, and community pride.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Mission
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              We believe everyone deserves a clean home
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Founded in 2014, Regina Elite Cleaning was built on a simple idea — that professional cleaning should be reliable, affordable, and stress-free for every family in Regina.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              We started as a small team of two and have grown to serve over 500 happy clients across the city. Every clean we do is backed by our 100% satisfaction guarantee.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              We are proud to be a local Regina business — your neighbours, your community, your cleaning team.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-700 mb-2">10+</div>
                <div className="text-gray-500 text-sm">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
                <div className="text-gray-500 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-700 mb-2">4.9★</div>
                <div className="text-gray-500 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-700 mb-2">100%</div>
                <div className="text-gray-500 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Team
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet The People Behind The Clean
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every member of our team is background-checked, trained, and genuinely passionate about cleaning.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                SM
              </div>
              <h3 className="text-gray-900 font-bold mb-1">Sarah Mitchell</h3>
              <p className="text-green-700 text-sm font-semibold mb-3">Founder & Owner</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Started Regina Elite in 2014 with a passion for helping families enjoy cleaner, happier homes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                JR
              </div>
              <h3 className="text-gray-900 font-bold mb-1">James Rodriguez</h3>
              <p className="text-green-700 text-sm font-semibold mb-3">Lead Cleaner</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                8 years of professional cleaning experience. Known for his attention to detail and friendly service.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                AP
              </div>
              <h3 className="text-gray-900 font-bold mb-1">Amanda Park</h3>
              <p className="text-green-700 text-sm font-semibold mb-3">Customer Success</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Amanda handles all bookings and makes sure every client has a seamless experience from start to finish.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Values
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-gray-900 font-bold mb-2">Trust</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We earn your trust through consistent quality, honesty, and showing up when we say we will.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-gray-900 font-bold mb-2">Quality</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We never cut corners. Every clean meets our high standards before we consider the job done.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-gray-900 font-bold mb-2">Community</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We are Regina locals who care about our city and the families and businesses we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;