import { Crown, Star, Users, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

export function Organizers() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const mainOrganizers = [
    {
      name: 'Prof.(Dr.) Anand Kumar Shukla',
      role: 'Dean and HOS-SCA',
      image: '/images/members/DrAnand.jpg',
      bio: 'The School of Computer Applications is dedicated to fostering excellence in the education of young minds, equipping them with the skills necessary to devise innovative, technology-driven solutions for societal, industrial, and global challenges. Our industry-oriented curricula are designed to be innovative, incorporating rich pedagogical initiatives such as Bring Your Own Device (BYOD) programs, capstone projects, case studies, and courses taught by industry experts. These initiatives empower students to evolve into the problem-solvers of tomorrow. With various pathways available, from application and product development to advanced studies, we prepare our students to excel as corporate professionals and entrepreneurs',
      achievements: ['Founded bodhscript 2022'],
      gradient: 'from-indigo-600 to-purple-600',
      icon: Crown,
      social: {
        email: 'alex@bodhscript.com',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Dr. Girish Kumar',
      role: 'Associate Professor & Organizer',
      image: '/images/members/DrGirish.jpg',
      bio: 'Dr. Girish Kumar holds a Ph.D. in Computer Applications, along with a PGDCA and an MIT, and is currently serving as an Associate Professor at Lovely Professional University. With over 23 years of teaching and research experience in the field of Computer Applications, his core expertise lies in Programming and Software Development, complemented by work in databases, artificial intelligence, networking, and cybersecurity. He has made notable contributions through 24 patents, 10 books in four languages, and over 40 research papers published in reputable national and international journals and conferences, as well as four books by leading publishers. He is also a Certified Academic Associate (IBM–DB2) and an active member of the International Association of Engineers (IAENG).',
      achievements: [''],
      gradient: 'from-purple-600 to-pink-600',
      icon: Star,
      social: {
        email: 'sarah@bodhscript.com',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="organizers" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            animate={{ opacity: isInView ? 1 : 0 }}
            className="text-indigo-400 mb-2 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
          >
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Users className="w-4 h-4" />
            </motion.div>
            The Organizers
          </motion.p>

          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Leadership Team
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Meet the passionate individuals driving bodhscript&apos;s mission forward.
          </p>
        </motion.div>

        {/* Main Organizers */}
        <div className="grid md:grid-cols-2 gap-8">
          {mainOrganizers.map((organizer, index) => {
            const IconComponent = organizer.icon;

            return (
              <motion.div
                key={organizer.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${organizer.gradient} rounded-3xl blur-2xl opacity-30`}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative bg-white/5 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8">
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Image */}
                    <div className="md:col-span-2 relative">
                      <img
                        src={organizer.image}
                        alt={organizer.name}
                        className="w-full aspect-square object-cover rounded-2xl border border-indigo-500/30"
                      />
                      <div className={`absolute -top-3 -right-3 p-3 bg-gradient-to-br ${organizer.gradient} rounded-xl`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="md:col-span-3">
                      <h3 className="text-2xl lg:text-3xl mb-2">{organizer.name}</h3>
                      <p className={`text-transparent bg-gradient-to-r ${organizer.gradient} bg-clip-text text-lg font-semibold mb-4`}>
                        {organizer.role}
                      </p>
                      <p className="text-slate-300 mb-6">{organizer.bio}</p>

                      <div className="flex gap-3">
                        <a href={`mailto:${organizer.social.email}`} className={`p-2 bg-gradient-to-br ${organizer.gradient} rounded-lg`}>
                          <Mail className="w-5 h-5" />
                        </a>
                        <a href={organizer.social.linkedin} className="p-2 bg-white/10 rounded-lg">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={organizer.social.github} className="p-2 bg-white/10 rounded-lg">
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
