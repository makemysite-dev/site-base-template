import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              MakeMySite.dev — Web Development Made Simple
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Professional websites. Made easy for you.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
                Our Story
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  At MakeMySite.dev, we believe web development should be accessible, efficient, and tailored to your needs — not just for tech giants or large corporations.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Whether you're a small business owner, a startup founder, or an individual looking to establish your online presence, we're here to make your digital journey smooth, professional, and impactful.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We don't just build websites. We create digital experiences — custom designs, responsive layouts, optimized performance, and user-friendly interfaces that stand out in today's digital landscape.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                    💻 Development Without the Complexity
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Skip the overwhelming technical details and expensive agencies. With MakeMySite.dev, you get a dedicated web development team that understands your vision and brings it to life.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-center italic">
                  Because your online presence deserves more than just a template—it deserves a custom solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                These principles guide every project, every design decision, and every line of code we write.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Client-Focused Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't just build what we think is best—we understand your goals. Your business needs,
                  target audience, and vision shape every decision we make. We listen first,
                  then develop.
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Modern Technology Stack
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No outdated frameworks or cookie-cutter solutions. Every project uses
                  cutting-edge technologies, optimized for performance, and built to scale
                  with your business.
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-6">🎨</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Custom, Not Template
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every website is uniquely designed from scratch. We consider your brand,
                  industry, and specific requirements to create something that truly represents you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">
              The Team Behind Your Website
            </h2>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We're a skilled team of web developers and designers, each bringing years of experience
                in creating successful online presences. From responsive design to SEO optimization,
                we've got every aspect covered.
              </p>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Expertise</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Custom web development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      UI/UX design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Performance optimization
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      SEO & analytics
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">We Specialize In</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      Business websites
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      E-commerce platforms
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      Portfolio sites
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      Web applications
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Project
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
