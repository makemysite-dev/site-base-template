
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    message: "Hey! Just landed in bangalore. Krabi was stunning. Thank you, team Journeo. You guys didn't miss a thing!",
    name: "Nisha",
    location: "Bangalore",
    trip: "Thailand - Krabi",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    message: "Our Sri Lanka trip felt like a movie! Hotels, transfers, that hidden waterfall stop—magical!",
    name: "Ashwin & Meera",
    location: "Coimbatore",
    trip: "Sri Lanka Honeymoon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1515810313723-1cef343b8372?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    message: "Booked a last-minute Dubai trip. Saved money, saw everything. Highly recommend Journeo!",
    name: "Ravi",
    location: "Hyderabad",
    trip: "Dubai City Break",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    message: "The Bali family trip was perfect! Kids loved the cooking class, we loved the spa. Everyone happy! 😊",
    name: "Priya & Family",
    location: "Chennai",
    trip: "Bali Family Adventure",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    message: "Journeo made our Nepal trek so easy to plan. The mountain views were beyond description!",
    name: "Vikram",
    location: "Mumbai",
    trip: "Nepal Trekking",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    message: "Maldives honeymoon was a dream! The overwater villa, sunset dinner... everything was perfect ❤️",
    name: "Kavya & Arjun",
    location: "Pune",
    trip: "Maldives Honeymoon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-terracotta to-journeo-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Real Journeys. Real People.
            </h1>
            <p className="text-xl text-sky-blue max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our fellow travellers have to say 
              about their experiences with Journeo Holidays.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-sand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-terracotta mb-2">150+</div>
                <div className="text-sm text-journeo-navy">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-terracotta mb-2">20+</div>
                <div className="text-sm text-journeo-navy">Destinations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-terracotta mb-2">4.9</div>
                <div className="text-sm text-journeo-navy">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-terracotta mb-2">100%</div>
                <div className="text-sm text-journeo-navy">Personalized</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-sand-beige p-6 rounded-lg nature-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* WhatsApp-style message */}
                  <div className="bg-white p-4 rounded-lg mb-4 relative">
                    <div className="text-xs text-journeo-navy/60 mb-2">💬 WhatsApp</div>
                    <p className="text-journeo-navy italic leading-relaxed text-sm">
                      "{testimonial.message}"
                    </p>
                    <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                  
                  {/* Profile */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} profile`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-journeo-navy text-sm">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-journeo-navy/70">
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-terracotta font-medium">
                        {testimonial.trip}
                      </p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-sm">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-journeo-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-xl text-sky-blue mb-8 leading-relaxed">
              Join our family of happy travellers. Let's plan your next unforgettable journey together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Start Planning on WhatsApp
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-journeo-navy px-8 py-4"
              >
                <a href="/contact">
                  Send Us an Email
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
