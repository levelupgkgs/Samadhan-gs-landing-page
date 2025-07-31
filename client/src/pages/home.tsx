import Topbar from "../components/topbar";
import Navigation from './../components/navigation';
import HeroSection from './../components/hero-section';
import FeaturesSection from './../components/features-section';
import BlogPreviewSection from './../components/blog-preview-section';
import TestimonialsSection from './../components/testimonials-section';
import CTASection from './../components/cta-section';
import Footer from './../components/footer';
import SEOHead from './../components/seo-head';
import { WebsiteStructuredData } from './../components/structured-data';

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <SEOHead
        title="Samadhan GS - Master Competitive Exams with Expert PDF Resources"
        description="Crack UPSC, SSC, Banking & Railway exams with Samadhan GS. Access 1000+ free PDF study materials, exam analysis, GK updates & expert preparation tips. Start your success journey today!"
        keywords="competitive exams, UPSC preparation, SSC, banking exams, railway jobs, GK PDF, current affairs, study materials, exam analysis, government jobs, free PDF books, competitive exam app"
        url="https://samadhang.replit.app/"
        type="website"
      />
      <WebsiteStructuredData
        name="Samadhan GS"
        description="Master competitive exams with expert PDF resources, study materials, and exam analysis"
        url="https://samadhang.replit.app/"
      />
      <Topbar />
      <Navigation />
      <div className="pt-12 md:pt-28">
        <HeroSection />
      </div>
      <FeaturesSection />
      <BlogPreviewSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
