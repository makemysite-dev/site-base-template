
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What exactly does Journeo Holidays do?",
    answer: "Journeo Holidays is a travel curation service. We design custom itineraries, suggest stays and activities, help with bookings, and provide visa/travel support. We don't sell pre-made packages — instead, we personalize your entire experience based on your preferences, budget, and travel style."
  },
  {
    question: "Do you only help with international trips?",
    answer: "Not at all! We curate both domestic (India) and international trips. Whether it's Himachal, the Northeast, Kerala, or international destinations like Bali, Dubai, Thailand, Europe — we're here to help you discover it your way."
  },
  {
    question: "Do you handle flight and hotel bookings?",
    answer: "Yes. Based on your budget and preferences, we assist with finding and booking flights and accommodations. We have partnerships with trusted providers to ensure you get the best deals and quality stays."
  },
  {
    question: "Is Journeo a travel agency?",
    answer: "Nope — we're not a traditional travel agency. Journeo is a travel curation company, meaning we focus on planning and personalization rather than selling fixed packages. Think of us as your travel consultants who create bespoke experiences."
  },
  {
    question: "How do I get started with Journeo Holidays?",
    answer: "Easy! WhatsApp us, email us, or fill the form on our site. Tell us your travel idea, preferred destination, budget range, and travel dates. We'll schedule a quick chat to understand your needs and get started on a custom plan."
  },
  {
    question: "Can you plan last-minute trips?",
    answer: "Yes! We do offer last-minute planning depending on availability and destination. However, reaching out 2-4 weeks earlier gives you better deals, more accommodation options, and time for proper visa processing if needed."
  },
  {
    question: "Where is Journeo based, and do you serve all of India?",
    answer: "We're based in Coimbatore, Tamil Nadu — but we're a 100% online service, so we work with travellers across India and NRIs abroad via WhatsApp, email, or calls. Distance is never a barrier to great travel planning!"
  },
  {
    question: "What are your service charges?",
    answer: "Our consultation and planning services have transparent fees that we discuss upfront based on the complexity of your trip. We believe in honest pricing with no hidden charges. Contact us for a detailed discussion about your specific requirements."
  },
  {
    question: "Do you provide travel insurance?",
    answer: "While we don't directly provide travel insurance, we strongly recommend it and can guide you to reliable insurance providers. We'll help you understand what coverage you need based on your destination and activities."
  },
  {
    question: "What if something goes wrong during my trip?",
    answer: "We provide 24/7 support during your travel period. If you face any issues with bookings, need to make changes, or require assistance, you can reach us via WhatsApp or phone. We're committed to ensuring your trip goes smoothly."
  },
  {
    question: "How far in advance should I plan my trip?",
    answer: "Ideally, 4-8 weeks for international trips and 2-4 weeks for domestic travel. This gives us time to: secure better flight deals, ensure visa processing (if needed), book preferred accommodations, and plan detailed itineraries."
  },
  {
    question: "Can you help with visa applications?",
    answer: "Yes! We provide visa guidance and documentation support. While we don't process visas directly, we'll help you understand requirements, prepare documents, and connect you with reliable visa service providers when needed."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-journeo-navy to-olive-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Everything You Want to Know About Journeo
            </h1>
            <p className="text-xl text-sky-blue max-w-3xl mx-auto leading-relaxed">
              Got questions? We've got answers. Here's everything you need to know about how we work, 
              our services, and planning your perfect trip.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-sand-beige">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg nature-shadow p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-sand-beige rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-journeo-navy hover:text-terracotta transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-journeo-navy leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-journeo-navy mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-journeo-navy mb-8 leading-relaxed">
              We're here to help! Reach out via WhatsApp, email, or give us a call. 
              No question is too small when it comes to planning your perfect trip.
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
                  Ask on WhatsApp
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-olive-green text-olive-green hover:bg-olive-green hover:text-white px-8 py-4"
              >
                <a href="/contact">
                  Send Us an Email
                </a>
              </Button>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-sand-beige p-6 rounded-lg">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold text-journeo-navy mb-2">WhatsApp</h3>
                <p className="text-sm text-journeo-navy">Quick responses within hours</p>
              </div>
              
              <div className="bg-sand-beige p-6 rounded-lg">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="font-semibold text-journeo-navy mb-2">Email</h3>
                <p className="text-sm text-journeo-navy">Detailed planning discussions</p>
              </div>
              
              <div className="bg-sand-beige p-6 rounded-lg">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold text-journeo-navy mb-2">Phone Call</h3>
                <p className="text-sm text-journeo-navy">Personal consultation</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
