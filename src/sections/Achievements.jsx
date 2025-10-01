import { motion } from 'framer-motion';
import { LuSparkles } from 'react-icons/lu';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { achievements } from '../data/content.js';

export function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Impact"
          title="Achievements"
          description="Highlights from competitive programming, leadership, and community-driven initiatives."
        />
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/50">
          <ul className="grid gap-5 sm:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                className="flex items-start gap-3 text-base text-slate-600 dark:text-slate-300"
              >
                <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-primary-500 dark:bg-primary-500/20">
                  <LuSparkles size={18} aria-hidden />
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
