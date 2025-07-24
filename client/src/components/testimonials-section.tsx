import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call for testimonials
    const fetchTestimonials = async () => {
      try {
        // This would be replaced with actual API call
        const mockTestimonials: Testimonial[] = [
          {
            id: 1,
            name: "Priya Sharma",
            role: "UPSC CSE 2023 Qualifier",
            content: "Samadhan GS completely transformed my UPSC preparation. The PDF collection is comprehensive and the offline download feature helped me study during my daily commute. Cleared prelims on my second attempt!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40"
          },
          {
            id: 2,
            name: "Rahul Kumar",
            role: "SSC CGL 2023 Selected",
            content: "The quality of GS content is exceptional. I especially loved the favorites feature which helped me organize important topics. Got selected in SSC CGL with a good rank. Highly recommended!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40"
          },
          {
            id: 3,
            name: "Anjali Verma",
            role: "IBPS PO 2023 Selected",
            content: "Amazing app for banking exam preparation! The content is always updated with latest patterns. The progress tracking motivated me to stay consistent. Cleared IBPS PO in first attempt.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40"
          },
          {
            id: 4,
            name: "Vikash Singh",
            role: "Railway Group D Selected",
            content: "Perfect for railway exam preparation. The subject-wise organization and expert-curated content saved me months of research. The app is user-friendly and works great offline too.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40"
          },
          {
            id: 5,
            name: "Deepika Jain",
            role: "State PSC 2023 Qualified",
            content: "The regular content updates kept me ahead of the competition. Current affairs section is particularly helpful. Used it throughout my preparation and finally cracked state PSC. Thank you team!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40"
          },
          {
            id: 6,
            name: "Amit Patel",
            role: "Multi-Exam Qualifier",
            content: "Best investment for competitive exam preparation. The variety of content covers all major exams. Smart favorites feature helped me create my own study plan. Cleared multiple exams using this app.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40"
          }
        ];
        
        setTestimonials(mockTestimonials);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">What Our</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Successful Students Say
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="card-gradient glass-effect border border-slate-700 rounded-2xl p-6 animate-pulse">
                <div className="h-4 bg-slate-700 rounded mb-4"></div>
                <div className="h-20 bg-slate-700 rounded mb-6"></div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-700 rounded-full mr-3"></div>
                  <div>
                    <div className="h-4 bg-slate-700 rounded mb-2 w-24"></div>
                    <div className="h-3 bg-slate-700 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
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
            <span className="text-white">What Our</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Successful Students Say
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of successful candidates who cracked their competitive exams using Samadhan GS
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="card-gradient glass-effect border border-slate-700 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <span className="ml-2 text-sm text-slate-400">{testimonial.rating}.0</span>
              </motion.div>
              <motion.p 
                className="text-slate-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                {testimonial.content}
              </motion.p>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} - success story`}
                  className="w-10 h-10 rounded-full mr-3" 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { value: "50K+", label: "Happy Users", gradient: "from-primary to-secondary" },
            { value: "10K+", label: "PDF Books", gradient: "from-secondary to-accent" },
            { value: "95%", label: "Success Rate", gradient: "from-accent to-primary" },
            { value: "4.8★", label: "App Rating", gradient: "from-primary to-accent" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.div 
                className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <motion.p 
                className="text-slate-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
