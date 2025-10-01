import { motion } from 'framer-motion';
import { projects } from '../data/content.js';

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-slate-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Selected work that blends strong UX with production-ready engineering.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 25px 60px -30px rgba(99,102,241,0.6)' }}
              className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-xl backdrop-blur"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <motion.a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-400"
                >
                  View GitHub
                </motion.a>
              </div>
              <p className="text-sm text-slate-300">{project.description}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-primary-200">{project.tech.join(' · ')}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
