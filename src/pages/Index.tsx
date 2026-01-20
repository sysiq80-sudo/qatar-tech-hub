import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppsSection from "@/components/AppsSection";
import DevelopSection from "@/components/DevelopSection";
import InvestSection from "@/components/InvestSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AppsSection />
      <DevelopSection />
      <InvestSection />
      <Footer />
    </div>
  );
};

export default Index;
