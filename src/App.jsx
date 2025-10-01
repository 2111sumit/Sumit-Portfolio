import { ThemeToggle } from './components/ThemeToggle.jsx';
import { hero } from './data/content.js';
import { Hero } from './sections/Hero.jsx';
import { Skills } from './sections/Skills.jsx';
import { Projects } from './sections/Projects.jsx';
import { Education } from './sections/Education.jsx';
import { Certifications } from './sections/Certifications.jsx';
import { Achievements } from './sections/Achievements.jsx';
import { LanguagesHobbies } from './sections/LanguagesHobbies.jsx';
import { Contact } from './sections/Contact.jsx';

const navigation = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  return (
    <div className="relative min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 right-1/2 h-64 w-64 rounded-full bg-primary-400/30 blur-3xl" aria-hidden />
        <div className="absolute left-1/2 top-10 h-72 w-72 rounded-full bg-rose-400/20 blur-[120px]" aria-hidden />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-primary-500/10 blur-[160px]" aria-hidden />
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg dark:border-slate-800/60 dark:bg-slate-950/70">
        <div className="container flex items-center justify-between gap-6 py-4">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-slate-200"
          >
            Sumit
          </a>
          <nav className="hidden items-center gap-1 text-sm font-medium text-slate-500 md:flex dark:text-slate-400">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-primary-500/10 hover:text-primary-600 dark:hover:bg-primary-500/20 dark:hover:text-primary-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
        <div className="container pb-4 md:hidden">
          <div className="flex snap-x gap-2 overflow-x-auto text-sm font-medium text-slate-500 dark:text-slate-400">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="snap-start whitespace-nowrap rounded-full border border-slate-200/60 px-3 py-2 transition hover:border-primary-400 hover:text-primary-500 dark:border-slate-800/60 dark:hover:border-primary-500/70 dark:hover:text-primary-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <LanguagesHobbies />
        <Contact />
      </main>
    </div>
  );
}

export default App;
