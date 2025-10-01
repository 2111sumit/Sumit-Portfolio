import { motion } from 'framer-motion';
import { skillCategories } from '../data/content.js';

export function SkillsSection() {
  return (
    <section id="skills" className="bg-slate-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold">Skills & Expertise</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          A balanced blend of modern programming languages, product-focused engineering, and production tooling.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.1 }}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-primary-200">{category.title}</h3>
              <ul className="space-y-3 text-sm text-slate-200">
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.1 + itemIndex * 0.05 }}
                    className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 text-sm text-slate-100"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
