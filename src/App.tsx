import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Cloud,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Play,
  Radar,
  Server,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";

const experience = [
  {
    company: "PayPal",
    role: "Senior Software Engineer",
    location: "San Jose, CA",
    period: "Jan 2025 – Present",
    metric: "1M+ users annually",
    accent: "cyan",
    summary:
      "Secure onboarding, identity, compliance, and backend orchestration for large-scale user journeys.",
    points: [
      "Designed and developed onboarding APIs for signup, checkpoint, submit, and retrieval flows in Java and Spring Boot.",
      "Enabled seamless onboarding for 1M+ users annually and reduced user drop-off by 20%.",
      "Engineered modular KYC and legal compliance flows integrated with Wallet, Identity, Risk, Compliance, Contact Verification, and Credentials services.",
      "Owned API specifications and documentation, reducing integration errors by 30% and accelerating partner adoption.",
      "Built unit, functional, and integration test automation with 95–100% code coverage and reduced manual QA cycles by 25%.",
      "Mentored engineers and supported end-to-end development, testing, deployment, and production support for critical backend systems.",
    ],
  },
  {
    company: "Walmart Global Tech",
    role: "Software Engineer (Contract)",
    location: "Sunnyvale, CA",
    period: "Jun 2024 – Jan 2025",
    metric: "25% efficiency gain",
    accent: "violet",
    summary:
      "Enterprise commerce backend APIs with strong service integration, test discipline, and release quality.",
    points: [
      "Developed and optimized backend APIs for the Sellers Chargeback feature using Java and Spring.",
      "Improved transaction efficiency by 25% and compliance accuracy by 15%.",
      "Integrated 3+ third-party APIs and services to improve platform extensibility.",
      "Led testing and deployment quality efforts with 98% code coverage.",
      "Used Git and JIRA to streamline release cycles and reduce deployment errors by 20%.",
    ],
  },
  {
    company: "Ericsson",
    role: "Software Engineer",
    location: "Noida, India",
    period: "Nov 2016 – Aug 2022",
    metric: "11M+ subscribers",
    accent: "blue",
    summary:
      "Carrier-scale microservices, messaging, CI/CD, and reliability engineering for telecom platforms.",
    points: [
      "Engineered scalable microservices using Java, Spring Boot, and Kubernetes supporting 11M+ mobile subscribers.",
      "Delivered 99.9% uptime and improved incident response time by 40%.",
      "Designed and implemented CI/CD frameworks with 95% deployment success.",
      "Integrated Kafka-based messaging and improved message processing speed by 40%.",
      "Resolved 150+ recurring code issues, reducing production defects by 60%.",
      "Delivered customer adaptation solutions for 10+ global clients with a 98% SLA resolution rate.",
    ],
  },
];

const skills = [
  {
    title: "Backend Engineering",
    icon: Server,
    items: ["Java", "Spring Boot", "Microservices", "Distributed Systems", "RESTful APIs", "API Design"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Google Cloud Platform", "Kubernetes", "Docker", "CI/CD", "Jenkins"],
  },
  {
    title: "Data & Testing",
    icon: Database,
    items: ["SQL", "MongoDB", "DynamoDB", "PostgreSQL", "Rest Assured", "TestNG", "Cucumber"],
  },
  {
    title: "Engineering Practices",
    icon: Workflow,
    items: ["Agile", "Production Support", "Unit Testing", "Functional Testing", "Automation", "Mentorship"],
  },
];

const projects = [
  {
    title: "THU Bridge Mobile Application",
    stack: "iOS · Flask · PostgreSQL",
    description:
      "Healthcare communication app designed to bridge language gaps between patients, interpreters, and administrators.",
    href: "#",
  },
  {
    title: "Airport Management System",
    stack: "Node.js · React.js · MongoDB",
    description:
      "Integrated airport operations system covering flight details, baggage management, and gate maintenance.",
    href: "https://github.com/gopinathsjsu/team-project-data-structure-deadheads",
  },
  {
    title: "Road Trip Planner",
    stack: "HTML · CSS · JavaScript · REST APIs",
    description:
      "Travel planner bringing together live events, fuel stations, and attractions in a single experience.",
    href: "https://github.com/prajwalnadagouda/Road-Trip-Planner",
  },
];

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "1M+", label: "Users Impacted" },
  { value: "11M+", label: "Subscribers Supported" },
  { value: "95–100%", label: "Code Coverage" },
];

const architecture = [
  { title: "Client Apps", icon: Layers3 },
  { title: "API Gateway", icon: Radar },
  { title: "Identity / KYC", icon: Shield },
  { title: "Core Services", icon: Cpu },
  { title: "Data & Monitoring", icon: Database },
];

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -24, 0], x: [0, 10, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function SectionTitle({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className="section-head">
      <div>
        <div className="section-label">{label}</div>
        <h3>{title}</h3>
      </div>
      {copy ? <div className="section-copy">{copy}</div> : null}
    </div>
  );
}

export default function App() {
  return (
    <div className="portfolio-root">
      <style>{`
        :root {
          --bg: #05070b;
          --panel: rgba(255,255,255,0.05);
          --panel-2: rgba(255,255,255,0.035);
          --line: rgba(255,255,255,0.09);
          --text: rgba(255,255,255,0.92);
          --soft: rgba(255,255,255,0.68);
          --muted: rgba(255,255,255,0.46);
          --cyan: #7dd3fc;
          --violet: #a78bfa;
          --blue: #60a5fa;
        }
        * { box-sizing: border-box; }
        html, body, #root { margin: 0; min-height: 100%; background: var(--bg); }
        body {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--text);
          background:
            radial-gradient(circle at top, rgba(125,211,252,0.10), transparent 24%),
            radial-gradient(circle at 80% 18%, rgba(167,139,250,0.10), transparent 20%),
            linear-gradient(180deg, #07090f 0%, #05070b 100%);
        }
        a { color: inherit; text-decoration: none; }
        .portfolio-root { min-height: 100vh; overflow-x: hidden; }
        .shell { width: min(1260px, calc(100% - 32px)); margin: 0 auto; }
        .nav {
          position: sticky; top: 0; z-index: 50; backdrop-filter: blur(18px);
          background: rgba(5,7,11,0.72); border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          width: min(1260px, calc(100% - 32px)); margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; padding: 18px 0;
        }
        .brand { font-size: 12px; letter-spacing: 0.32em; text-transform: uppercase; color: rgba(255,255,255,0.88); }
        .nav-links { display: flex; gap: 24px; }
        .nav-links a { font-size: 14px; color: rgba(255,255,255,0.60); }
        .nav-links a:hover { color: white; }
        .hero { padding: 36px 0 18px; position: relative; }
        .hero-card {
          position: relative; overflow: hidden; border-radius: 38px; border: 1px solid var(--line);
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.13), transparent 32%),
            linear-gradient(135deg, #0f172a 0%, #0b1222 28%, #06080d 100%);
          padding: 34px; box-shadow: 0 40px 120px rgba(0,0,0,0.55);
          perspective: 1400px;
        }
        .bg-grid {
          position: absolute; inset: 0; opacity: 0.22; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 34px 34px;
          mask-image: radial-gradient(circle at center, black 30%, transparent 85%);
        }
        .orb { position: absolute; border-radius: 999px; filter: blur(70px); opacity: 0.55; pointer-events: none; }
        .orb-cyan { width: 260px; height: 260px; right: -40px; top: 40px; background: rgba(125,211,252,0.28); }
        .orb-violet { width: 220px; height: 220px; left: -60px; bottom: 10px; background: rgba(167,139,250,0.20); }
        .orb-blue { width: 180px; height: 180px; right: 34%; bottom: -50px; background: rgba(96,165,250,0.16); }
        .hero-grid { display: grid; grid-template-columns: 1.02fr 0.98fr; gap: 30px; align-items: center; position: relative; z-index: 1; }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 10px; padding: 10px 15px; border-radius: 999px;
          border: 1px solid var(--line); background: rgba(255,255,255,0.05);
          font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.66);
        }
        .hero h1 {
          margin: 22px 0 0; font-size: clamp(54px, 8vw, 108px); line-height: 0.92; letter-spacing: -0.065em; font-weight: 700;
          background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.42) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero h2 { margin: 18px 0 0; font-size: 21px; font-weight: 500; color: rgba(255,255,255,0.78); letter-spacing: -0.02em; }
        .hero p { margin: 22px 0 0; max-width: 720px; line-height: 1.85; color: var(--soft); font-size: 17px; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 30px; }
        .btn {
          display: inline-flex; align-items: center; gap: 10px; padding: 14px 20px; border-radius: 999px;
          font-size: 14px; font-weight: 600; transition: 180ms ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-solid { background: white; color: black; }
        .btn-ghost { background: rgba(255,255,255,0.05); border: 1px solid var(--line); }
        .scene-wrap { height: 100%; min-height: 460px; position: relative; display: grid; place-items: center; }
        .scene {
          width: 100%; max-width: 500px; height: 430px; position: relative;
          transform-style: preserve-3d; perspective: 1400px;
        }
        .scene-card {
          position: absolute; border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.05);
          box-shadow: 0 30px 80px rgba(0,0,0,0.35); backdrop-filter: blur(18px);
        }
        .core-card {
          inset: 92px 78px 92px 78px; border-radius: 34px; padding: 24px;
          transform: rotateX(16deg) rotateY(-18deg) translateZ(10px);
          background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03));
        }
        .node-card {
          border-radius: 26px; padding: 16px 18px; min-width: 145px;
          transform-style: preserve-3d;
        }
        .node-1 { top: 34px; left: 18px; transform: rotateY(18deg) rotateX(12deg) translateZ(55px); }
        .node-2 { top: 42px; right: 14px; transform: rotateY(-18deg) rotateX(10deg) translateZ(40px); }
        .node-3 { bottom: 32px; left: 28px; transform: rotateY(12deg) rotateX(-10deg) translateZ(52px); }
        .node-4 { bottom: 22px; right: 24px; transform: rotateY(-15deg) rotateX(-8deg) translateZ(42px); }
        .scene-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--muted); }
        .scene-title { margin-top: 10px; font-size: 24px; line-height: 1.08; letter-spacing: -0.03em; }
        .scene-text { margin-top: 14px; color: var(--soft); line-height: 1.7; font-size: 14px; }
        .mini-title { margin-top: 10px; font-size: 15px; color: rgba(255,255,255,0.92); font-weight: 600; }
        .mini-chip { margin-top: 8px; display: inline-flex; padding: 7px 10px; border-radius: 999px; border: 1px solid var(--line); color: rgba(255,255,255,0.7); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; }
        .section { padding: 34px 0; }
        .section-head { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 18px; }
        .section-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.24em; color: var(--muted); }
        .section-head h3 { margin: 10px 0 0; font-size: clamp(30px, 4vw, 48px); line-height: 1; letter-spacing: -0.04em; }
        .section-copy { max-width: 720px; color: var(--soft); line-height: 1.8; }
        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .stat {
          border-radius: 26px; border: 1px solid var(--line); background: rgba(255,255,255,0.035); padding: 22px;
          transform-style: preserve-3d;
        }
        .stat strong { display: block; font-size: 30px; }
        .stat span { display: block; margin-top: 10px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--muted); }
        .summary-panel, .skills-card, .project-card, .edu-card, .contact-box, .experience-card, .arch-panel {
          border: 1px solid var(--line); background: var(--panel-2); backdrop-filter: blur(18px);
        }
        .summary-panel { border-radius: 32px; padding: 28px; font-size: 18px; line-height: 1.95; color: var(--soft); }
        .arch-panel { border-radius: 34px; padding: 26px; overflow: hidden; position: relative; }
        .arch-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; align-items: center; }
        .arch-node {
          position: relative; border-radius: 24px; border: 1px solid var(--line); background: rgba(255,255,255,0.04); padding: 18px 14px; text-align: center; min-height: 118px;
          transform-style: preserve-3d;
        }
        .arch-node svg { margin-bottom: 10px; }
        .arch-node::after {
          content: ""; position: absolute; top: 50%; right: -15px; width: 16px; height: 1px; background: rgba(255,255,255,0.22);
        }
        .arch-node:last-child::after { display: none; }
        .experience-list { display: grid; gap: 18px; }
        .experience-card {
          position: relative; overflow: hidden; border-radius: 34px; padding: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
        }
        .experience-card.cyan::before,
        .experience-card.violet::before,
        .experience-card.blue::before {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0.9;
        }
        .experience-card.cyan::before { background: radial-gradient(circle at top right, rgba(125,211,252,0.16), transparent 28%); }
        .experience-card.violet::before { background: radial-gradient(circle at top right, rgba(167,139,250,0.16), transparent 28%); }
        .experience-card.blue::before { background: radial-gradient(circle at top right, rgba(96,165,250,0.15), transparent 28%); }
        .exp-top { display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: start; position: relative; z-index: 1; }
        .exp-title { font-size: 30px; margin: 0; letter-spacing: -0.03em; }
        .exp-role { margin-top: 6px; color: rgba(255,255,255,0.76); font-size: 16px; }
        .exp-meta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 12px; color: var(--muted); font-size: 13px; }
        .pill {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid var(--line); background: rgba(255,255,255,0.05);
          padding: 10px 14px; border-radius: 999px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.68);
        }
        .exp-summary { margin-top: 18px; color: var(--soft); line-height: 1.8; max-width: 860px; position: relative; z-index: 1; }
        .bullet-grid { display: grid; gap: 12px; margin-top: 20px; position: relative; z-index: 1; }
        .bullet {
          display: flex; gap: 12px; align-items: start; padding: 14px 16px;
          border-radius: 20px; background: rgba(0,0,0,0.20); border: 1px solid var(--line); color: rgba(255,255,255,0.80); line-height: 1.75;
        }
        .bullet-dot { width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(180deg, var(--cyan), var(--violet)); margin-top: 10px; }
        .skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .skills-card { border-radius: 28px; padding: 22px; transform-style: preserve-3d; }
        .skills-card h4 { margin: 16px 0 0; font-size: 21px; }
        .skill-items { margin-top: 14px; display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-chip {
          border-radius: 999px; padding: 10px 14px; font-size: 13px;
          background: rgba(0,0,0,0.24); border: 1px solid var(--line); color: rgba(255,255,255,0.84);
        }
        .icon-box {
          width: 44px; height: 44px; border-radius: 16px; display: grid; place-items: center;
          background: rgba(255,255,255,0.05); border: 1px solid var(--line);
        }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .project-card { border-radius: 30px; padding: 24px; transition: 180ms ease; position: relative; overflow: hidden; }
        .project-card:hover { transform: translateY(-3px); background: rgba(255,255,255,0.055); }
        .project-card::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at top right, rgba(125,211,252,0.12), transparent 26%);
        }
        .project-stack { color: var(--muted); text-transform: uppercase; letter-spacing: 0.18em; font-size: 11px; position: relative; z-index: 1; }
        .project-card h4 { margin: 14px 0 0; font-size: 27px; line-height: 1.08; letter-spacing: -0.03em; position: relative; z-index: 1; }
        .project-card p { margin: 16px 0 0; line-height: 1.8; color: var(--soft); position: relative; z-index: 1; }
        .project-link { margin-top: 24px; display: inline-flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.84); position: relative; z-index: 1; }
        .dual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .edu-card { border-radius: 30px; padding: 24px; }
        .edu-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .edu-card h4 { margin: 0; font-size: 26px; letter-spacing: -0.03em; }
        .edu-item {
          border: 1px solid var(--line); background: rgba(255,255,255,0.035); border-radius: 22px; padding: 18px; margin-top: 14px;
        }
        .edu-item strong { display: block; font-size: 18px; }
        .edu-item span { display: block; margin-top: 6px; color: rgba(255,255,255,0.76); }
        .edu-item small { display: block; margin-top: 8px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; }
        .contact-box {
          border-radius: 36px; padding: 28px;
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
        @media (max-width: 1120px) {
          .hero-grid, .contact-grid, .dual-grid { grid-template-columns: 1fr; }
          .stats-row, .skills-grid { grid-template-columns: repeat(2, 1fr); }
          .projects-grid { grid-template-columns: 1fr 1fr; }
          .arch-grid { grid-template-columns: repeat(5, minmax(110px, 1fr)); overflow-x: auto; padding-bottom: 6px; }
        }
        @media (max-width: 760px) {
          .shell, .nav-inner { width: min(100% - 24px, 1260px); }
          .nav-links { display: none; }
          .hero-card { padding: 22px; }
          .scene-wrap { min-height: 360px; }
          .core-card { inset: 88px 32px 92px 32px; }
          .node-card { min-width: 122px; }
          .stats-row, .skills-grid, .projects-grid { grid-template-columns: 1fr; }
          .section-head { display: block; }
          .arch-grid { display: grid; grid-template-columns: 1fr; }
          .arch-node::after { display: none; }
          .exp-top { grid-template-columns: 1fr; }
          .stat strong { font-size: 26px; }
        }
      `}</style>

      <header className="nav">
        <div className="nav-inner">
          <div className="brand">Chirag Arora</div>
          <nav className="nav-links">
            <a href="#summary">Summary</a>
            <a href="#architecture">Architecture</a>
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-card"
          >
            <div className="bg-grid" />
            <FloatingOrb className="orb orb-cyan" />
            <FloatingOrb className="orb orb-violet" delay={1.2} />
            <FloatingOrb className="orb orb-blue" delay={2.1} />

            <div className="hero-grid">
              <div>
                <div className="eyebrow">
                  <Sparkles size={14} />
                  3D Backend Engineer Portfolio
                </div>
                <h1>Chirag Arora</h1>
                <h2>Senior Backend Engineer · Distributed Systems · Scalable APIs</h2>
                <p>
                  Backend engineer with 6+ years of experience building secure APIs, distributed systems, CI/CD pipelines,
                  and production-grade backend platforms across PayPal, Walmart Global Tech, and Ericsson.
                </p>
                <div className="hero-actions">
                  <a href="#experience" className="btn btn-solid">
                    Explore Resume <ArrowRight size={16} />
                  </a>
                  <a href="https://github.com/chirag-arora01" target="_blank" rel="noreferrer" className="btn btn-ghost">
                    View GitHub <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="scene-wrap">
                <motion.div
                  className="scene"
                  animate={{ rotateY: [0, 8, 0, -8, 0], rotateX: [0, 4, 0, -4, 0] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="scene-card core-card">
                    <div className="scene-label">Core Engine</div>
                    <div className="scene-title">Backend Command Center</div>
                    <div className="scene-text">
                      Java, Spring Boot, microservices, CI/CD, cloud systems, testing automation, and production support — presented as a 3D systems board.
                    </div>
                    <div className="mini-chip">High Scale · High Trust</div>
                  </div>

                  <motion.div className="scene-card node-card node-1" animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                    <Shield size={18} />
                    <div className="mini-title">Identity / KYC</div>
                    <div className="mini-chip">Compliance</div>
                  </motion.div>

                  <motion.div className="scene-card node-card node-2" animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
                    <Cloud size={18} />
                    <div className="mini-title">Cloud Delivery</div>
                    <div className="mini-chip">CI/CD</div>
                  </motion.div>

                  <motion.div className="scene-card node-card node-3" animate={{ y: [0, -7, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}>
                    <Workflow size={18} />
                    <div className="mini-title">Testing Systems</div>
                    <div className="mini-chip">Automation</div>
                  </motion.div>

                  <motion.div className="scene-card node-card node-4" animate={{ y: [0, -9, 0] }} transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}>
                    <Database size={18} />
                    <div className="mini-title">Data / Messaging</div>
                    <div className="mini-chip">Scale</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="section" id="summary">
          <SectionTitle
            label="Professional Summary"
            title="A portfolio that looks premium, but still reads like a strong resume."
            copy="Built to help recruiters and hiring managers scan your impact quickly while still feeling creative and visually memorable."
          />
          <div className="summary-panel">
            Experienced Software Engineer with 6+ years of expertise in backend system design and cloud technologies. Specialized in microservices,
            system scalability, CI/CD, and secure backend architecture with a strong record of delivering reliable, high-performance systems for global organizations.
            Strong at cross-functional collaboration, testing discipline, project delivery, mentorship, and production support.
          </div>
        </section>

        <section className="section">
          <SectionTitle label="Highlights" title="Impact metrics from your resume, surfaced up front." />
          <div className="stats-row">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, rotateX: 4, rotateY: i % 2 === 0 ? 3 : -3 }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section" id="architecture">
          <SectionTitle
            label="System Architecture"
            title="A visual backend flow that makes your portfolio feel engineered, not templated."
            copy="This section gives recruiters a quick mental model of the kind of systems you’ve built across onboarding, compliance, orchestration, and data flows."
          />
          <div className="arch-panel">
            <div className="arch-grid">
              {architecture.map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.title}
                    className="arch-node"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4, rotateX: 4, rotateY: i % 2 === 0 ? 4 : -4 }}
                  >
                    <Icon size={20} />
                    <div style={{ fontWeight: 600, color: 'rgba(255,255,255,0.90)' }}>{node.title}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionTitle
            label="Work Experience"
            title="Proper resume sections, upgraded with 3D presentation and stronger storytelling."
            copy="Each role is kept faithful to your Chirag Arora resume, but presented in a richer, more visual format."
          />
          <div className="experience-list">
            {experience.map((exp, i) => (
              <motion.article
                key={exp.company}
                className={`experience-card ${exp.accent}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
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
                  <div className="pill">{exp.metric}</div>
                </div>
                <p className="exp-summary">{exp.summary}</p>
                <div className="bullet-grid">
                  {exp.points.map((point) => (
                    <div key={point} className="bullet">
                      <span className="bullet-dot" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionTitle
            label="Technical Skills"
            title="Organized like a professional resume, displayed like a premium product grid."
          />
          <div className="skills-grid">
            {skills.map((group, i) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  className="skills-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  whileHover={{ y: -4, rotateX: 4, rotateY: i % 2 === 0 ? 3 : -3 }}
                >
                  <div className="icon-box"><Icon size={18} /></div>
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
          <SectionTitle
            label="Projects"
            title="Side projects and academic builds with cleaner presentation."
          />
          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.href}
                target={project.href.startsWith('http') ? '_blank' : undefined}
                rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
                className="project-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4, rotateX: 4, rotateY: i % 2 === 0 ? 3 : -3 }}
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
          <SectionTitle
            label="Education & Recognition"
            title="Dedicated sections for academic background and awards."
          />
          <div className="dual-grid">
            <div className="edu-card">
              <div className="edu-head">
                <div className="icon-box"><GraduationCap size={18} /></div>
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
                <div className="icon-box"><Award size={18} /></div>
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
                <h3>Ready for recruiters, hiring managers, and serious backend teams.</h3>
                <p>
                  This portfolio is now centered only on Chirag Arora’s backend engineering story — no generic filler, no irrelevant sections, just a stronger presentation of your actual resume details.
                </p>
              </div>
              <div className="contact-links">
                {[
                  [Github, 'GitHub', 'github.com/chirag-arora01', 'https://github.com/chirag-arora01'],
                  [Linkedin, 'LinkedIn', 'linkedin.com/in/chirag-arora-1001', 'https://www.linkedin.com/in/chirag-arora-1001/'],
                  [Mail, 'Email', 'arorachirag1001@gmail.com', 'mailto:arorachirag1001@gmail.com'],
                  [Phone, 'Phone', '+1 (669) 877-4684', 'tel:+16698774684'],
                ].map(([Icon, label, value, href]) => {
                  const Cmp = Icon as React.ComponentType<{ size?: number }>;
                  return (
                    <a
                      key={label as string}
                      href={href as string}
                      target={(href as string).startsWith('http') ? '_blank' : undefined}
                      rel={(href as string).startsWith('http') ? 'noreferrer' : undefined}
                      className="contact-link"
                    >
                      <div className="contact-left">
                        <div className="icon-box"><Cmp size={18} /></div>
                        <div className="contact-meta">
                          <small>{label as string}</small>
                          <span>{value as string}</span>
                        </div>
                      </div>
                      <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.45)' }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          Chirag Arora · Backend Engineer Portfolio
        </footer>
      </main>
    </div>
  );
}
