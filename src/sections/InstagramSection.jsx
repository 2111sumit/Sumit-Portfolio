import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

export function InstagramSection() {
  return (
    <section id="instagram" className="bg-slate-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#F58529]/25 via-[#DD2A7B]/20 to-[#515BD4]/25 p-10 text-center shadow-2xl backdrop-blur"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/40 text-3xl text-white">
            <FaInstagram />
          </div>
          <h3 className="mt-6 text-2xl font-semibold">Follow my build journey</h3>
          <p className="mt-3 text-sm text-slate-200">
            Behind-the-scenes drops, daily learning, and product experiments.
          </p>
          <motion.a
            href="https://instagram.com/its_sumit_1121"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4] px-6 py-3 text-sm font-semibold text-white shadow-lg"
            animate={{
              scale: [1, 1.04, 1],
              boxShadow: [
                '0 0 0 rgba(221,42,123,0.0)',
                '0 0 24px rgba(221,42,123,0.35)',
                '0 0 0 rgba(221,42,123,0.0)',
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            Visit Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
