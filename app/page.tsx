'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  Cpu,
  AtSign,
  GraduationCap,
  Link,
  Mail,
  Plane,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const portfolio = [
  {
    icon: Rocket,
    eyebrow: 'Flagship',
    title: 'Autonomous Investment Agents',
    body: 'Smart automated investment algorithms built to identify signals, manage execution, and support disciplined portfolio decisions.',
    accent: 'from-cyan-300 to-blue-500',
  },
  {
    icon: Cpu,
    eyebrow: 'SaaS Solutions',
    title: 'Business OS & Creative Automation',
    body: 'Smart management, booking, automated marketing, and video creation systems for service businesses and modern operators.',
    accent: 'from-violet-300 to-fuchsia-500',
  },
  {
    icon: Bot,
    eyebrow: 'AI Agents',
    title: 'JARVIS Assistants',
    body: 'The ultimate idea and project organizer, smart business chat interfaces, and personalized virtual assistants.',
    accent: 'from-blue-300 to-cyan-400',
  },
  {
    icon: GraduationCap,
    eyebrow: 'Education & Integration',
    title: 'Enterprise AI Enablement',
    body: 'Courses, workshops, and AI integration programs for large organizations, municipalities, education, and defense entities.',
    accent: 'from-purple-300 to-blue-500',
  },
  {
    icon: Plane,
    eyebrow: 'Simulators & Aviation',
    title: 'AI-Driven Aviation Systems',
    body: 'Management, analytics, and upgrades for aviation simulators using intelligent automation and operational AI layers.',
    accent: 'from-sky-300 to-indigo-500',
  },
];

const phases = [
  {
    label: 'Phase 1',
    title: 'Incubation',
    timeline: 'Months 1–6',
    body: 'Bootstrap and build MVPs for the strongest ideas under one unified company, while early products help cover operational costs.',
  },
  {
    label: 'Phase 2',
    title: 'Growth',
    timeline: 'Revenue Scale',
    body: 'Double down on validated products, scale distribution, harden technology, and turn profit-centers into repeatable engines.',
  },
  {
    label: 'Phase 3',
    title: 'Spin-Offs',
    timeline: 'Entrepreneur-Led',
    body: 'Transform winning projects into independent sub-companies led by external entrepreneurs, while the studio retains equity.',
  },
];

const team = [
  {
    name: 'Harari',
    title: 'CEO & Venture Architect',
    bio: 'Leads company vision, investor strategy, and the venture studio operating model.',
  },
  {
    name: 'Kogus',
    title: 'CTO & AI Systems Lead',
    bio: 'Owns autonomous agent architecture, product engineering, and scalable technical execution.',
  },
  {
    name: 'Kalik',
    title: 'Growth & Partnerships',
    bio: 'Builds market channels, strategic partnerships, and enterprise adoption paths.',
  },
];

function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 bg-radial-grid" />
      <div className="jarvis-grid absolute inset-0 opacity-70" />
      <div className="scanline absolute inset-x-0 top-0 h-1/2" />
      <motion.div
        className="absolute left-1/2 top-28 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-cyan-300/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="ring-pulse absolute left-1/2 top-40 h-[330px] w-[330px] -translate-x-1/2 rounded-full border border-violet-300/25 shadow-violet"
        animate={{ rotate: -360 }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      />
      {[...Array(18)].map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/70 shadow-[0_0_18px_rgba(34,211,238,.9)]"
          style={{ left: `${8 + ((index * 13) % 86)}%`, top: `${12 + ((index * 17) % 72)}%` }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.35, 0.8] }}
          transition={{ duration: 2.8 + index * 0.11, repeat: Infinity, delay: index * 0.13 }}
        />
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
        <Sparkles className="h-4 w-4" /> {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{body}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-void text-white">
      <section className="relative min-h-screen px-6 py-8 md:px-10">
        <AnimatedBackground />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-200/30 bg-gradient-to-br from-cyan-300/20 to-violet-300/20 text-sm font-black tracking-[-0.08em] text-cyan-100 shadow-glow">
              HKK
            </span>
            <span className="leading-tight">
              <span className="block">HKK AI Solutions</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200/70">Harari Kogus Kalik</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#model" className="hover:text-cyan-200">Model</a>
            <a href="#portfolio" className="hover:text-cyan-200">Portfolio</a>
            <a href="#team" className="hover:text-cyan-200">Team</a>
            <a href="#contact" className="hover:text-cyan-200">Contact</a>
          </div>
        </nav>

        <div id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pb-20 pt-24 md:grid-cols-[1.08fr_.92fr] md:pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm text-violet-100">
              <ShieldCheck className="h-4 w-4" /> Harari • Kogus • Kalik | Investor-ready AI solutions engine
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                Autonomous AI Solutions.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Harari, Kogus, and Kalik’s AI solutions studio developing investable products—from autonomous investment agents to smart SaaS platforms.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#portfolio" className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-200">
                Explore Our Portfolio <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300/60 hover:bg-violet-300/10">
                Investor Relations
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 text-center">
              {['5 AI Verticals', '3-Phase Model', 'Spin-Off Upside'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }} className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute inset-10 rounded-full border border-cyan-200/20" />
            <div className="absolute inset-20 rounded-full border border-violet-200/20" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} className="absolute inset-6 rounded-full border border-dashed border-cyan-300/35" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: 'linear' }} className="absolute inset-16 rounded-full border border-dashed border-violet-300/35" />
            <div className="absolute inset-28 grid place-items-center rounded-full border border-white/10 bg-slate-950/70 shadow-violet backdrop-blur-2xl">
              <div className="text-5xl font-black tracking-[-0.12em] text-cyan-100 drop-shadow-[0_0_24px_rgba(34,211,238,.65)]">HKK</div>
              <span className="absolute bottom-16 text-xs uppercase tracking-[0.38em] text-cyan-100/70">AI SOLUTIONS</span>
            </div>
            {['Agents', 'SaaS', 'Capital', 'Education', 'Aviation'].map((node, i) => (
              <motion.div
                key={node}
                className="absolute rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-cyan-100 shadow-glow backdrop-blur"
                style={{ left: `${38 + Math.cos((i / 5) * Math.PI * 2) * 38}%`, top: `${45 + Math.sin((i / 5) * Math.PI * 2) * 38}%` }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity }}
              >
                {node}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="model" className="relative px-6 py-24 md:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow="Studio Approach" title="An AI solutions studio built to create, validate, and spin out AI companies." body="We combine Harari, Kogus, and Kalik’s founder-led execution with shared AI infrastructure, product velocity, and a repeatable company-building system." />
          <div className="grid gap-5 md:grid-cols-3">
            {phases.map((phase, index) => (
              <motion.article
                key={phase.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/40"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-violet-300/20" />
                <div className="mb-7 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">{phase.label}</span>
                  <span className="text-sm text-slate-400">{phase.timeline}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{phase.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{phase.body}</p>
              </motion.article>
            ))}
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 rounded-3xl border border-violet-300/20 bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-blue-500/10 p-7 backdrop-blur-xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Equity structure</p>
                <h3 className="mt-2 text-2xl font-semibold">Profit-center incentives with founder alignment.</h3>
              </div>
              <p className="max-w-3xl leading-7 text-slate-300">
                Each internal project operates as a profit-center. Founders maintain a baseline of 10% each, while the Project Lead manages the remaining equity distribution to incentivize the team and attract entrepreneurial leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Portfolio" title="Five AI categories with multiple paths to revenue and spin-off value." body="A focused but diversified pipeline: autonomous finance, SaaS, agentic assistants, AI education, and aviation simulation intelligence." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: index * 0.06 }}
                  className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/40"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
                  <div className="mb-8 flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/10 text-cyan-100 shadow-glow">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item.eyebrow}</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{item.body}</p>
                  <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-cyan-300/5 to-transparent opacity-0 transition group-hover:opacity-100" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Founding Core" title="Operator-led, AI-native, designed for compounding execution." body="Harari, Kogus, and Kalik combine venture architecture, AI engineering, and market development—then bring in specialized leads as products mature." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {team.map((person, index) => (
              <motion.article key={person.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.07 }} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
                <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-violet-300/20 text-cyan-100">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="mt-1 text-sm text-cyan-200">{person.title}</p>
                <p className="mt-4 leading-7 text-slate-300">{person.bio}</p>
              </motion.article>
            ))}
            <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.24 }} className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-cyan-300/10 p-6 backdrop-blur-xl">
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-cyan-300/20 blur-2xl" />
              <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-cyan-100 shadow-glow">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold">Join the Core</h3>
              <p className="mt-1 text-sm text-cyan-200">We are hiring</p>
              <p className="mt-4 leading-7 text-slate-300">Seeking 2–3 exceptional product, AI, and growth talents ready to lead high-upside venture tracks.</p>
            </motion.article>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl md:grid-cols-[.9fr_1.1fr] md:p-10">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <Building2 className="h-4 w-4" /> Investor Relations
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Let’s build the next autonomous AI companies.</h2>
            <p className="mt-5 leading-8 text-slate-300">For investors, strategic partners, and future entrepreneurs interested in joining or backing the studio.</p>
            <div className="mt-8 space-y-3 text-slate-300">
              <a href="mailto:investors@hkk-ai-solutions.com" className="flex items-center gap-3 hover:text-cyan-200"><Mail className="h-5 w-5" /> investors@hkk-ai-solutions.com</a>
              <a href="https://www.linkedin.com" className="flex items-center gap-3 hover:text-cyan-200"><Link className="h-5 w-5" /> LinkedIn</a>
              <a href="https://x.com" className="flex items-center gap-3 hover:text-cyan-200"><AtSign className="h-5 w-5" /> Twitter / X</a>
            </div>
          </div>
          <form className="grid gap-4" action="mailto:investors@hkk-ai-solutions.com" method="post" encType="text/plain">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" name="name" placeholder="Full name" required />
              <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" name="email" placeholder="Email" type="email" required />
            </div>
            <select className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-slate-300 outline-none transition focus:border-cyan-300/60" name="interest" defaultValue="">
              <option value="" disabled>I am interested in...</option>
              <option>Investor conversation</option>
              <option>Strategic partnership</option>
              <option>Joining as entrepreneur / operator</option>
              <option>Enterprise AI integration</option>
            </select>
            <textarea className="min-h-36 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" name="message" placeholder="Tell us what you want to explore" required />
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-6 py-4 font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5" type="submit">
              Send Inquiry <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 md:px-10">
        <p>© 2026 HKK AI Solutions. Harari • Kogus • Kalik — building autonomous AI solutions with disciplined venture execution.</p>
      </footer>
    </main>
  );
}
