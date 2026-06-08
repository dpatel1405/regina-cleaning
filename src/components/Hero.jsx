function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-block bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            ★ Regina's Most Trusted Cleaning Service
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Enjoy Your Freshly Cleaned Home
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl">
            Professional, reliable cleaning services for homes and businesses in Regina. Stress-free booking. Satisfaction guaranteed.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-md text-lg w-full sm:w-auto transition-all">
              Get A Free Estimate
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-md text-lg w-full sm:w-auto transition-all">
              📞 (306) 555-0198
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-gray-300 text-sm mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-gray-300 text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-gray-300 text-sm mt-1">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-300 text-sm mt-1">Satisfaction Guaranteed</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;