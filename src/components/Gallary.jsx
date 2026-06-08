import { useState } from 'react';

function Gallery() {

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Kitchen', 'Bathroom', 'Living Room', 'Bedroom'];

  const images = [
    {
      category: 'Kitchen',
      after: '/images/kitchen-after.jpg',
      title: 'Kitchen Deep Clean',
      description: 'Full kitchen deep clean including appliances and cabinets'
    },
    {
      category: 'Bathroom',
      after: '/images/bathroom-after.jpg',
      title: 'Bathroom Refresh',
      description: 'Complete bathroom sanitization and scrubbing'
    },
    {
      category: 'Living Room',
      after: '/images/living-after.jpg',
      title: 'Living Room Clean',
      description: 'Full dusting, vacuuming and surface clean'
    },
    {
      category: 'Bedroom',
      after: '/images/bedroom-after.jpg',
      title: 'Bedroom Fresh Clean',
      description: 'Complete bedroom clean including under furniture'
    },
  ];

  const filtered = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See The Results
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real results from real Regina homes. Every clean is done to our highest standard.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-green-700 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-green-600 hover:text-green-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.after}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ✓ After Clean
                </div>
                <div className="absolute top-4 right-4 bg-white text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-gray-900 font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-4">
            Want results like these in your home?
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition-all">
            Get A Free Quote
          </button>
        </div>

      </div>
    </section>
  );
}

export default Gallery;