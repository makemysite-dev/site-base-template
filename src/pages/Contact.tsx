
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDates: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi Journeo! I'd like to plan a trip.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Destination: ${formData.destination || 'Open to suggestions'}
Travel Dates: ${formData.travelDates || 'Flexible'}
Message: ${formData.message || 'Please help me plan my trip!'}`;

    const whatsappUrl = `https://wa.me/918667586166?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll respond to your message within a few hours!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-olive-green to-sky-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Let's Start Your Story
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Tell us your preferred destination, budget, and travel dates—or just say hello. 
              We'll get back with something unforgettable.
            </p>
          </div>
        </section>

        <section className="py-20 bg-sand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg nature-shadow">
                <h2 className="text-2xl font-serif font-bold text-journeo-navy mb-6">
                  Plan My Trip
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-journeo-navy font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-journeo-navy font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-journeo-navy font-medium">
                      Phone (Call/WhatsApp) *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="destination" className="text-journeo-navy font-medium">
                        Preferred Destination
                      </Label>
                      <Input
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Bali, Thailand, Dubai..."
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="travelDates" className="text-journeo-navy font-medium">
                        Travel Dates
                      </Label>
                      <Input
                        id="travelDates"
                        name="travelDates"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="December 2024"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-journeo-navy font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1"
                      rows={4}
                      placeholder="Tell us about your travel dreams, budget, group size, or any special requirements..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-4"
                  >
                    Plan My Trip via WhatsApp
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg nature-shadow">
                  <h2 className="text-2xl font-serif font-bold text-journeo-navy mb-6">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-terracotta p-3 rounded-full">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-journeo-navy">Phone / WhatsApp</h3>
                        <a
                          href="tel:+918667586166"
                          className="text-journeo-navy hover:text-terracotta transition-colors"
                        >
                          +91 8667586166
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-olive-green p-3 rounded-full">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-journeo-navy">Email</h3>
                        <a
                          href="mailto:journeoholidays@gmail.com"
                          className="text-journeo-navy hover:text-terracotta transition-colors"
                        >
                          journeoholidays@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-sky-blue p-3 rounded-full">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-journeo-navy">WhatsApp Direct</h3>
                        <a
                          href="https://wa.link/0top5g"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-journeo-navy hover:text-terracotta transition-colors"
                        >
                          Click to Chat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white p-8 rounded-lg nature-shadow">
                  <h3 className="text-xl font-serif font-bold text-journeo-navy mb-4">
                    Follow Our Journey
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <a
                      href="https://www.instagram.com/journeo_holidays/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 bg-sand-beige rounded-lg hover:bg-terracotta hover:text-white transition-all duration-300 group"
                    >
                      <Instagram className="h-6 w-6 mb-2 text-terracotta group-hover:text-white" />
                      <span className="text-xs font-medium text-journeo-navy group-hover:text-white">Instagram</span>
                    </a>
                    
                    <a
                      href="https://www.facebook.com/profile.php?id=61576242664980"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 bg-sand-beige rounded-lg hover:bg-terracotta hover:text-white transition-all duration-300 group"
                    >
                      <Facebook className="h-6 w-6 mb-2 text-terracotta group-hover:text-white" />
                      <span className="text-xs font-medium text-journeo-navy group-hover:text-white">Facebook</span>
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/company/journeo-holidays/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 bg-sand-beige rounded-lg hover:bg-terracotta hover:text-white transition-all duration-300 group"
                    >
                      <Linkedin className="h-6 w-6 mb-2 text-terracotta group-hover:text-white" />
                      <span className="text-xs font-medium text-journeo-navy group-hover:text-white">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-journeo-navy p-6 rounded-lg text-center">
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-sky-blue text-sm">
                    We typically respond within 2-4 hours during business hours. 
                    For urgent queries, WhatsApp is the fastest way to reach us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
