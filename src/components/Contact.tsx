import { Mail, MessageSquare, MapPin, Send, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-indigo-400 mb-2 uppercase tracking-wider text-sm">Get In Touch</p>
            <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Questions? Ideas? Join us in shaping the future of tech!
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Mail,
                  title: 'Email Us',
                  content: ['contact@bodhscript.com', 'info@bodhscript.com'],
                  gradient: 'from-indigo-600 to-blue-600'
                },
                {
                  icon: MessageSquare,
                  title: 'Join Discord',
                  content: ['discord.gg/bodhscript'],
                  gradient: 'from-purple-600 to-pink-600'
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  content: ['Innovation Center, Room 205', 'Hours: Mon-Fri, 4-6 PM'],
                  gradient: 'from-pink-600 to-rose-600'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">{item.title}</h3>
                      {item.content.map((line, idx) => (
                        <p key={idx} className="text-slate-400">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="mb-4 text-slate-400">Follow us on social media:</p>
              <div className="flex gap-3">
                {['Discord', 'GitHub', 'LinkedIn', 'Twitter'].map((platform, index) => (
                  <motion.button
                    key={platform}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-500/40 rounded-lg text-sm transition-all duration-300"
                  >
                    {platform}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            
            <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-3xl p-8">
              <h3 className="text-2xl mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-indigo-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder-slate-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-indigo-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder-slate-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm mb-2 text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-indigo-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder-slate-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-indigo-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder-slate-500 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full relative py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden group/btn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2 text-white">
                    Send Message
                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
