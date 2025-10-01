import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Badge } from '../components/Badge.jsx';
import { skills } from '../data/content.js';

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="Core Skills"
          description="A blend of engineering rigor and curiosity across the stack, backed by hands-on project experience and competitive programming."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/50"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
