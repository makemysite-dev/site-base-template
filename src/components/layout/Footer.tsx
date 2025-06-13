
import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-journeo-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <img
              className="h-12 w-auto mb-4 filter brightness-0 invert"
              src="/lovable-uploads/d13364a8-a356-4546-86d1-80cf77dd86b1.png"
              alt="Journeo Holidays"
            />
            <p className="text-sky-blue text-sm leading-relaxed mb-4">
              We don't sell packages. We design journeys—handpicked stays, seamless experiences, 
              and stories worth telling for Indian travellers seeking authentic adventures.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/journeo_holidays/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-blue hover:text-terracotta transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576242664980"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-blue hover:text-terracotta transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/journeo-holidays/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-blue hover:text-terracotta transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sky-blue hover:text-terracotta transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sky-blue hover:text-terracotta transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sky-blue hover:text-terracotta transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sky-blue hover:text-terracotta transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sky-blue hover:text-terracotta transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sky-blue hover:text-terracotta transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-terracotta" />
                <a
                  href="tel:+918667586166"
                  className="text-sky-blue hover:text-terracotta transition-colors text-sm"
                >
                  +91 8667586166
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-terracotta" />
                <a
                  href="mailto:journeoholidays@gmail.com"
                  className="text-sky-blue hover:text-terracotta transition-colors text-sm"
                >
                  journeoholidays@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.link/0top5g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-terracotta hover:bg-terracotta/90 text-white text-sm font-medium rounded-md transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sky-blue/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sky-blue text-sm">
              © 2024 Journeo Holidays. All rights reserved.
            </p>
            <p className="text-sky-blue text-sm mt-2 md:mt-0">
              Based in Coimbatore, Tamil Nadu • Serving all of India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
