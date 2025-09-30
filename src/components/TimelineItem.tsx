import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  links?: Array<{ url: string; label: string }>;
  index: number;
}

export default function TimelineItem({
  year,
  title,
  description,
  image,
  links,
  index,
}: TimelineItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageError, setImageError] = useState(false);
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
        setScrollYProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期値を設定
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // スクロール進行度に基づいて値を計算
  const lineHeight = scrollYProgress > 0.5 ? "100%" : `${scrollYProgress * 200}%`;
  const scale = scrollYProgress > 0.5 ? 1 : 0.8 + (scrollYProgress * 0.4);
  const opacity = scrollYProgress > 0.2 ? 1 : scrollYProgress * 5;

  return (
    <motion.div
      ref={itemRef}
      className="flex gap-8 items-start pl-4 relative"
      style={{ transform: `scale(${scale})`, opacity }}
    >
      {/* Vertical connecting line */}
      <motion.div
        className="absolute left-[2.5rem] top-0 w-px bg-gradient-to-b from-emerald-400 to-indigo-500 origin-top"
        style={{ height: lineHeight }}
      />

      <div className="flex-none relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-indigo-500 flex items-center justify-center text-white overflow-hidden shadow-lg border-4 border-gray-800"
        >
          {image && !imageError ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              onError={() => {
                console.warn(`Failed to load image: ${image}`);
                setImageError(true);
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-400 to-indigo-500">
              <span className="text-lg font-bold text-white">{year}</span>
            </div>
          )}
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex-1 pt-4"
      >
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-800/50"
        >
          <div className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500 font-semibold mb-2">{year}</div>
          <h3 className="text-xl font-bold mb-3 text-gray-100">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} className="mr-1" />
                  {link.label}
                </motion.a>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}