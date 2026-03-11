import { Github, Linkedin, Mail, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

const featuredWork = [
  {
    title: "PayPal Identity & Onboarding",
    metric: "1M+ users annually",
    description:
      "Designed secure onboarding APIs and compliance-driven backend flows with Java, Spring Boot, and service orchestration across critical downstream systems.",
  },
  {
    title: "Walmart Chargeback Systems",
    metric: "25% efficiency gain",
    description:
      "Built and optimized backend APIs that improved transaction processing quality, compliance accuracy, and extensibility across commerce services.",
  },
  {
    title: "Ericsson Telecom Platform",
    metric: "11M+ subscribers",
    description:
      "Developed highly scalable microservices, CI/CD workflows, and event-driven backend services with reliability and observability at the core.",
  },
];

const projects = [
  {
    title: "Airport Management System",
    type: "Operations Platform",
    href: "https://github.com/gopinathsjsu/team-project-data-structure-deadheads",
  },
  {
    title: "Road Trip Planner",
    type: "Consumer Travel App",
    href: "https://github.com/prajwalnadagouda/Road-Trip-Planner",
  },
  {
    title: "GitHub Profile",
    type: "Code Portfolio",
    href: "https://github.com/chirag-arora01",
  },
  {
    title: "LinkedIn Profile",
    type: "Professional Brand",
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

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">CHIRAG ARORA</div>
        <nav>
          <a href="#featured">Featured</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="eyebrow">PREMIUM BACKEND PORTFOLIO</div>
          <h1>
            Backend engineering,
            <br />
            designed like a product.
          </h1>
          <p className="hero-text">
            Senior Backend Engineer with 6+ years of experience across PayPal,
            Walmart Global Tech, and Ericsson. I build scalable APIs,
            distributed systems, and production-ready backend platforms with a
            strong focus on reliability, performance, and elegant execution.
          </p>

          <div className="hero-actions">
            <a href="#featured" className="btn btn-light">
              <Play size={16} />
              Explore Portfolio
            </a>
            <a
              href="https://github.com/chirag-arora01"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              View GitHub
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="hero-panel">
          <div className="hero-panel-text">
            <span>Now Streaming</span>
            <h2>Enterprise-grade systems. Consumer-grade storytelling.</h2>
            <p>
              Payments, compliance, microservices, CI/CD, service scalability,
              and production reliability — presented with an Apple-meets-Netflix
              visual style.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <strong>1M+</strong>
              <span>Users Impacted</span>
            </div>
            <div className="stat-card">
              <strong>11M+</strong>
              <span>Subscriber Scale</span>
            </div>
            <div className="stat-card">
              <strong>99.9%</strong>
              <span>Reliability</span>
            </div>
            <div className="stat-card">
              <strong>6+ Yrs</strong>
              <span>Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="section">
        <div className="section-head">
          <div>
            <div className="section-label">FEATURED WORK</div>
            <h3>Signature systems I’ve built</h3>
          </div>
        </div>

        <div className="card-grid three">
          {featuredWork.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <div className="pill">{item.metric}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <div className="section-label">TECH STACK</div>
            <h3>Built for scale</h3>
          </div>
        </div>

        <div className="stack-wrap">
          {stack.map((item) => (
            <div key={item} className="stack-pill">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head">
          <div>
            <div className="section-label">PROJECTS & PROFILES</div>
            <h3>Explore the portfolio library</h3>
          </div>
        </div>

        <div className="card-grid four">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              <span>{project.type}</span>
              <h4>{project.title}</h4>
              <div className="project-link">
                Open <ArrowRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact-box">
          <div className="contact-copy">
            <div className="section-label">CONTACT</div>
            <h3>Ready for recruiters, managers, and product-minded teams.</h3>
            <p>
              If you’re looking for a backend engineer who can combine scale,
              architecture, reliability, and polished execution, I’d love to
              connect.
            </p>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/chirag-arora01"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/chirag-arora-1001/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:arorachirag1001@gmail.com">
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;