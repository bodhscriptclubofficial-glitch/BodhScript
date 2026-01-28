import { Code2, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Team', href: '#team' },
    { label: 'Resources', href: '#resources' }
  ];

  const resources = [
    { label: 'Learning Paths', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'FAQ', href: '#' }
  ];

  return (
    <footer className="relative border-t border-indigo-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 blur-lg opacity-50"></div>
                <div className="relative p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  bodhscript
                </span>
                <div className="text-xs text-indigo-400 -mt-1">coding club</div>
              </div>
            </motion.div>
            <p className="text-slate-400 mb-4 text-sm">
              Empowering the next generation of developers through innovation, collaboration, and excellence.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Mail, href: '#' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-500/40 rounded-lg transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest events and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-indigo-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-white placeholder-slate-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 rounded-lg"
              >
                <Mail className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-indigo-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-2">
            © 2026 bodhscript. Made with <Heart className="w-4 h-4 text-red-500" /> by passionate developers.
          </p>
          <div className="flex gap-6 text-sm">
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              Code of Conduct
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
