import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { hero } from '../data/content.js';

const textVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const profileMotion = {
  animate: { y: [0, -14, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
};

const highlightVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.4),transparent_60%)]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.2),transparent_55%)]" aria-hidden />
      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center gap-16 px-6 py-24 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary-200">
            Hello, I'm
          </span>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{hero.name}</h1>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.45, ease: 'easeOut' }}
              className="text-xl font-semibold text-primary-200 sm:text-2xl md:text-3xl"
            >
              <ReactTyped
                strings={[
                  hero.title,
                  'Building delightful user journeys across the stack',
                  'Shipping ML-enhanced, production-ready experiences',
                ]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={2200}
                loop
              />
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="max-w-xl text-base text-slate-300 md:text-lg"
          >
            {hero.description}
          </motion.p>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.45 } } }}
            className="flex flex-wrap gap-3"
          >
            {hero.highlights.map((item) => (
              <motion.li
                key={item}
                variants={highlightVariants}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100 backdrop-blur"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-400"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#footer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          animate={profileMotion.animate}
          transition={profileMotion.transition}
        >
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 via-indigo-500 to-rose-500 shadow-2xl sm:h-64 sm:w-64">
            <span className="text-5xl font-bold text-white">ST</span>
            <div className="absolute inset-3 rounded-full border border-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
