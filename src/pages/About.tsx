
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-olive-green to-journeo-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-sky-blue max-w-3xl mx-auto leading-relaxed">
              Born over cups of chai, maps scribbled with dreams, and stories shared by the sea.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-sand-beige">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-lg nature-shadow">
              <h2 className="text-3xl font-serif font-bold text-journeo-navy mb-8 text-center">
                Our Story
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-journeo-navy leading-relaxed mb-6">
                  Journeo was born over cups of chai, maps scribbled with dreams, and stories shared by the sea. 
                  We are travel curators who've worked with over <strong>150+ Indian families</strong>, couples, 
                  and solo wanderers to design deeply personal journeys.
                </p>
                
                <p className="text-journeo-navy leading-relaxed mb-6">
                  No agents. No "one-size-fits-all." Just real conversations, handcrafted plans, and a promise 
                  to care about your trip as much as you do. Based in the heart of Coimbatore, Tamil Nadu, 
                  we serve travellers across India through our completely digital approach.
                </p>

                <p className="text-journeo-navy leading-relaxed">
                  We believe that travel should be transformative, not transactional. Every itinerary we create 
                  tells a story—your story—woven together with authentic experiences, meaningful connections, 
                  and moments that stay with you long after you return home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-journeo-navy mb-6">
                Our Values
              </h2>
              <p className="text-xl text-journeo-navy max-w-3xl mx-auto">
                These principles guide every conversation, every recommendation, and every journey we craft.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-6xl mb-6">🌾</div>
                <h3 className="text-2xl font-serif font-bold text-journeo-navy mb-4">
                  Empathy-Led Planning
                </h3>
                <p className="text-journeo-navy leading-relaxed">
                  We don't just ask where you want to go—we understand why. Your travel dreams, 
                  concerns, and expectations shape every recommendation we make. We listen first, 
                  then create.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-6">✨</div>
                <h3 className="text-2xl font-serif font-bold text-journeo-navy mb-4">
                  Authenticity Over Algorithms
                </h3>
                <p className="text-journeo-navy leading-relaxed">
                  No generic recommendations or AI-generated lists. Every suggestion comes from 
                  real experiences, trusted local connections, and places we'd recommend to our 
                  own family.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-6">🧳</div>
                <h3 className="text-2xl font-serif font-bold text-journeo-navy mb-4">
                  Crafted, Not Compiled
                </h3>
                <p className="text-journeo-navy leading-relaxed">
                  Every itinerary is thoughtfully designed from scratch. We consider your budget, 
                  travel style, interests, and even small preferences to create something uniquely yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-sand-beige">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold text-journeo-navy mb-8">
              The Team Behind Your Journey
            </h2>
            
            <div className="bg-white p-8 md:p-12 rounded-lg nature-shadow">
              <p className="text-xl text-journeo-navy leading-relaxed mb-8">
                We're a close-knit team of travel enthusiasts, each bringing years of experience 
                in crafting memorable journeys. From understanding visa requirements to finding 
                that perfect sunset spot, we've got every detail covered.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-journeo-navy mb-2">Our Expertise</h3>
                  <ul className="text-journeo-navy space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-terracotta rounded-full mr-3"></span>
                      Destination research & planning
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-terracotta rounded-full mr-3"></span>
                      Visa & documentation support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-terracotta rounded-full mr-3"></span>
                      Budget optimization
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-terracotta rounded-full mr-3"></span>
                      Local connections & experiences
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-journeo-navy mb-2">We Specialize In</h3>
                  <ul className="text-journeo-navy space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-olive-green rounded-full mr-3"></span>
                      Honeymoon & romantic getaways
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-olive-green rounded-full mr-3"></span>
                      Family vacations
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-olive-green rounded-full mr-3"></span>
                      Solo & group adventures
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-olive-green rounded-full mr-3"></span>
                      Cultural & spiritual journeys
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12">
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
                  Let's Start Planning Together
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

export default About;
