import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Cloud,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";

const experiences = [
  {
    company: "PayPal",
    role: "Senior Software Engineer",
    period: "Jan 2025 – Present",
    location: "San Jose, CA",
    highlight: "1M+ users annually",
    summary:
      "Building secure onboarding and compliance-driven backend systems with Java and Spring Boot for high-scale user journeys.",
    bullets: [
      "Designed onboarding APIs for signup, checkpoint, submit, and retrieval flows, reducing user drop-off by 20%.",
      "Integrated KYC and legal workflows across Wallet, Identity, Risk, Compliance, Contact Verification, and Credentials services.",
      "Owned API specifications, reducing integration errors by 30% and accelerating adoption by partner teams.",
      "Built unit, functional, and integration tests with 95–100% code coverage and reduced manual QA effort by 25%.",
      "Mentored engineers and supported end-to-end delivery, release quality, and production support for critical business systems.",
    ],
  },
  {
    company: "Walmart Global Tech",
    role: "Software Engineer (Contract)",
    period: "Jun 2024 – Jan 2025",
    location: "Sunnyvale, CA",
    highlight: "25% efficiency gain",
    summary:
      "Developed and optimized enterprise commerce backend APIs with strong testing discipline and service integrations.",
    bullets: [
      "Built Sellers Chargeback backend APIs using Java and Spring, improving transaction efficiency by 25%.",
      "Integrated 3+ external services and improved platform extensibility and compliance accuracy.",
      "Led unit testing and deployment quality efforts with 98% code coverage.",
      "Used Git and JIRA to improve release flow and reduce deployment errors by 20%.",
    ],
  },
  {
    company: "Ericsson",
    role: "Software Engineer",
    period: "Nov 2016 – Aug 2022",
    location: "Noida, India",
    highlight: "11M+ mobile subscribers",
    summary:
      "Engineered carrier-scale microservices and deployment systems with a strong focus on reliability, messaging, and operational excellence.",
    bullets: [
      "Built scalable microservices using Java, Spring Boot, and Kubernetes with 99.9% uptime.",
      "Designed CI/CD frameworks with 95% deployment success and faster lead time for changes.",
      "Integrated Kafka-based messaging, improving message processing speed by 40%.",
      "Resolved 150+ recurring code issues and reduced production defects by 60%.",
      "Delivered customer adaptation solutions for 10+ global clients with high SLA success.",
    ],
  },
];

const skillGroups = [
  {
    title: "Backend Engineering",
    icon: Server,
    items: ["Java", "Spring Boot", "REST APIs", "Microservices", "Distributed Systems", "API Design"],
  },
  {
    title: "Cloud & Platform",
    icon: Cloud,
    items: ["AWS", "GCP", "Kubernetes", "Docker", "CI/CD", "Jenkins"],
  },
  {
    title: "Data & Messaging",
    icon: Database,
    items: ["SQL", "MongoDB", "DynamoDB", "Kafka", "PostgreSQL"],
  },
  {
    title: "Quality & Delivery",
    icon: Workflow,
    items: ["Unit Testing", "Rest Assured", "TestNG", "Cucumber", "Agile", "Production Support"],
  },
];

const projects = [
  {
    title: "THU Bridge Mobile Application",
    stack: "iOS · Flask · PostgreSQL",
    description:
      "Healthcare communication platform designed to bridge language gaps between patients, interpreters, and administrators.",
    href: "#",
  },
  {
    title: "Airport Management System",
    stack: "Node.js · React · MongoDB",
    description:
      "Operations platform for flight details, baggage workflows, and gate maintenance with an integrated system view.",
    href: "https://github.com/gopinathsjsu/team-project-data-structure-deadheads",
  },
  {
    title: "Road Trip Planner",
    stack: "JavaScript · REST APIs · HTML/CSS",
    description:
      "Travel experience with live events, fuel stations, and attractions brought together in one interactive planner.",
    href: "https://github.com/prajwalnadagouda/Road-Trip-Planner",
  },
];

const stats = [
  ["6+", "Years Building Backend Systems"],
  ["1M+", "Users Impacted at PayPal"],
  ["11M+", "Subscribers Supported at Ericsson"],
  ["95–100%", "Code Coverage on Critical Modules"],
];

export default function App() {
  return (
    <div className="portfolio-root">
      <style>{`
        :root {
          --bg: #040404;
          --panel: rgba(255,255,255,0.05);
          --panel-2: rgba(255,255,255,0.03);
          --line: rgba(255,255,255,0.09);
          --soft: rgba(255,255,255,0.62);
          --muted: rgba(255,255,255,0.42);
          --white: #ffffff;
          --blue: #7dd3fc;
          --violet: #a78bfa;
        }
        * { box-sizing: border-box; }
        html, body, #root { margin: 0; min-height: 100%; background: var(--bg); }
        body {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.09), transparent 26%),
            radial-gradient(circle at 82% 18%, rgba(80, 80, 255, 0.18), transparent 22%),
            radial-gradient(circle at 18% 76%, rgba(125,211,252,0.10), transparent 18%),
            linear-gradient(180deg, #060606 0%, #040404 100%);
          color: var(--white);
        }
        a { color: inherit; text-decoration: none; }
        .portfolio-root { min-height: 100vh; }
        .shell { width: min(1280px, calc(100% - 32px)); margin: 0 auto; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          backdrop-filter: blur(20px);
          background: rgba(0,0,0,0.45);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          width: min(1280px, calc(100% - 32px));
          margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
          padding: 18px 0;
        }
        .brand {
          font-size: 12px; letter-spacing: 0.34em; text-transform: uppercase; color: rgba(255,255,255,0.88);
        }
        .nav-links { display: flex; gap: 26px; }
        .nav-links a { font-size: 14px; color: rgba(255,255,255,0.64); }
        .nav-links a:hover { color: white; }
        .hero { padding: 54px 0 34px; }
        .hero-top { text-align: center; max-width: 980px; margin: 0 auto; position: relative; }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          border: 1px solid var(--line); background: rgba(255,255,255,0.05);
          padding: 10px 16px; border-radius: 999px; font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: rgba(255,255,255,0.68);
        }
        .hero-title {
          margin: 24px 0 0;
          font-size: clamp(54px, 9vw, 108px);
          line-height: 0.92; letter-spacing: -0.06em; font-weight: 700;
          background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.45) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          max-width: 860px; margin: 24px auto 0; font-size: clamp(18px, 2vw, 22px);
          line-height: 1.8; color: var(--soft);
        }
        .hero-actions {
          margin-top: 34px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;
        }
        .btn {
          display: inline-flex; align-items: center; gap: 10px; border-radius: 999px;
          padding: 14px 22px; font-size: 14px; font-weight: 600;
          transition: 180ms ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-solid { background: white; color: black; }
        .btn-ghost { background: rgba(255,255,255,0.05); border: 1px solid var(--line); color: white; }
        .cinema {
          margin-top: 42px; position: relative;
          border-radius: 34px; border: 1px solid var(--line);
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.16), transparent 34%),
            linear-gradient(135deg, #0f172a 0%, #0b1120 32%, #040404 100%);
          overflow: hidden; box-shadow: 0 28px 100px rgba(0,0,0,0.55);
        }
        .cinema-grid {
          display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 28px; padding: 38px;
        }
        .cinema-copy small, .section-label {
          color: var(--muted); text-transform: uppercase; letter-spacing: 0.28em; font-size: 11px;
        }
        .cinema-copy h2 {
          margin: 14px 0 0; font-size: clamp(34px, 5vw, 58px); line-height: 0.98; letter-spacing: -0.045em;
        }
        .cinema-copy p {
          margin: 18px 0 0; color: var(--soft); line-height: 1.85; max-width: 700px;
        }
        .stats {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; align-self: end;
        }
        .stat {
          background: rgba(0,0,0,0.26); border: 1px solid var(--line); border-radius: 24px; padding: 20px;
        }
        .stat strong { display: block; font-size: 28px; }
        .stat span { display: block; margin-top: 8px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
        .section { padding: 34px 0; }
        .section-head { margin-bottom: 22px; display: flex; align-items: end; justify-content: space-between; gap: 20px; }
        .section-head h3 { margin: 10px 0 0; font-size: clamp(30px, 4vw, 50px); line-height: 1; letter-spacing: -0.04em; }
        .section-intro { max-width: 740px; color: var(--soft); line-height: 1.8; }
        .summary-grid {
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 20px;
        }
        .panel {
          border: 1px solid var(--line); background: var(--panel-2); border-radius: 30px; padding: 26px; backdrop-filter: blur(18px);
        }
        .summary-copy {
          font-size: 17px; line-height: 1.9; color: var(--soft);
        }
        .quick-list { display: grid; gap: 14px; }
        .quick-item {
          display: flex; gap: 14px; align-items: start; padding: 16px; border-radius: 22px;
          background: rgba(255,255,255,0.035); border: 1px solid var(--line);
        }
        .quick-item .icon-wrap,
        .skill-icon,
        .edu-icon,
        .contact-icon {
          flex: 0 0 auto;
          width: 42px; height: 42px; border-radius: 16px; display: grid; place-items: center;
          background: rgba(255,255,255,0.05); border: 1px solid var(--line);
        }
        .experience-list { display: grid; gap: 20px; }
        .experience-card {
          position: relative; overflow: hidden;
          border-radius: 34px; border: 1px solid var(--line);
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          padding: 28px;
        }
        .experience-card::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at top right, rgba(125,211,252,0.12), transparent 26%);
        }
        .exp-top { display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: start; }
        .exp-title { font-size: 28px; margin: 0; letter-spacing: -0.03em; }
        .exp-role { margin-top: 6px; color: rgba(255,255,255,0.76); font-size: 16px; }
        .exp-meta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 12px; color: var(--muted); font-size: 13px; }
        .pill {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid var(--line); background: rgba(255,255,255,0.05);
          padding: 10px 14px; border-radius: 999px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.68);
        }
        .exp-summary { margin-top: 18px; color: var(--soft); line-height: 1.8; max-width: 840px; }
        .bullet-grid {
          display: grid; gap: 12px; margin-top: 20px;
        }
        .bullet {
          display: flex; gap: 12px; align-items: start; padding: 14px 16px;
          border-radius: 20px; background: rgba(0,0,0,0.20); border: 1px solid var(--line); color: rgba(255,255,255,0.80); line-height: 1.75;
        }
        .bullet-dot { width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(180deg, #7dd3fc, #a78bfa); margin-top: 10px; }
        .skills-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px;
        }
        .skill-card {
          border: 1px solid var(--line); background: var(--panel-2); border-radius: 28px; padding: 22px;
        }
        .skill-card h4 { margin: 16px 0 0; font-size: 21px; }
        .skill-items { margin-top: 14px; display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-chip {
          border-radius: 999px; padding: 10px 14px; font-size: 13px;
          background: rgba(0,0,0,0.24); border: 1px solid var(--line); color: rgba(255,255,255,0.84);
        }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .project-card {
          border: 1px solid var(--line); background: rgba(255,255,255,0.04); border-radius: 30px; padding: 24px; transition: 180ms ease;
        }
        .project-card:hover { transform: translateY(-2px); background: rgba(255,255,255,0.06); }
        .project-stack { color: var(--muted); text-transform: uppercase; letter-spacing: 0.18em; font-size: 11px; }
        .project-card h4 { margin: 14px 0 0; font-size: 27px; line-height: 1.08; letter-spacing: -0.03em; }
        .project-card p { margin: 16px 0 0; line-height: 1.8; color: var(--soft); }
        .project-link { margin-top: 24px; display: inline-flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.84); }
        .dual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .edu-card { border: 1px solid var(--line); background: var(--panel-2); border-radius: 30px; padding: 24px; }
        .edu-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .edu-card h4 { margin: 0; font-size: 26px; letter-spacing: -0.03em; }
        .edu-item {
          border: 1px solid var(--line); background: rgba(255,255,255,0.035); border-radius: 22px; padding: 18px; margin-top: 14px;
        }
        .edu-item strong { display: block; font-size: 18px; }
        .edu-item span { display: block; margin-top: 6px; color: rgba(255,255,255,0.76); }
        .edu-item small { display: block; margin-top: 8px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; }
        .contact-box {
          border: 1px solid var(--line); border-radius: 36px; padding: 28px;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.11), transparent 34%),
            linear-gradient(135deg, #111 0%, #090909 55%, #0f172a 100%);
          box-shadow: 0 32px 100px rgba(0,0,0,0.52);
        }
        .contact-grid { display: grid; grid-template-columns: 1fr 0.95fr; gap: 20px; align-items: start; }
        .contact-copy h3 { margin: 10px 0 0; font-size: clamp(30px, 4vw, 48px); line-height: 1; letter-spacing: -0.04em; }
        .contact-copy p { margin-top: 18px; color: var(--soft); line-height: 1.85; max-width: 720px; }
        .contact-links { display: grid; gap: 14px; }
        .contact-link {
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          border-radius: 22px; border: 1px solid var(--line); background: rgba(255,255,255,0.04); padding: 16px 18px;
        }
        .contact-link:hover { background: rgba(255,255,255,0.06); }
        .contact-left { display: flex; align-items: center; gap: 14px; }
        .contact-meta small { display: block; text-transform: uppercase; letter-spacing: 0.18em; color: var(--muted); font-size: 11px; }
        .contact-meta span { display: block; margin-top: 6px; color: rgba(255,255,255,0.86); }
        .footer { padding: 24px 0 50px; color: var(--muted); font-size: 13px; }
        @media (max-width: 1100px) {
          .cinema-grid, .summary-grid, .contact-grid, .dual-grid { grid-template-columns: 1fr; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
          .projects-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 760px) {
          .shell, .nav-inner { width: min(100% - 24px, 1280px); }
          .nav-links { display: none; }
          .hero { padding-top: 36px; }
          .cinema-grid { padding: 24px; }
          .stats, .skills-grid, .projects-grid { grid-template-columns: 1fr; }
          .experience-card, .panel, .edu-card, .project-card, .contact-box { padding: 22px; }
          .hero-subtitle { font-size: 17px; }
        }
      `}</style>

      <header className="nav">
        <div className="nav-inner">
          <div className="brand">Chirag Arora</div>
          <nav className="nav-links">
            <a href="#summary">Summary</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="shell">
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-top"
          >
            <div className="eyebrow">
              <Sparkles size={14} />
              Cinematic Backend Engineer Portfolio
            </div>
            <h1 className="hero-title">
              Scalable systems.
              <br />
              Premium presentation.
            </h1>
            <p className="hero-subtitle">
              Senior Backend Engineer with 6+ years of experience building secure APIs, distributed systems, CI/CD pipelines,
              and production-grade backend platforms across PayPal, Walmart Global Tech, and Ericsson.
            </p>
            <div className="hero-actions">
              <a href="#experience" className="btn btn-solid">
                Explore Experience <ArrowRight size={16} />
              </a>
              <a href="https://github.com/chirag-arora01" target="_blank" rel="noreferrer" className="btn btn-ghost">
                View GitHub <Github size={16} />
              </a>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="cinema"
          >
            <div className="cinema-grid">
              <div className="cinema-copy">
                <small>Featured Profile</small>
                <h2>Enterprise backend engineering, presented like a flagship product.</h2>
                <p>
                  This portfolio is designed to feel more like an Apple keynote and a Netflix launch page than a generic developer site.
                  It tells the story recruiters actually care about: scale, reliability, architecture, ownership, and impact.
                </p>
              </div>
              <div className="stats">
                {stats.map(([value, label]) => (
                  <div key={label} className="stat">
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </section>

        <section className="section" id="summary">
          <div className="section-head">
            <div>
              <div className="section-label">Professional Summary</div>
              <h3>Resume structure, reimagined as a premium product page.</h3>
            </div>
          </div>

          <div className="summary-grid">
            <div className="panel summary-copy">
              Experienced Software Engineer with 6+ years of expertise in backend system design and cloud technologies.
              Specialized in microservices, system scalability, CI/CD, and secure backend architecture with a strong record of delivering reliable,
              high-performance systems for global organizations. Strong at cross-functional collaboration, testing discipline, project delivery,
              mentorship, and production support.
            </div>

            <div className="quick-list">
              {[
                [Code2, "Core Stack", "Java, Spring Boot, REST APIs, Distributed Systems"],
                [Shield, "Domain Strength", "Onboarding, KYC, compliance, reliability, backend security"],
                [Layers3, "Engineering Focus", "Microservices, CI/CD, automation, scalability, production quality"],
              ].map(([Icon, title, text], index) => {
                const Cmp = Icon as React.ComponentType<{ size?: number }>;
                return (
                  <motion.div
                    key={title as string}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="quick-item"
                  >
                    <div className="icon-wrap"><Cmp size={18} /></div>
                    <div>
                      <strong>{title as string}</strong>
                      <div style={{ marginTop: 8, color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}>{text as string}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-head">
            <div>
              <div className="section-label">Work Experience</div>
              <h3>Impact across payments, commerce, and telecom-scale systems.</h3>
            </div>
            <div className="section-intro">
              Structured like a resume section, but elevated into a visual case-study flow that hiring managers can scan quickly.
            </div>
          </div>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="experience-card"
              >
                <div className="exp-top">
                  <div>
                    <h4 className="exp-title">{exp.company}</h4>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-meta">
                      <span className="pill"><Briefcase size={12} /> {exp.period}</span>
                      <span className="pill"><MapPin size={12} /> {exp.location}</span>
                    </div>
                  </div>
                  <div className="pill">{exp.highlight}</div>
                </div>
                <p className="exp-summary">{exp.summary}</p>
                <div className="bullet-grid">
                  {exp.bullets.map((bullet) => (
                    <div key={bullet} className="bullet">
                      <span className="bullet-dot" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-head">
            <div>
              <div className="section-label">Technical Skills</div>
              <h3>Grouped exactly like a strong resume, designed like a product showcase.</h3>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="skill-card"
                >
                  <div className="skill-icon"><Icon size={18} /></div>
                  <h4>{group.title}</h4>
                  <div className="skill-items">
                    {group.items.map((item) => (
                      <span key={item} className="skill-chip">{item}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <div>
              <div className="section-label">Projects</div>
              <h3>Selected builds beyond enterprise work.</h3>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="project-card"
              >
                <div className="project-stack">{project.stack}</div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-link">
                  View Project <ArrowRight size={16} />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-head">
            <div>
              <div className="section-label">Education & Recognition</div>
              <h3>The supporting credentials, presented with the same level of polish.</h3>
            </div>
          </div>

          <div className="dual-grid">
            <div className="edu-card">
              <div className="edu-head">
                <div className="edu-icon"><GraduationCap size={18} /></div>
                <h4>Education</h4>
              </div>
              <div className="edu-item">
                <strong>San Jose State University</strong>
                <span>Master of Science, Software Engineering</span>
                <small>San Jose, CA · 2022 – 2024 · CGPA 3.82 / 4</small>
              </div>
              <div className="edu-item">
                <strong>Amity University</strong>
                <span>Bachelor of Technology, Computer Science</span>
                <small>Noida, India · 2012 – 2016 · CGPA 3.70 / 4</small>
              </div>
            </div>

            <div className="edu-card">
              <div className="edu-head">
                <div className="edu-icon"><Award size={18} /></div>
                <h4>Awards</h4>
              </div>
              <div className="edu-item">
                <strong>Ericsson Ace Award</strong>
                <span>Recognized for exceptional technical competency.</span>
                <small>2021</small>
              </div>
              <div className="edu-item">
                <strong>Customer Excellence Award</strong>
                <span>Awarded for consistently delivering outstanding customer results.</span>
                <small>2018</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-box">
            <div className="contact-grid">
              <div className="contact-copy">
                <div className="section-label">Contact</div>
                <h3>Ready for recruiters, managers, and teams building serious backend products.</h3>
                <p>
                  If you’re looking for a backend engineer who combines large-scale systems thinking with delivery discipline,
                  testing rigor, and polished execution, I’d love to connect.
                </p>
              </div>

              <div className="contact-links">
                {[
                  [Github, "GitHub", "github.com/chirag-arora01", "https://github.com/chirag-arora01"],
                  [Linkedin, "LinkedIn", "linkedin.com/in/chirag-arora-1001", "https://www.linkedin.com/in/chirag-arora-1001/"],
                  [Mail, "Email", "arorachirag1001@gmail.com", "mailto:arorachirag1001@gmail.com"],
                  [Phone, "Phone", "+1 (669) 877-4684", "tel:+16698774684"],
                ].map(([Icon, label, value, href]) => {
                  const Cmp = Icon as React.ComponentType<{ size?: number }>;
                  return (
                    <a key={label as string} href={href as string} target={(href as string).startsWith("http") ? "_blank" : undefined} rel={(href as string).startsWith("http") ? "noreferrer" : undefined} className="contact-link">
                      <div className="contact-left">
                        <div className="contact-icon"><Cmp size={18} /></div>
                        <div className="contact-meta">
                          <small>{label as string}</small>
                          <span>{value as string}</span>
                        </div>
                      </div>
                      <ArrowRight size={16} style={{ color: "rgba(255,255,255,0.45)" }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          Crafted to feel premium, but structured to stay recruiter-friendly.
        </footer>
      </main>
    </div>
  );
}
