import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import MetricsSection from "@/components/home/MetricsSection";
import GearCatalog from "@/components/home/GearCatalog";
import MaterialSection from "@/components/home/MaterialSection";
import TeamSection from "@/components/home/TeamSection";
import ActionImageSection from "@/components/home/ActionImageSection";
import TournamentsSection from "@/components/home/TournamentsSection";
import BlogSection from "@/components/home/BlogSection";
import WarrantySection from "@/components/home/WarrantySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PartnersSection />
    <FeaturesSection />
    <MetricsSection />
    <GearCatalog />
    <MaterialSection />
    <TeamSection />
    <ActionImageSection />
    <TournamentsSection />
    <BlogSection />
    <WarrantySection />
    <ReviewsSection />
    <CtaSection />
    <Footer />
  </div>
);

export default Index;
