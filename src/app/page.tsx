import AboutUs from "@/components/AboutUs";
import AmenitiesSection from "@/components/AmenitiesSection";
import ExpertTeam from "@/components/ExpertTeam";
import SpecificationsFAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import KeyPrinciples from "@/components/KeyPrinciples";
import LocationSection from "@/components/LocationSection";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <ExpertTeam />
      <AboutUs />
      <VideoSection />
      <GallerySection />
      <TestimonialsSection />
      <SpecificationsFAQ />
      <KeyPrinciples />
      <WhyChooseUs />
      <AmenitiesSection />
      <LocationSection />
      <Footer />
      
    </main>
  );
}