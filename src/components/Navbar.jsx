import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <span className="text-green-700 font-bold text-xl tracking-tight">
            Regina Elite
          </span>
          <span className="text-gray-500 text-sm font-medium ml-2">
            Cleaning Co.
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-gray-600 text-sm hover:text-green-700">Home</Link>
          <Link to="/services" className="text-gray-600 text-sm hover:text-green-700">Services</Link>
          <Link to="/about" className="text-gray-600 text-sm hover:text-green-700">About</Link>
          <Link to="/contact" className="text-gray-600 text-sm hover:text-green-700">Contact</Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-gray-500 text-sm">📞 (306) 555-0198</span>
          <Link to="/contact">
            <button className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2 rounded-md">
              Free Estimate
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 text-2xl focus:outline-none"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 text-sm hover:text-green-700"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 text-sm hover:text-green-700"
          >
            Services
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 text-sm hover:text-green-700"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 text-sm hover:text-green-700"
          >
            Contact
          </Link>
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <span className="text-gray-500 text-sm">📞 (306) 555-0198</span>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-3 rounded-md">
                Free Estimate
              </button>
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;