import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { education } from '../data/content.js';

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Academics"
          title="Education"
          description="Formal foundations empowering problem solving, leadership, and continuous learning."
        />
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary-200 via-primary-300/60 to-transparent dark:from-primary-700/60 dark:via-primary-600/40" aria-hidden />
          <ul className="space-y-8">
            {education.map((item, index) => (
              <motion.li
                key={item.school}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.1 }}
                className="relative ml-10 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/50"
              >
                <span className="absolute -left-10 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-primary-300 bg-white text-sm font-semibold text-primary-600 shadow-sm dark:border-primary-700 dark:bg-slate-950 dark:text-primary-300">
                  {item.period.split('-')[0].trim()}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {item.school}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-300">
                  {item.program}
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
