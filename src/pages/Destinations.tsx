
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const destinations = [
  {
    name: 'Thailand',
    title: '7-Day Honeymoon in Krabi & Phuket',
    description: 'White beaches, island hopping, spa days, and floating breakfast experiences.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop',
    highlights: ['Private beach dinners', 'Island hopping tours', 'Couples spa sessions', 'Floating breakfast'],
    duration: '7 Days',
    from: '₹85,000'
  },
  {
    name: 'Bali',
    title: 'Family Adventure in Bali',
    description: 'Ubud rice fields, cooking classes, and hidden waterfalls perfect for families.',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
    highlights: ['Traditional cooking classes', 'Rice terrace walks', 'Waterfall adventures', 'Cultural performances'],
    duration: '8 Days',
    from: '₹65,000'
  },
  {
    name: 'Dubai',
    title: 'City of Contrasts',
    description: 'Gold souks, desert safaris, sky-high views, and budget-friendly local experiences.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
    highlights: ['Desert safari experiences', 'Gold souk exploration', 'Burj Khalifa visits', 'Local food tours'],
    duration: '5 Days',
    from: '₹45,000'
  },
  {
    name: 'Sri Lanka',
    title: 'Tea Hills & Ancient Wonders',
    description: 'Sunrise over tea plantations, ancient temples, and coastal train journeys.',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop',
    highlights: ['Tea plantation tours', 'Temple visits', 'Scenic train rides', 'Wildlife safaris'],
    duration: '6 Days',
    from: '₹55,000'
  },
  {
    name: 'Maldives',
    title: 'Overwater Paradise',
    description: 'Crystal clear waters, overwater villas, and world-class diving experiences.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    highlights: ['Overwater villa stays', 'Snorkeling & diving', 'Sunset cruises', 'Private beach access'],
    duration: '5 Days',
    from: '₹1,20,000'
  },
  {
    name: 'Nepal',
    title: 'Himalayan Serenity',
    description: 'Mountain vistas, spiritual journeys, and authentic cultural experiences.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
    highlights: ['Mountain trekking', 'Buddhist monasteries', 'Local village stays', 'Sunrise views'],
    duration: '7 Days',
    from: '₹40,000'
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-journeo-navy to-olive-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Destinations Crafted with Stories
            </h1>
            <p className="text-xl text-sky-blue max-w-3xl mx-auto leading-relaxed">
              Whether it's sunrise over Sri Lanka's tea hills or scuba diving in the Maldives, 
              our trips are designed around moments, not margins.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 bg-sand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <div
                  key={destination.name}
                  className="bg-white rounded-lg overflow-hidden nature-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={destination.image}
                      alt={`${destination.name} travel destination`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                      {destination.duration}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-journeo-navy/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      From {destination.from}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-journeo-navy mb-2">
                      {destination.title}
                    </h3>
                    <p className="text-journeo-navy text-sm mb-4 leading-relaxed">
                      {destination.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-journeo-navy mb-2">Highlights:</h4>
                      <ul className="text-xs text-journeo-navy space-y-1">
                        {destination.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-terracotta rounded-full mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button
                      asChild
                      className="w-full bg-olive-green hover:bg-olive-green/90 text-white"
                    >
                      <a 
                        href="https://wa.link/0top5g" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Let's Plan This Trip
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-white p-8 rounded-lg nature-shadow max-w-2xl mx-auto">
                <h2 className="text-2xl font-serif font-bold text-journeo-navy mb-4">
                  Don't See Your Dream Destination?
                </h2>
                <p className="text-journeo-navy mb-6">
                  We curate trips to 20+ destinations worldwide. Tell us where you want to go, 
                  and we'll craft the perfect journey for you.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-4"
                >
                  <a 
                    href="https://wa.link/0top5g" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Tell Us Your Dream Destination
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;
