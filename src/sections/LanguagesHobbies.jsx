import { motion } from 'framer-motion';
import { LuGlobe, LuHeartPulse } from 'react-icons/lu';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Badge } from '../components/Badge.jsx';
import { hobbies, languages } from '../data/content.js';

export function LanguagesHobbies() {
  return (
    <section id="languages" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Beyond Code"
          title="Languages & Hobbies"
          description="Curiosity extends outside the terminal, staying active, collaborative, and culturally grounded."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/50"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 dark:bg-primary-500/20">
                <LuGlobe size={22} aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Languages</h3>
            </div>
            <div className="mt-6 space-y-4">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-slate-600 dark:bg-slate-950/40 dark:text-slate-300"
                >
                  <span>{language.name}</span>
                  <Badge>{language.level}</Badge>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
            className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/50"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 dark:bg-primary-500/20">
                <LuHeartPulse size={22} aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Hobbies</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {hobbies.map((hobby) => (
                <Badge key={hobby}>{hobby}</Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
