
const PromiseSection = () => {
  return (
    <section className="py-20 bg-sand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-journeo-navy mb-6">
            Our Promise
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-journeo-navy leading-relaxed mb-8">
              Journeo Holidays is where wanderlust meets wisdom. For Indian travellers seeking 
              soulful journeys—from misty mountains to turquoise coasts—we handcraft every moment, 
              based on who you are.
            </p>
            
            <div className="bg-white p-8 rounded-lg nature-shadow">
              <h3 className="text-2xl font-serif font-semibold text-journeo-navy mb-4">
                Why Choose Curated Travel?
              </h3>
              <p className="text-journeo-navy leading-relaxed">
                Planning a honeymoon, family vacation or solo soul-search? We curate immersive, 
                customized trips to Thailand, Sri Lanka, Bali, Dubai, and 20+ destinations. 
                No cookie-cutter packages—just handcrafted experiences tailored to your dreams, 
                budget, and travel style.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="text-xl font-serif font-semibold text-journeo-navy mb-2">
              Empathy-Led Planning
            </h3>
            <p className="text-journeo-navy">
              We listen to your travel dreams and craft experiences that resonate with your soul.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-serif font-semibold text-journeo-navy mb-2">
              Authenticity Over Algorithms
            </h3>
            <p className="text-journeo-navy">
              Real connections, genuine experiences, and hidden gems you won't find in guidebooks.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🧳</div>
            <h3 className="text-xl font-serif font-semibold text-journeo-navy mb-2">
              Crafted, Not Compiled
            </h3>
            <p className="text-journeo-navy">
              Every itinerary is thoughtfully designed, not copy-pasted from generic templates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
