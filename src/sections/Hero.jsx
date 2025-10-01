import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuArrowUpRight } from 'react-icons/lu';
import { hero } from '../data/content.js';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const highlightVariants = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 24 },
};

const contactVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

const HIGHLIGHT_INTERVAL = 7000;
const CONTACT_INTERVAL = 4800;

export function Hero() {
  const highlights = hero.highlights ?? [];
  const contacts = hero.contact ?? [];

  const highlightItems = useMemo(
    () => [hero.title, ...highlights].filter(Boolean),
    [highlights],
  );

  const [highlightIndex, setHighlightIndex] = useState(0);
  const [contactIndex, setContactIndex] = useState(0);

  const hasHighlights = highlightItems.length > 0;
  const hasMultipleHighlights = highlightItems.length > 1;
  const hasMultipleContacts = contacts.length > 1;

  useEffect(() => {
    if (!hasMultipleHighlights) {
      return undefined;
    }
    if (typeof window === 'undefined') {
      return undefined;
    }
    const id = window.setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % highlightItems.length);
    }, HIGHLIGHT_INTERVAL);

    return () => window.clearInterval(id);
  }, [hasMultipleHighlights, highlightItems.length]);

  useEffect(() => {
    if (!hasMultipleContacts) {
      return undefined;
    }
    if (typeof window === 'undefined') {
      return undefined;
    }
    const id = window.setInterval(() => {
      setContactIndex((prev) => (prev + 1) % contacts.length);
    }, CONTACT_INTERVAL);

    return () => window.clearInterval(id);
  }, [hasMultipleContacts, contacts.length]);

  const activeContact = useMemo(() => contacts[contactIndex], [contacts, contactIndex]);
  const ActiveContactIcon = activeContact?.icon ?? null;
  const identityKey = hasHighlights ? highlightItems[highlightIndex] : hero.title;

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/90 via-transparent to-transparent dark:from-slate-950/95" aria-hidden />
      <div className="container relative flex min-h-[60vh] flex-col justify-center py-20 sm:py-24 lg:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center"
        >
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-200/60 bg-white/80 px-4 py-2 text-sm font-medium text-primary-600 shadow-soft dark:border-primary-500/40 dark:bg-slate-900/70 dark:text-primary-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_theme(colors.accent)]" />
              {hero.availability}
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="flex flex-col gap-3"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Hello, I&apos;m</p>
              <motion.h1
                layout
                className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
              >
                <motion.span
                  key={hero.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.6, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-block"
                >
                  {hero.name}
                </motion.span>
              </motion.h1>
              <div className="relative h-12 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={identityKey}
                    variants={highlightVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="inline-flex min-h-[3rem] items-center rounded-full bg-primary-500/10 px-5 text-base font-semibold text-primary-600 backdrop-blur dark:bg-primary-500/20 dark:text-primary-200"
                  >
                    {identityKey}
                  </motion.span>
                </AnimatePresence>
              </div>
              {hasMultipleHighlights ? (
                <div className="flex items-center gap-2">
                  {highlightItems.map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setHighlightIndex(index)}
                      className={`h-1.5 rounded-full transition ${
                        index === highlightIndex
                          ? 'w-8 bg-primary-500'
                          : 'w-4 bg-slate-300/80 dark:bg-slate-700/70'
                      }`}
                      aria-label={`Show ${item}`}
                    />
                  ))}
                </div>
              ) : null}
            </motion.div>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {hero.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-4 py-2 font-medium dark:border-slate-800/60 dark:bg-slate-900/60">
                <span className="h-2 w-2 rounded-full bg-primary-500" />
                {hero.location}
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary-500/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="glass-panel relative flex flex-col gap-6 rounded-3xl p-8"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary-500">
                  Let&apos;s collaborate
                </span>
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Ready to build impactful experiences
                </p>
              </div>
              <div className="space-y-4">
                <div className="relative min-h-[4.5rem] overflow-hidden">
                  <AnimatePresence mode="wait">
                    {activeContact ? (
                      <motion.a
                        key={activeContact.label}
                        href={activeContact.href}
                        variants={contactVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/85 px-4 py-3 text-sm font-medium text-slate-600 shadow-sm transition hover:border-primary-400 hover:text-primary-500 dark:border-slate-800/60 dark:bg-slate-950/40 dark:text-slate-300"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 dark:bg-primary-500/20">
                            {ActiveContactIcon ? <ActiveContactIcon size={20} aria-hidden /> : null}
                          </span>
                          {activeContact.label}
                        </span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
                          className="text-lg text-primary-500 dark:text-primary-300"
                          aria-hidden
                        >
                          <LuArrowUpRight size={18} />
                        </motion.span>
                      </motion.a>
                    ) : null}
                  </AnimatePresence>
                </div>
                {hasMultipleContacts ? (
                  <div className="flex items-center gap-2">
                    {contacts.map((contact, index) => (
                      <button
                        key={contact.label}
                        type="button"
                        onClick={() => setContactIndex(index)}
                        className={`h-1.5 rounded-full transition ${
                          index === contactIndex
                            ? 'w-8 bg-primary-500'
                            : 'w-4 bg-slate-300/80 dark:bg-slate-700/70'
                        }`}
                        aria-label={`Show ${contact.label}`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

