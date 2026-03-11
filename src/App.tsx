import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Play,
  Server,
  Shield,
  Cloud,
  Database,
  Layers3,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const featuredWork = [
  {
    title: "PayPal Identity & Onboarding",
    subtitle: "A premium onboarding platform for millions of users.",
    metric: "1M+ users annually",
    description:
      "Designed secure onboarding APIs and compliance-driven backend flows with Java, Spring Boot, and service orchestration across critical downstream systems.",
  },
  {
    title: "Walmart Chargeback Systems",
    subtitle: "Enterprise-grade backend experiences for seller operations.",
    metric: "25% efficiency gain",
    description:
      "Built and optimized backend APIs that improved transaction processing quality, compliance accuracy, and extensibility across commerce services.",
  },
  {
    title: "Ericsson Telecom Platform",
    subtitle: "Carrier-scale systems engineered for uptime and resilience.",
    metric: "11M+ subscribers",
    description:
      "Developed highly scalable microservices, CI/CD workflows, and event-driven backend services with reliability and observability at the core.",
  },
];

const capabilityCards = [
  {
    icon: Server,
    title: "Backend Platforms",
    text: "Production APIs, service orchestration, fault tolerance, and domain-driven backend design.",
  },
  {
    icon: Shield,
    title: "Trust & Compliance",
    text: "KYC, identity, legal flows, risk integrations, and systems built for secure scale.",
  },
  {
    icon: Cloud,
    title: "Cloud & Delivery",
    text: "CI/CD, deployment automation, modern cloud tooling, and backend systems that ship cleanly.",
  },
  {
    icon: Database,
    title: "Data & Reliability",
    text: "Observability, testing, throughput, distributed systems thinking, and resilient architecture.",
  },
];

const projects = [
  {
    title: "Airport Management System",
    genre: "Operations Platform",
    href: "https://github.com/gopinathsjsu/team-project-data-structure-deadheads",
  },
  {
    title: "Road Trip Planner",
    genre: "Consumer Travel App",
    href: "https://github.com/prajwalnadagouda/Road-Trip-Planner",
  },
  {
    title: "GitHub Profile",
    genre: "Code Portfolio",
    href: "https://github.com/chirag-arora01",
  },
  {
    title: "LinkedIn Presence",
    genre: "Professional Brand",
    href: "https://www.linkedin.com/in/chirag-arora-1001/",
  },
];

const stack = [
  "Java",
  "Spring Boot",
  "Microservices",
  "Distributed Systems",
  "Kubernetes",
  "AWS",
  "GCP",
  "SQL",
  "CI/CD",
  "Kafka",
  "Docker",
  "REST APIs",
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(80,80,255,0.18),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08),transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_15%,transparent_85%,rgba(255,255,255,0.04))]" />

        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <div className="text-sm font-medium tracking-[0.35em] text-white/80 uppercase">
              Chirag Arora
            </div>
            <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
              <a href="#featured" className="transition hover:text-white">Featured</a>
              <a href="#capabilities" className="transition hover:text-white">Capabilities</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </div>
        </header>

        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Premium Backend Portfolio
            </div>

            <h1 className="bg-gradient-to-b from-white via-white to-white/45 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl lg:text-8xl">
              Backend engineering,
              <br />
              designed like a product.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              I build scalable backend systems with the same obsession for craft that great consumer products bring to design.
              Payments, compliance, distributed systems, microservices, and production reliability — presented in a cinematic,
              Apple-meets-Netflix experience.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                <Play className="h-4 w-4 fill-black" />
                Explore Portfolio
              </a>
              <a
                href="https://github.com/chirag-arora01"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                View GitHub
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
          >
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_35%),linear-gradient(135deg,#0f172a_0%,#0b1020_35%,#050505_100%)] px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
              <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

              <div className="relative grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/50">Now Streaming</div>
                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    Enterprise-grade systems.
                    <br />
                    Consumer-grade storytelling.
                  </h2>
                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                    Senior Backend Engineer with 6+ years of experience across PayPal, Walmart Global Tech, and Ericsson.
                    I specialize in API design, service scalability, testing automation, CI/CD, and production-ready backend architecture.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Users Impacted", "1M+"],
                    ["Subscriber Scale", "11M+"],
                    ["System Reliability", "99.9%"],
                    ["Engineering Focus", "Backend"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl">
                      <div className="text-2xl font-semibold text-white">{value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <section id="featured" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/40">Featured Work</div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Signature systems I’ve built
            </h3>
          </div>
          <div className="hidden text-sm text-white/45 md:block">Inspired by premium product showcases</div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredWork.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/55">
                  {item.metric}
                </div>
                <ChevronRight className="h-4 w-4 text-white/35 transition group-hover:translate-x-1 group-hover:text-white/75" />
              </div>
              <h4 className="mt-6 text-2xl font-semibold text-white">{item.title}</h4>
              <p className="mt-3 text-sm text-white/50">{item.subtitle}</p>
              <p className="mt-6 text-sm leading-7 text-white/70">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.28em] text-white/40">Capabilities</div>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The backend stack behind the experience
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
            Architecture, platform engineering, secure workflows, deployment quality, and systems designed to survive real-world scale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilityCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="mt-5 text-xl font-semibold text-white">{card.title}</h4>
                <p className="mt-3 text-sm leading-7 text-white/60">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 backdrop-blur-2xl sm:p-10 lg:p-12">
          <div className="flex items-center gap-3 text-white/70">
            <Layers3 className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.28em]">Tech Stack</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/40">Projects & Profiles</div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Explore the portfolio library
            </h3>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-white/40">{project.genre}</div>
              <div className="mt-4 text-2xl font-semibold text-white">{project.title}</div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm text-white/75">
                Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-[38px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_35%),linear-gradient(135deg,#111111_0%,#090909_50%,#0f172a_100%)] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-white/45">Contact</div>
              <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Ready for recruiters, hiring managers, and product-minded teams.
              </h3>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                If you’re looking for a backend engineer who can combine scale, architecture, reliability, and polished execution,
                I’d love to connect.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/chirag-arora01",
                  href: "https://github.com/chirag-arora01",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/chirag-arora-1001",
                  href: "https://www.linkedin.com/in/chirag-arora-1001/",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "arorachirag1001@gmail.com",
                  href: "mailto:arorachirag1001@gmail.com",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center justify-between rounded-[26px] border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-white/40">{item.label}</div>
                        <div className="mt-1 text-sm text-white/85">{item.value}</div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/40" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
