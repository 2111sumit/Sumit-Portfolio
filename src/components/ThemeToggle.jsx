import { motion } from 'framer-motion';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useTheme } from '../providers/ThemeProvider.jsx';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
      className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/80 text-slate-700 shadow-lg shadow-primary-500/20 transition-all hover:border-primary-400 hover:text-primary-500 dark:bg-slate-900/80 dark:text-slate-200"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-primary-500/15 blur-lg"
        animate={{ opacity: isDark ? [0.15, 0.4, 0.15] : [0.08, 0.25, 0.08] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.span
        key={theme}
        initial={{ rotate: -20, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative flex items-center justify-center"
      >
        {isDark ? <LuSun size={22} /> : <LuMoon size={22} />}
      </motion.span>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
