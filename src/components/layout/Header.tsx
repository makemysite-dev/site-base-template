import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const location = useLocation();
  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Blogs', href: '/blogs', current: false },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-sand-beige sticky top-0 z-50">
      <Head>
        <title>Sample Builder</title>
        <meta name="robots" content="noindex, nofollow"></meta>
        {/* <meta name="description" content="Journeo Holidays - Curated Travel Experiences" />
        <meta property="og:title" content="Journeo Holidays" />
        <meta property="og:description" content="Journeo Holidays - Curated Travel Experiences" />
        <meta property="og:image" content="/lovable-uploads/d13364a8-a356-4546-86d1-80cf77dd86b1.png" /> */}
      </Head>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src=""
                alt="Sample Builder"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${item.current
                    ? 'text-terracotta border-b-2 border-terracotta'
                    : 'text-journeo-navy hover:text-terracotta'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-terracotta hover:bg-terracotta/90 text-white px-6 py-2 font-medium"
            >
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan My Trip
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-journeo-navy" />
              ) : (
                <Menu className="h-6 w-6 text-journeo-navy" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-sand-beige">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${item.current
                    ? 'text-terracotta bg-sand-beige'
                    : 'text-journeo-navy hover:text-terracotta hover:bg-sand-beige'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-terracotta hover:bg-terracotta/90 text-white"
                >
                  <a
                    href="https://wa.link/0top5g"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Plan My Trip
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
