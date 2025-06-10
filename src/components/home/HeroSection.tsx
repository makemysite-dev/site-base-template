
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&crop=center"
          alt="Mountain landscape with sun rays - travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-journeo-navy/70 via-journeo-navy/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              🌍 Travel that Feels Like{' '}
              <span className="text-terracotta">You.</span>
              <br />
              <span className="text-sand-beige">Crafted by Journeo.</span>
            </h1>
            
            <p className="mt-6 text-xl text-sky-blue leading-relaxed max-w-2xl">
              We don't sell packages. We design journeys—handpicked stays, seamless experiences, 
              and stories worth telling.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-4 text-lg font-medium"
              >
                <a 
                  href="https://wa.link/0top5g" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Let's Curate Your Trip
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-journeo-navy px-8 py-4 text-lg font-medium"
              >
                <a href="#destinations">
                  Explore Destinations
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-terracotta">150+</div>
                <div className="text-sm text-sky-blue">Happy Families</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-terracotta">20+</div>
                <div className="text-sm text-sky-blue">Destinations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-terracotta">100%</div>
                <div className="text-sm text-sky-blue">Personalized</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sky-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sky-blue rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
