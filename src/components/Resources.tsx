import { Book, Video, Code2, FileText, ExternalLink, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

export function Resources() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const resources = [
    {
      icon: Book,
      title: 'Learning Paths',
      description: 'Curated roadmaps for mastering different tech stacks',
      items: ['Web Development', 'Mobile Apps', 'Data Science', 'Cloud Computing'],
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      icon: Video,
      title: 'Video Library',
      description: 'Premium recorded workshops and coding masterclasses',
      items: ['React Advanced', 'Python Deep Dive', 'Git Mastery', 'System Design'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Code2,
      title: 'Code Repository',
      description: 'Open-source projects and battle-tested templates',
      items: ['Project Starters', 'Code Challenges', 'Best Practices', 'Design Patterns'],
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and technical references',
      items: ['Setup Guides', 'Cheat Sheets', 'API Docs', 'Interview Prep'],
      gradient: 'from-violet-600 to-purple-600'
    }
  ];

  return (
    <section id="resources" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-indigo-400 mb-2 uppercase tracking-wider text-sm"
          >
            Learning Resources
          </motion.p>
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Your Success Toolkit
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Access our comprehensive library of learning materials, code samples, and expert guidance.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${resource.gradient} rounded-xl mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl mb-2">{resource.title}</h3>
                  <p className="text-slate-400 mb-6">{resource.description}</p>

                  <ul className="space-y-3 mb-6">
                    {resource.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${resource.gradient} rounded-full`}></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 text-transparent bg-gradient-to-r ${resource.gradient} bg-clip-text font-semibold group/btn`}
                  >
                    Explore Resources
                    <ExternalLink className="w-4 h-4 text-indigo-400 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          
          <div className="relative bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8 lg:p-12 text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <Rocket className="w-12 h-12 text-indigo-400" />
            </motion.div>
            
            <h3 className="text-3xl mb-4">Can't Find What You Need?</h3>
            <p className="text-xl text-slate-400 mb-6 max-w-2xl mx-auto">
              Request new resources or suggest topics you'd like to master.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white">Submit Request</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
