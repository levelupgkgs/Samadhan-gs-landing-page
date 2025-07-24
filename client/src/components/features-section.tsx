import { motion } from "framer-motion";
import { Book, Heart, Download, Lightbulb, RefreshCw, BarChart3 } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Book,
    title: "Comprehensive PDF Library",
    description: "Access 10,000+ carefully curated PDF books covering all major competitive exams. From UPSC GS to Banking, SSC, and Railway exams - we have it all.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    alt: "Stack of educational books and study materials for competitive exams"
  },
  {
    icon: Heart,
    title: "Smart Favorites & Organization",
    description: "Bookmark important materials, create custom collections, and organize your study resources exactly the way you want for maximum efficiency.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    alt: "Mobile app interface displaying organized study materials and favorites"
  },
  {
    icon: Download,
    title: "Offline Download & Read",
    description: "Download PDFs for offline reading. Study anywhere, anytime without internet connectivity. Perfect for metro commutes, library sessions, or power outages.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    alt: "Students studying together with tablets and books in a collaborative environment"
  },
  {
    icon: Lightbulb,
    title: "Expert-Curated Content",
    description: "All materials are reviewed by subject matter experts and successful candidates. Get the most relevant, up-to-date content that actually helps you crack exams.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    alt: "High-quality educational textbooks and study guides laid out on a desk"
  },
  {
    icon: RefreshCw,
    title: "Regular Content Updates",
    description: "Stay ahead with weekly content updates, latest exam patterns, and fresh study materials. Never miss important changes in your competitive exam syllabus.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    alt: "Students focused on studying with fresh learning materials and laptops"
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your reading progress, track completed materials, and get insights into your preparation level. Data-driven approach to exam success.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    alt: "Graduation cap and diploma representing academic success and achievement"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-white">To Crack Any Exam</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From comprehensive study materials to smart organization tools, 
            we've packed every feature to accelerate your exam preparation journey.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const gradientClasses = [
              "from-primary to-secondary",
              "from-secondary to-accent", 
              "from-accent to-primary",
              "from-primary to-accent",
              "from-secondary to-primary",
              "from-accent to-secondary"
            ];
            
            const isFirstFeature = index === 0; // Comprehensive PDF Library
            
            const FeatureCard = (
              <motion.div 
                key={index} 
                className={`card-gradient glass-effect border border-slate-700 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group ${
                  isFirstFeature ? "cursor-pointer hover:scale-105" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${gradientClasses[index]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <motion.img 
                  src={feature.image} 
                  alt={feature.alt}
                  className="rounded-lg w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" 
                  whileHover={{ scale: 1.1 }}
                />
                {isFirstFeature && (
                  <motion.div 
                    className="mt-4 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <span className="text-primary font-semibold text-sm">Click to explore →</span>
                  </motion.div>
                )}
              </motion.div>
            );

            if (isFirstFeature) {
              return (
                <Link key={index} href="/pdf-library">
                  {FeatureCard}
                </Link>
              );
            }
            
            return FeatureCard;
          })}
        </div>
      </div>
    </section>
  );
}
