function Hero() {
  return (
    <section className="bg-white py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Badge */}
        <div className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-6">
          ★ Regina's Most Trusted Cleaning Service
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
          Enjoy Your Freshly Cleaned Home
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl">
          Professional, reliable cleaning services for homes and businesses in Regina.
          Stress-free booking. Satisfaction guaranteed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-md w-full sm:w-auto">
            Get A Free Estimate
          </button>
          <button className="border border-gray-300 hover:border-green-700 text-gray-700 hover:text-green-700 font-semibold px-8 py-3 rounded-md w-full sm:w-auto">
            📞 Call Us Now
          </button>
        </div>

        {/* Stats Bar */}
        <div className="w-full border-t border-gray-100 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-gray-400 text-sm mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">10+</div>
            <div className="text-gray-400 text-sm mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">4.9★</div>
            <div className="text-gray-400 text-sm mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">100%</div>
            <div className="text-gray-400 text-sm mt-1">Satisfaction Guaranteed</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;