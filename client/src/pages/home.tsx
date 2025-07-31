import Topbar from "@/components/topbar";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import BlogPreviewSection from "@/components/blog-preview-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <Topbar />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BlogPreviewSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
