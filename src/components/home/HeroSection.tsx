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
              🚀 Build Your Dream Site{' '}
              <span className="text-terracotta">Today.</span>
              <br />
              <span className="text-sand-beige">Powered by makemysite.dev</span>
            </h1>

            <p className="mt-6 text-xl text-sky-blue leading-relaxed max-w-2xl">
              No coding required. Just describe your vision, and we'll create a stunning website
              that perfectly captures your brand and message.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-4 text-lg font-medium"
              >
                <a
                  href="/create"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Building Now
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-journeo-navy px-8 py-4 text-lg font-medium"
              >
                <a href="#features">
                  See How It Works
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-terracotta">100+</div>
                <div className="text-sm text-sky-blue">Sites Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-terracotta">5min</div>
                <div className="text-sm text-sky-blue">Setup Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-terracotta">100%</div>
                <div className="text-sm text-sky-blue">No Code</div>
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
