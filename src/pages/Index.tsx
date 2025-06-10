
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import PromiseSection from '@/components/home/PromiseSection';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PromiseSection />
        <FeaturedDestinations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
