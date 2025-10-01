import { useEffect, useMemo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { LuArrowUpRight, LuLoader, LuMail, LuSparkles } from 'react-icons/lu';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { hero } from '../data/content.js';

const sellingPoints = (hero.highlights ?? []).slice(0, 3);

export function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const fallbackEmail = useMemo(() => {
    const mailContact = hero.contact?.find((item) => item.href?.startsWith('mailto:'));
    if (mailContact?.href) {
      return mailContact.href.replace('mailto:', '').trim();
    }
    return 'sumitkumartiwari627@gmail.com';
  }, []);

  useEffect(() => {
    if (publicKey) {
      emailjs.init({ publicKey });
    }
  }, [publicKey]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: null, message: '' });

    const formElement = formRef.current;
    if (!formElement) {
      return;
    }

    const formData = new FormData(formElement);
    const name = formData.get('name')?.toString() ?? '';
    const senderEmail = formData.get('email')?.toString() ?? '';
    const subject = formData.get('subject')?.toString() ?? '';
    const message = formData.get('message')?.toString() ?? '';

    if (!serviceId || !templateId || !publicKey) {
      const emailSubject = subject || 'Portfolio collaboration';
      const compiledSubject = `[Portfolio] ${emailSubject}`;
      const compiledBody = `Hi Sumit,%0D%0A%0D%0A${message}%0D%0A%0D%0ARegards,%0D%0A${name}${senderEmail ? `%0D%0A${senderEmail}` : ''}`;
      window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(compiledSubject)}&body=${compiledBody}`;

      setStatus({
        type: 'info',
        message: `Opened your email client. If it doesn't launch, email me at ${fallbackEmail}.`,
      });
      formElement.reset();
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(serviceId, templateId, formElement, publicKey);
      setStatus({ type: 'success', message: 'Thanks for reaching out! I will reply shortly.' });
      formElement.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: `Couldn't send the message right now. Please email me manually at ${fallbackEmail}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Have a project or opportunity in mind?"
          description="Drop a message and I'll respond with ideas, timelines, and next steps tailored for your product goals."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950/60"
          >
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary-500">Why reach out?</p>
                <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                  Whether it's building a new product, refining an existing platform, or pairing on competitive programming prep, I love collaborating on ambitious ideas.
                </p>
              </div>
              <div className="grid gap-4">
                {(sellingPoints.length ? sellingPoints : hero.highlights ?? []).map((point, index) => (
                  <motion.div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 text-sm text-slate-600 shadow-inner dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: 0.05 * index, ease: 'easeOut' }}
                  >
                    <span className="mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-primary-500 dark:bg-primary-500/20">
                      <LuSparkles size={18} aria-hidden />
                    </span>
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-inner dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10 text-primary-500 dark:bg-primary-500/20">
                  <LuArrowUpRight size={18} aria-hidden />
                </span>
                Let's transform ideas into polished, production-ready experiences.
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="glass-panel relative flex flex-col gap-5 rounded-3xl p-8"
          >
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Sumit Tiwari"
                className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-200 dark:focus:border-primary-500 dark:focus:ring-primary-500/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-200 dark:focus:border-primary-500 dark:focus:ring-primary-500/40"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project collaboration, internship, mentorship..."
                className="mt-2 w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-200 dark:focus:border-primary-500 dark:focus:ring-primary-500/40"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Share the goals, timeline, or any context you have in mind."
                className="mt-2 w-full resize-none rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-200 dark:focus:border-primary-500 dark:focus:ring-primary-500/40"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-80"
            >
              {isSubmitting ? (
                <>
                  <LuLoader className="h-4 w-4 animate-spin" aria-hidden />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <LuArrowUpRight size={16} aria-hidden />
                </>
              )}
            </button>
            {status.message ? (
              <p
                className={`text-sm ${
                  status.type === 'success'
                    ? 'text-emerald-500 dark:text-emerald-400'
                    : status.type === 'info'
                      ? 'text-primary-500 dark:text-primary-300'
                      : 'text-rose-500 dark:text-rose-400'
                }`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            ) : null}
            <input type="hidden" name="to_name" value="Sumit" />
            <div className="flex items-center gap-2 rounded-2xl bg-slate-100/70 px-4 py-3 text-xs text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
              <LuMail size={16} aria-hidden />
              <span>Direct email: {fallbackEmail}</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
