import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuLock, LuShieldCheck, LuX } from 'react-icons/lu';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { certifications } from '../data/content.js';

const imageMap = {
  'aws.jpg': '/certificates/aws.jpg',
  'mern.jpg': '/certificates/mern.jpg',
  'blockchain.jpg': '/certificates/blockchain.jpg',
  'ml.jpg': '/certificates/ml.jpg',
  'aws-fixed.jpg': '/certificates/aws-fixed.jpg',
  'mern-fixed.jpg': '/certificates/mern-fixed.jpg',
  'blockchain-fixed.jpg': '/certificates/blockchain-fixed.jpg',
  'ml-fixed.jpg': '/certificates/ml-fixed.jpg',
};

export function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  const handleOpen = (cert) => {
    const imageSrc = imageMap[cert.image] ?? cert.image;
    if (!imageSrc) {
      return;
    }
    setActiveCert({ ...cert, file: imageSrc });
  };

  const handleClose = () => setActiveCert(null);

  return (
    <section id="certifications" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Continuous Learning"
          title="Certifications"
          description="Upskilling to stay ahead of emerging technologies and industry standards."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => {
            const imageSrc = imageMap[cert.image] ?? cert.image;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
                onClick={() => handleOpen(cert)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleOpen(cert);
                  }
                }}
                tabIndex={0}
                role="button"
                className="group flex h-full cursor-pointer flex-col gap-3 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:border-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-slate-800 dark:bg-slate-950/50"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 dark:bg-primary-500/20">
                  <LuShieldCheck size={22} aria-hidden />
                </span>
                <div className="relative h-32 w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-2 dark:border-slate-800/60 dark:bg-slate-950/40">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={`${cert.title} certificate`}
                      className="h-full w-full rounded-xl object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                    <LuLock size={10} /> View
                  </span>
                </div>
                <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{cert.title}</p>
                <span className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}  {cert.year}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeCert ? (
          <motion.div
            key={activeCert.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur"
            onContextMenu={(event) => event.preventDefault()}
          >
            <div
              className="absolute inset-0"
              aria-hidden
              onClick={handleClose}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-[min(92vw,720px)] overflow-hidden rounded-3xl border border-primary-400/40 bg-white/95 p-6 shadow-2xl dark:bg-slate-950/92"
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 text-slate-500 transition hover:border-primary-400 hover:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-slate-800/70 dark:text-slate-300"
                aria-label="Close preview"
              >
                <LuX size={18} aria-hidden />
              </button>
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{activeCert.title}</h3>
                <p className="text-sm text-primary-600 dark:text-primary-300">
                  {activeCert.issuer}  {activeCert.year}
                </p>
              </div>
              <div className="relative mt-5 max-h-[70vh] overflow-auto rounded-2xl border border-primary-200/40 bg-slate-100/80 p-3 dark:border-primary-500/30 dark:bg-slate-900/60">
                <img
                  src={activeCert.file}
                  alt={`${activeCert.title} certificate full view`}
                  className="w-full rounded-xl object-contain"
                  draggable="false"
                  onContextMenu={(event) => event.preventDefault()}
                />
              </div>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Preview protected. Contact Sumit for verified copies.
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
