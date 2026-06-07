function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-4 gap-12">

          {/* Column 1 - Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <span className="text-green-400 font-bold text-2xl">Regina Elite</span>
              <span className="text-gray-400 text-sm ml-2">Cleaning Co.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional cleaning services for homes and businesses across Regina, Saskatchewan. Trusted by 500+ families since 2014.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-sm">📞 (306) 555-0198</span>
              <span className="text-gray-400 text-sm">✉️ hello@reginaelitecleaning.ca</span>
              <span className="text-gray-400 text-sm">📍 Regina, Saskatchewan</span>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              <a href="/" className="text-gray-400 text-sm hover:text-green-400">
                Residential Cleaning
              </a>
              <a href="/" className="text-gray-400 text-sm hover:text-green-400">
                Deep Cleaning
              </a>
              <a href="/" className="text-gray-400 text-sm hover:text-green-400">
                Move-In / Move-Out
              </a>
              <a href="/" className="text-gray-400 text-sm hover:text-green-400">
                Office Cleaning
              </a>
            </div>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              <a href="/about" className="text-gray-400 text-sm hover:text-green-400">
                About Us
              </a>
              <a href="/contact" className="text-gray-400 text-sm hover:text-green-400">
                Contact
              </a>
              <a href="/quote" className="text-gray-400 text-sm hover:text-green-400">
                Get a Quote
              </a>
              <a href="/booking" className="text-gray-400 text-sm hover:text-green-400">
                Book Online
              </a>
              <a href="/faq" className="text-gray-400 text-sm hover:text-green-400">
                FAQ
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2025 Regina Elite Cleaning Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-500 text-sm hover:text-green-400">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 text-sm hover:text-green-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;