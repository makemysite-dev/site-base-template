
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-terracotta to-journeo-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Stories of Journeo
            </h1>
            <p className="text-xl text-sky-blue max-w-3xl mx-auto leading-relaxed">
              Discover travel tales, insider tips, and curated experiences from our journeys around the world.
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-journeo-navy mb-6">
                Coming Soon
              </h2>
              <p className="text-lg text-journeo-navy/70 mb-8 leading-relaxed">
                We're working on bringing you inspiring travel stories, destination guides, 
                and insider tips from our curated journeys. Stay tuned for amazing content!
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
                  Plan Your Story With Us
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

export default Blogs;
