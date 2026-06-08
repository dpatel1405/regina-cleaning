import { useState } from 'react';

function Contact() {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xeewgjwn', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again or call us directly.');
    }

    setLoading(false);
  }

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Request a Free Quote
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Fill out the form below and we will get back to you within a few hours to confirm your booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left Side - Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg">
                  📞
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Phone</p>
                  <p className="text-gray-500 text-sm">(306) 555-0198</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg">
                  ✉️
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Email</p>
                  <p className="text-gray-500 text-sm">hello@reginaelitecleaning.ca</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg">
                  📍
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Location</p>
                  <p className="text-gray-500 text-sm">Regina, Saskatchewan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg">
                  🕐
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Business Hours</p>
                  <p className="text-gray-500 text-sm">Mon - Fri: 8am - 6pm</p>
                  <p className="text-gray-500 text-sm">Sat - Sun: 9am - 4pm</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <p className="text-gray-900 font-semibold text-sm mb-4">
                Why people trust us
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-700">✓</span>
                  <span className="text-gray-500 text-sm">Fully bonded and insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-700">✓</span>
                  <span className="text-gray-500 text-sm">Background checked staff</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-700">✓</span>
                  <span className="text-gray-500 text-sm">Satisfaction guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-700">✓</span>
                  <span className="text-gray-500 text-sm">Serving Regina since 2014</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Request Sent!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Thank you! We have received your request and will contact you within a few hours to confirm your booking.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl border border-gray-200 p-8"
              >
                {/* Name */}
                <div className="mb-5">
                  <label className="block text-gray-900 font-semibold text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-600 bg-white"
                  />
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className="block text-gray-900 font-semibold text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@email.com"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-600 bg-white"
                  />
                </div>

                {/* Phone */}
                <div className="mb-5">
                  <label className="block text-gray-900 font-semibold text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(306) 555-0000"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-600 bg-white"
                  />
                </div>

                {/* Address */}
                <div className="mb-5">
                  <label className="block text-gray-900 font-semibold text-sm mb-2">
                    Home Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Main St, Regina, SK"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-600 bg-white"
                  />
                </div>

                {/* Service */}
                <div className="mb-5">
                  <label className="block text-gray-900 font-semibold text-sm mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-600 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="moveinout">Move-In / Move-Out</option>
                    <option value="office">Office Cleaning</option>
                  </select>
                </div>

                {/* Date */}
                <div className="mb-8">
                  <label className="block text-gray-900 font-semibold text-sm mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-600 bg-white"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl text-sm transition-all disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Request Free Quote'}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;