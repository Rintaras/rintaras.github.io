import React, { useRef, useEffect, useState, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Layout from './components/Layout';
import { Code, Server, PenTool as Tool, ChevronDown } from 'lucide-react';
import { skills, timelineEvents, projects } from './data';
import Background3D from './components/Background3D';
import TimelineItem from './components/TimelineItem';
import ProfileImage from './components/ProfileImage';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const lastScrollY = useRef(0);
  const profileRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { scrollY } = useScroll();
  const opacity = useSpring(
    useTransform(scrollY, [0, 100], [1, 0]),
    { stiffness: 300, damping: 30 }
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY <= lastScrollY.current || currentScrollY <= 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        'MyPortfolio',
        'template_fczkhe9',
        formRef.current,
        't_tULzA6vcI3QWaRR'
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        formRef.current.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0yNCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] animate-[pattern_20s_linear_infinite] opacity-30"></div>
      </div>

      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-3/4 -right-32 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <nav className={`fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md z-50 border-b border-white/10 transition-all duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.span 
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-fuchsia-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Portfolio
              </motion.span>
            </div>
            <div className="flex items-center space-x-8">
              {['Profile', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(
                    item === 'Profile' ? profileRef :
                    item === 'Projects' ? projectsRef :
                    contactRef
                  )}
                  className="relative text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-fuchsia-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <Suspense fallback={null}>
        <Background3D />
      </Suspense>

      <main ref={mainRef} className="relative pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-[90vh] flex flex-col items-center justify-center relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-8"
          >
            <ProfileImage className="mb-8" />
            <motion.h1 
              className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-500"
              whileHover={{ scale: 1.02 }}
            >
              Rio Sato
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Engineer | Web & IoT | B3 at Nihon Univ.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 w-full flex justify-center"
          >
            <motion.button
              onClick={() => scrollToSection(profileRef)}
              className="text-gray-400 flex flex-col items-center"
              whileHover={{ y: -5 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="mb-2">Scroll to explore</span>
              <ChevronDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>

        <section ref={profileRef} className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { icon: <Code className="w-6 h-6 text-emerald-400" />, title: '言語', category: 'language' },
                { icon: <Server className="w-6 h-6 text-indigo-500" />, title: 'フレームワーク', category: 'framework' },
                { icon: <Tool className="w-6 h-6 text-emerald-500" />, title: 'ツール', category: 'tool' }
              ].map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-800/50"
                >
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold ml-2">{section.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(skill => skill.category === section.category)
                      .map(skill => (
                        <motion.span
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium text-gray-300"
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-500">
                タイムライン
              </h2>
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <TimelineItem
                    key={index}
                    index={index}
                    year={event.year}
                    title={event.title}
                    description={event.description}
                    image={event.image}
                    links={event.links}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section ref={projectsRef} className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-500"
            >
              Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"           
                    rel="noopener noreferrer" 
                    className="block"         
                  >
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl border border-emerald-800/50">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <span className="text-white font-medium">
                            {project.description}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-sm bg-gray-800 rounded-md text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={contactRef} className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-500"
            >
              Contact
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-800/50"
              >
                <h3 className="text-xl font-semibold mb-6">SNS</h3>
                <div className="space-y-4">
                  {[
                    { name: 'GitHub', href: 'https://github.com/Rintaras' },
                    { name: 'Twitter', href: 'https://twitter.com/Rintaras' }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-800/50"
              >
                <h3 className="text-xl font-semibold mb-6">お問い合わせフォーム</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      お名前
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 bg-gray-800 border border-emerald-800 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 text-gray-100 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 bg-gray-800 border border-emerald-800 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 text-gray-100 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      メッセージ
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 bg-gray-800 border border-emerald-800 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 text-gray-100 disabled:opacity-50"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-emerald-400 to-indigo-500 text-white rounded-lg hover:from-emerald-500 hover:to-indigo-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-emerald-400 text-center"
                    >
                      メッセージを送信しました。
                    </motion.p>
                  )}

                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-center"
                    >
                      エラーが発生しました。もう一度お試しください。
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;