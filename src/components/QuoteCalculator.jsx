import { useState } from 'react';

function QuoteCalculator() {

  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [deepClean, setDeepClean] = useState(false);

function calculatePrice() {
    if (bedrooms === 0 && bathrooms === 0 && deepClean === false) {
      return 0;
    }
    let base = 80;
    base = base + bedrooms * 25;
    base = base + bathrooms * 20;
    if (deepClean) {
      base = base + 60;
    }
    return base;
  }

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Instant Pricing
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tell us about your home and get an instant price estimate — no commitment required.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 p-10">

          {/* Bedrooms */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">
              Number of Bedrooms
            </label>
            <div className="flex gap-3">
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setBedrooms(num)}
                  className={`w-12 h-12 rounded-lg border font-semibold text-sm transition-all ${
                    bedrooms === num
                      ? 'bg-green-700 text-white border-green-700'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-green-600'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div className="mb-8">
            <label className="block text-gray-900 font-semibold mb-3">
              Number of Bathrooms
            </label>
            <div className="flex gap-3">
              {[0, 1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setBathrooms(num)}
                  className={`w-12 h-12 rounded-lg border font-semibold text-sm transition-all ${
                    bathrooms === num
                      ? 'bg-green-700 text-white border-green-700'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-green-600'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Deep Clean */}
          <div className="mb-10">
            <label className="block text-gray-900 font-semibold mb-3">
              Deep Clean?
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setDeepClean(false)}
                className={`px-6 py-3 rounded-lg border font-semibold text-sm transition-all ${
                  deepClean === false
                    ? 'bg-green-700 text-white border-green-700'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-green-600'
                }`}
              >
                No
              </button>
              <button
                onClick={() => setDeepClean(true)}
                className={`px-6 py-3 rounded-lg border font-semibold text-sm transition-all ${
                  deepClean === true
                    ? 'bg-green-700 text-white border-green-700'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-green-600'
                }`}
              >
                Yes — Deep Clean (+$60)
              </button>
            </div>
          </div>

          {/* Price Result */}
          <div className="bg-green-700 rounded-xl p-6 text-center text-white mb-6">
            <p className="text-green-200 text-sm mb-1">Estimated Cost</p>
            <p className="text-5xl font-bold">${calculatePrice()}</p>
            <p className="text-green-200 text-sm mt-2">
              Final price confirmed after walkthrough
            </p>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl text-lg transition-all">
            Book This Clean
          </button>

        </div>
      </div>
    </section>
  );
}

export default QuoteCalculator;