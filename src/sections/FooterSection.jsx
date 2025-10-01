import { motion } from 'framer-motion';

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 text-white">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs uppercase tracking-[0.35em] text-white/80"
      >
        © {year} Sumit Tiwari. All rights reserved.
      </motion.p>
    </footer>
  );
}
