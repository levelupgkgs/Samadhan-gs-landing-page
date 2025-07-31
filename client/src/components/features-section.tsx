import { motion } from "framer-motion";
import { Book, Heart, Download, Lightbulb, RefreshCw, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { Button } from './ui/button';

const features = [
  {
    icon: Book,
    title: "Complete GK/GS Syllabus",
    description: "From comprehensive GK/GS study materials to smart organization tools, we've packed every feature to accelerate your exam preparation journey.",
    image: "/syllabus-min.webp",
    alt: "Complete GK/GS Syllabus"
  },
  {
    icon: Heart,
    title: "Bilingual and easy to understand language",
    description: "Language is kept as simple as possible to ensure concept clarity for both English and Hindi medium students.",
    image: "/Bilingual-min.webp",
    alt: "Bilingual and easy to understand language"
  },
  {
    icon: Download,
    title: "Favorites and Offline Download Notes",
    description: "Download PDFs for offline reading. Study anywhere, anytime without internet connectivity. Perfect for Multiple times revision to get confidence on subject",
    image: "/Favorites-min.webp",
    alt: "Favorites and Offline Download Notes"
  },
  {
    icon: Lightbulb,
    title: "Expert-Curated Content",
    description: "All materials are reviewed by subject matter experts and successful candidates. Get the most relevant, up-to-date content that actually helps you crack exams.",
    image: "/Expert-min.webp",
    alt: "Expert-Curated Content"
  },
  {
    icon: RefreshCw,
    title: "Regular Content Updates",
    description: "Stay ahead with weekly content updates, latest exam patterns, and fresh study materials. Never miss important changes in your competitive exam syllabus.",
    image: "/Regular-content-min.webp",
    alt: "Regular Content Updates"
  },
  {
    icon: BarChart3,
    title: "Exam Analysis",
    description: "<ul class='list-disc list-inside'><li>Exam Pattern</li><li>Percentage Weightage of Subject of GK/GS in previous year paper</li><li>Previous year Question</li><li>Cut-off marks</li><li>Job Profile</li></ul>",
    image: "/Exam-analysis-min.webp",
    alt: "Exam Analysis"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/syllabus">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="hero-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300">
                  Browse Syllabus
                </Button>
              </motion.div>
            </Link>
            <Link href="/blog">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="hero-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300">
                  Exam Analysis
                </Button>
              </motion.div>
            </Link>
          </div>
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
            <span className="text-white">To Score more than 90% in GK/GS</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From comprehensive GK/GS study materials to smart organization tools, we've packed every feature to accelerate your exam preparation journey.
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
            
            const FeatureCard = (
              <motion.div 
                key={index} 
                className={`card-gradient glass-effect border border-slate-700 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col`}
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
                <div className="text-slate-300 leading-relaxed mb-6 flex-grow" dangerouslySetInnerHTML={{ __html: feature.description }} />
                <div className="mt-auto">
                  <motion.img 
                    src={feature.image} 
                    alt={feature.alt}
                    className="rounded-lg w-full h-56 object-contain bg-slate-800/30 py-4 group-hover:scale-105 transition-transform duration-300" 
                    whileHover={{ scale: 1.02 }}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
            
            return FeatureCard;
          })}
        </div>
      </div>
    </section>
  );
}
