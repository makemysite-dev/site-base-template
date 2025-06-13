
import { Button } from '@/components/ui/button';
import Link from 'next/link'

const destinations = [
  {
    id: 'bali',
    name: 'Bali for the Soul',
    description: 'Surf, temples, family cafes, and waterfalls you won\'t find on Google Maps.',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
    emoji: '🌴'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya Unplugged',
    description: 'Clouds, caves, and slow-living moments in India\'s most beautiful state.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
    emoji: '🏞️'
  },
  {
    id: 'dubai',
    name: 'Dubai in Layers',
    description: 'Not just luxury, but local life, art, and spice-souk aromas.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
    emoji: '🕌'
  }
];

const FeaturedDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-journeo-navy mb-6">
            Featured Destinations with Story
          </h2>
          <p className="text-xl text-journeo-navy max-w-3xl mx-auto">
            Every destination we curate comes with its own narrative, designed to create 
            moments that stay with you long after you return home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-lg nature-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={destination.image}
                  alt={`${destination.name} travel destination`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-journeo-navy/80 via-journeo-navy/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-2xl mb-2">{destination.emoji}</div>
                <h3 className="text-xl font-serif font-bold mb-2">
                  {destination.name}
                </h3>
                <p className="text-sky-blue text-sm leading-relaxed">
                  {destination.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-olive-green hover:bg-olive-green/90 text-white px-8 py-4"
          >
            <Link href="/destinations">
              Discover All Destinations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
