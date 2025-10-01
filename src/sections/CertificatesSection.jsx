import { motion } from 'framer-motion';
import { certifications } from '../data/content.js';

export function CertificatesSection() {
  return (
    <section id="certificates" className="bg-slate-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold">Certifications</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Recognitions that validate my commitment to continuous learning and best practices.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.figure
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
              whileHover={{ rotateX: 4, rotateY: -4, scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={cert.file}
                  alt={cert.title}
                  className="h-48 w-full rounded-2xl object-cover"
                  draggable="false"
                />
              </div>
              <figcaption className="mt-4 space-y-1 text-center text-sm">
                <p className="font-semibold text-slate-100">{cert.title}</p>
                <p className="text-xs text-slate-400">{cert.issuer}  {cert.year}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
