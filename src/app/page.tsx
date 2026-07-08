import AboutUs from "@/components/AboutUs";
import AmenitiesSection from "@/components/AmenitiesSection";
import ConsultationWidget from "@/components/ConsultationWidget";
import ExpertTeam from "@/components/ExpertTeam";
import SpecificationsFAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import KeyPrinciples from "@/components/KeyPrinciples";
import LegacySection from "@/components/LegacySection";
import LocationSection from "@/components/LocationSection";
import LuxuryShowcase from "@/components/LuxuryShowcase";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <ConsultationWidget />
      <ExpertTeam />
      <AboutUs />
      <VideoSection />
      <GallerySection />
      <LocationSection />
     <LuxuryShowcase />
      <KeyPrinciples />
      <LegacySection />
      <WhyChooseUs />
       <SpecificationsFAQ />
      <TestimonialsSection />
     
      <Footer />
      
    </main>
  );
}