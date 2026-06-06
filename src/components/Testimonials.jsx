function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Customer Reviews
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved By Regina Homeowners
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Don't just take our word for it — here's what our customers have to say.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-2 gap-8">

          {/* Review 1 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-yellow-400 text-lg mb-4">
              ★★★★★
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
              "Regina Elite has been cleaning our home for 2 years. They are thorough, always on time, and I come home to a spotless house every single time. Absolutely worth every penny."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-sm">
                SL
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Sarah L.</div>
                <div className="text-gray-400 text-xs">Lakeview, Regina</div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-yellow-400 text-lg mb-4">
              ★★★★★
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
              "Used them for a move-out clean and got my full deposit back. The team was fast, professional, and incredibly detailed. I highly recommend Regina Elite to anyone moving."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-sm">
                MT
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Mike T.</div>
                <div className="text-gray-400 text-xs">Harbour Landing, Regina</div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-yellow-400 text-lg mb-4">
              ★★★★★
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
              "Booked a deep clean before hosting family for the holidays. I have never seen my oven look so clean. They cleaned things I did not even know needed cleaning. Incredible job!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-sm">
                JK
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Jennifer K.</div>
                <div className="text-gray-400 text-xs">Whitmore Park, Regina</div>
              </div>
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100">
            <div className="text-yellow-400 text-lg mb-4">
              ★★★★★
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
              "Our office has never looked better. The team is discreet, efficient, and incredibly professional. Great communication from booking all the way to completion. Will use again!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-sm">
                DR
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">David R.</div>
                <div className="text-gray-400 text-xs">Downtown Regina</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-14 bg-green-700 rounded-xl px-10 py-8 flex items-center justify-between">
          <div className="text-white">
            <div className="text-2xl font-bold mb-1">4.9 out of 5 stars</div>
            <div className="text-green-200 text-sm">Based on 200+ verified reviews</div>
          </div>
          <div className="text-white text-center">
            <div className="text-2xl font-bold mb-1">500+</div>
            <div className="text-green-200 text-sm">Happy Customers</div>
          </div>
          <div className="text-white text-center">
            <div className="text-2xl font-bold mb-1">10+ Years</div>
            <div className="text-green-200 text-sm">Serving Regina</div>
          </div>
          <button className="bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-green-50">
            Read All Reviews
          </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;